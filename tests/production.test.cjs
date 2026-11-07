const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { execFileSync, spawnSync } = require("node:child_process");
const vm = require("node:vm");
const P = require("../src/progress-core.js");
const sample = {
  "petit-tour-v1": {
    english: true,
    badges: ["months-quiz"],
    englishBadges: ["days-order"],
  },
  "petits-declics-maths-v1": {
    sessions: 3,
    facts: {
      "2x3": {
        tries: 3,
        misses: 1,
        streak: 2,
        debt: 0,
        lastSession: "previous",
      },
    },
  },
  "petits-declics-college-v1": {
    grade: "5e",
    subject: "sciences",
    fractions: [1, 0, 2, 1],
    courses: {
      fractions: [1, 0, 2, 1],
      "masse-volume-mesures": [1, null, null, null, null, null],
    },
  },
};
function storage(data = {}) {
  const map = new Map(
    Object.entries(data).map(([k, v]) => [
      k,
      typeof v === "string" ? v : JSON.stringify(v),
    ]),
  );
  return {
    getItem: (k) => map.get(k) ?? null,
    setItem: (k, v) => map.set(k, v),
    removeItem: (k) => map.delete(k),
    map,
  };
}
test("sauvegarde complète aller-retour entre deux origines sans perdre les progrès", () => {
  const original = storage(sample),
    target = storage({ "autre-application": "conserver" });
  P.restore(target, P.parse(P.exportText(original)));
  assert.deepEqual(P.read(target), sample);
  assert.equal(target.getItem("autre-application"), "conserver");
});
test("import partiel préserve les univers absents et rejette les fichiers non compatibles", () => {
  const target = storage(sample);
  P.restore(target, { "petit-tour-v1": { badges: [], englishBadges: [] } });
  assert.deepEqual(
    JSON.parse(target.getItem("petits-declics-maths-v1")),
    sample["petits-declics-maths-v1"],
  );
  const valid = {
    format: "les-petits-declics-progress",
    version: 1,
    data: sample,
  };
  for (const item of [
    { ...valid, version: 2 },
    { ...valid, data: { "autre-app": {} } },
    { ...valid, data: { "petit-tour-v1": { badges: ["<script>"] } } },
    { ...valid, data: { "petits-declics-college-v1": { grade: "99e" } } },
  ])
    assert.throws(() => P.parse(JSON.stringify(item)));
  assert.throws(() => P.parse("x".repeat(500001)));
  assert.throws(() =>
    P.parse(
      '{"format":"les-petits-declics-progress","version":1,"data":{"petit-tour-v1":{"__proto__":{}}}}',
    ),
  );
});
test("échec de stockage pendant un import restaure les écritures précédentes", () => {
  const target = storage(sample),
    before = [...target.map],
    write = target.setItem;
  let count = 0;
  target.setItem = (k, v) => {
    if (++count === 2) throw Error("quota");
    write(k, v);
  };
  assert.throws(() => P.restore(target, sample), /restaurés/);
  assert.deepEqual([...target.map], before);
});
test("les routes historiques migrent vers les vraies pages sans toucher aux stockages", () => {
  const loc = {
    pathname: "/",
    hash: "#college/5e/sciences/masse-volume-mesures",
    replace(url) {
      this.redirect = url;
    },
  };
  const ctx = { window: {}, location: loc };
  vm.runInNewContext(fs.readFileSync("src/routing.js", "utf8"), ctx);
  assert.equal(loc.redirect, "/cours/5e/sciences/masse-volume-mesures/");
  loc.hash = "";
  loc.pathname = "/cours/6e/francais/accord-sujet-verbe/";
  const fresh = { window: {}, location: loc };
  vm.runInNewContext(fs.readFileSync("src/routing.js", "utf8"), fresh);
  assert.deepEqual(Array.from(fresh.window.DeclicRoutes.parts()), [
    "college",
    "6e",
    "francais",
    "accord-sujet-verbe",
  ]);
});
test("version privée non indexable, cours pré-rendus et aucune police distante", () => {
  const html = fs.readFileSync(
    "dist/cours/5e/sciences/masse-volume-mesures/index.html",
    "utf8",
  );
  assert.match(html, /Mesurer la masse d’un liquide/);
  assert.match(html, /124 g/);
  assert.match(html, /noindex, nofollow/);
  assert.match(
    fs.readFileSync("dist/index.html", "utf8"),
    /href="\/cours\/3e\/histoire-geographie\/aires-urbaines-mobilites\/"/,
  );
  assert.doesNotMatch(
    fs.readFileSync("dist/styles.css", "utf8"),
    /https?:\/\//,
  );
  for (const slug of [
    "mentions-legales",
    "confidentialite",
    "conditions-utilisation",
    "mes-progres",
  ])
    assert.ok(fs.existsSync("dist/" + slug + "/index.html"));
  assert.match(
    fs.readFileSync("dist/_headers", "utf8"),
    /Content-Security-Policy/,
  );
});
test("génération publique refuse les champs manquants et produit canonical, sitemap et redirections sur configuration complète", () => {
  const refused = spawnSync(
    process.execPath,
    ["scripts/build.mjs", "--check-public"],
    { encoding: "utf8" },
  );
  assert.equal(refused.status, 1);
  assert.match(refused.stderr, /editor.contactEmail/);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "declic-release-"));
  try {
    const cfg = {
      ...JSON.parse(fs.readFileSync("site-config.json")),
      mode: "public",
      publicUrl: "https://example.org",
      editor: {
        status: "non-professionnel-anonyme",
        contactEmail: "contact@example.org",
        identityProvidedToHost: true,
      },
      hosting: {
        name: "Hébergeur de test",
        address: "Adresse de test",
        phone: "Téléphone de test",
        privacyUrl: "https://example.org/privacy",
        technicalDataRetention: "Durée de test",
        processingAndTransfers: "Paramètres de test",
        reviewed: true,
      },
      redirectHosts: ["example.pages.dev"],
      updated: "2026-11-03",
    };
    const config = path.join(tmp, "config.json"),
      out = path.join(tmp, "site");
    fs.writeFileSync(config, JSON.stringify(cfg));
    execFileSync(process.execPath, [
      "scripts/build.mjs",
      "--config",
      config,
      "--out",
      out,
    ]);
    const lesson = fs.readFileSync(
      path.join(out, "cours/6e/mathematiques/fractions/index.html"),
      "utf8",
    );
    assert.match(
      lesson,
      /<link rel="canonical" href="https:\/\/example.org\/cours\/6e\/mathematiques\/fractions\/">/,
    );
    assert.match(lesson, /property="og:image"/);
    assert.doesNotMatch(lesson, /noindex/);
    assert.match(
      fs.readFileSync(path.join(out, "sitemap.xml"), "utf8"),
      /https:\/\/example.org\/cours\/5e\/sciences/,
    );
    assert.match(
      fs.readFileSync(path.join(out, "_redirects"), "utf8"),
      /https:\/\/example.pages.dev\/\* https:\/\/example.org\/:splat 301/,
    );
    assert.doesNotMatch(
      fs.readFileSync(path.join(out, "mentions-legales/index.html"), "utf8"),
      /Version privée de préparation/,
    );
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

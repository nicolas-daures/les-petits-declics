import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { esc, informationPages } from "./content.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const option = (name, fallback) =>
  args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const cfg = JSON.parse(
  await readFile(option("--config", resolve(root, "site-config.json")), "utf8"),
);
const isPublic =
  args.includes("--public") ||
  args.includes("--check-public") ||
  cfg.mode === "public";
export function publicErrors(c) {
  const errors = [];
  try {
    const u = new URL(c.publicUrl);
    if (
      u.protocol !== "https:" ||
      u.pathname !== "/" ||
      u.search ||
      u.hash ||
      u.username ||
      u.password
    )
      throw Error();
  } catch {
    errors.push("publicUrl : origine HTTPS sans chemin, query ou fragment");
  }
  const e = c.editor ?? {},
    h = c.hosting ?? {};
  if (
    ![
      "non-professionnel-anonyme",
      "non-professionnel",
      "professionnel",
    ].includes(e.status)
  )
    errors.push("editor.status");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.contactEmail ?? ""))
    errors.push("editor.contactEmail");
  if (e.status === "non-professionnel-anonyme") {
    if (e.identityProvidedToHost !== true)
      errors.push("editor.identityProvidedToHost");
  } else
    for (const k of ["publicName", "address", "phone", "publicationDirector"])
      if (!e[k]?.trim()) errors.push("editor." + k);
  if (e.status === "professionnel" && !e.registration?.trim())
    errors.push("editor.registration");
  for (const k of [
    "name",
    "address",
    "phone",
    "technicalDataRetention",
    "processingAndTransfers",
  ])
    if (!h[k]?.trim()) errors.push("hosting." + k);
  if (h.reviewed !== true) errors.push("hosting.reviewed");
  try {
    if (new URL(h.privacyUrl).protocol !== "https:") throw Error();
  } catch {
    errors.push("hosting.privacyUrl");
  }
  if ((c.redirectHosts ?? []).some((s) => !/^[a-z0-9.-]+$/i.test(s)))
    errors.push("redirectHosts : noms d’hôtes uniquement");
  return errors;
}
if (isPublic) {
  const errors = publicErrors(cfg);
  if (errors.length) {
    console.error(
      "Publication publique non configurée :\n- " + errors.join("\n- "),
    );
    process.exit(1);
  }
}
if (args.includes("--check-public")) {
  console.log(
    "Configuration publique complète (validation juridique et réglages réels à vérifier).",
  );
  process.exit(0);
}
const out = resolve(option("--out", resolve(root, "dist")));
if ([root, resolve(root, "src"), "/"].includes(out))
  throw Error("Dossier de sortie interdit.");
await rm(out, { recursive: true, force: true });
await cp(resolve(root, "src"), out, { recursive: true });
const registry = { window: {} };
vm.runInNewContext(
  await readFile(resolve(root, "src/courses.js"), "utf8"),
  registry,
);
const courses = registry.window.COLLEGE_COURSES;
const footer =
  '<nav class="legal-links" aria-label="Informations et données"><a href="/mentions-legales/">Mentions légales</a><a href="/confidentialite/">Confidentialité</a><a href="/conditions-utilisation/">Conditions d’utilisation</a><a href="/mes-progres/">Mes progrès</a></nav>';
const siteTitle = "Les petits déclics";
const canonical = (path) =>
  isPublic ? new URL(path, cfg.publicUrl).href : null;
function meta(title, description, path, noindex = false) {
  const url = canonical(path);
  return (
    "<title>" +
    esc(title) +
    '</title><meta name="description" content="' +
    esc(description) +
    '"><meta name="robots" content="' +
    (!isPublic || noindex ? "noindex, nofollow" : "index, follow") +
    '"><meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><meta property="og:site_name" content="' +
    siteTitle +
    '"><meta property="og:title" content="' +
    esc(title) +
    '"><meta property="og:description" content="' +
    esc(description) +
    '"><meta name="twitter:card" content="summary_large_image">' +
    (url
      ? '<link rel="canonical" href="' +
        esc(url) +
        '"><meta property="og:url" content="' +
        esc(url) +
        '"><meta property="og:image" content="' +
        esc(new URL("/social-card.png", cfg.publicUrl).href) +
        '"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Les petits déclics — comprendre, s’entraîner, progresser au collège">'
      : "")
  );
}
function cards(list) {
  return list
    .map(
      (c) =>
        '<a class="course-card" href="/cours/' +
        c.grade +
        "/" +
        c.subject +
        "/" +
        c.id +
        '/"><div class="course-icon" aria-hidden="true">' +
        c.icon +
        '</div><div><span class="category-label">' +
        c.grade +
        " · " +
        esc(c.subjectName) +
        "</span><h3>" +
        esc(c.title) +
        "</h3><p>" +
        esc(c.description) +
        '</p><span class="course-status">Cours + ' +
        c.questions.length +
        " exercices expliqués</span></div></a>",
    )
    .join("");
}
let shell = await readFile(resolve(root, "src/index.html"), "utf8");
shell = shell
  .replace(/<meta\s+name="description"[^>]*>/g, "")
  .replace(/<title>.*?<\/title>/, "");
shell = shell
  .replace("</head>", '<link rel="stylesheet" href="/production.css"></head>')
  .replace(
    "<body>",
    '<body><a class="skip-link" href="#main">Aller au contenu</a>',
  );
shell = shell.replace("</footer>", footer + "</footer>").replace(/^[ \t]+$/gm, "");
const home = shell
  .replace(
    "</head>",
    meta(
      siteTitle + " · Réviser au collège",
      "Cours et exercices corrigés en mathématiques, français, anglais, géographie et sciences. Des révisions progressives de la 6e à la 3e.",
      "/",
    ) + "</head>",
  )
  .replace(
    /<div\s+id="course-results"[^>]*>\s*<\/div>/,
    '<div id="course-results" aria-live="polite">' + cards(courses) + "</div>",
  )
  .replace(
    "</main>",
    "<noscript><p>Les cours restent lisibles sans JavaScript. Active-le pour les exercices interactifs et la sauvegarde des progrès.</p></noscript></main>",
  );
if (!home.includes(courses[0].title)) throw Error("Catalogue HTML non généré.");
await writeFile(resolve(out, "index.html"), home);
const urls = ["/"];
const collegeCode = await readFile(resolve(root, "src/college.js"), "utf8");
for (const c of courses) {
  const path = "/cours/" + c.grade + "/" + c.subject + "/" + c.id + "/";
  const nodes = new Map();
  const node = () => ({
    innerHTML: "",
    value: "",
    classList: { toggle() {}, add() {} },
    focus() {},
    scrollIntoView() {},
  });
  const get = (s) => {
    if (!nodes.has(s)) nodes.set(s, node());
    return nodes.get(s);
  };
  const ctx = {
    window: { COLLEGE_COURSES: courses, addEventListener() {}, scrollTo() {} },
    document: { querySelector: get, querySelectorAll: () => [] },
    location: { hash: "#college/" + c.grade + "/" + c.subject + "/" + c.id },
    history: { replaceState() {} },
    localStorage: { getItem: () => null, setItem() {} },
  };
  vm.runInNewContext(collegeCode, ctx);
  const fallback =
    '<noscript><section class="lesson-course"><h2>Corrections à consulter</h2>' +
    c.questions
      .map(
        (q, i) =>
          "<details><summary>Exercice " +
          (i + 1) +
          " : correction</summary><p>Réponse : " +
          q.options[q.correct] +
          "</p><p>" +
          q.explanation +
          "</p></details>",
      )
      .join("") +
    "</section></noscript>";
  let html = shell.replace(
    "</head>",
    meta(
      c.title + " · " + c.subjectName + " " + c.grade + " · " + siteTitle,
      c.description,
      path,
    ) + "</head>",
  );
  html = html.replace(
    '<section id="home-page">',
    '<section id="home-page" class="hidden">',
  );
  if (!/<section\s+id="college-page"[^>]*>\s*<\/section>/.test(html)) throw Error('Emplacement du cours introuvable dans src/index.html');
  html = html.replace(
    /<section\s+id="college-page"[^>]*>\s*<\/section>/,
    '<section id="college-page" aria-label="Cours et exercices du collège">' +
      get("#college-page").innerHTML.replace(/<button /g, "<button disabled ") +
      fallback +
      "</section>",
  );
  await mkdir(resolve(out, "." + path), { recursive: true });
  if (!html.includes(c.title) || !html.includes(c.questions[0].explanation)) throw Error("Cours HTML incomplet : " + c.id);
  await writeFile(resolve(out, "." + path, "index.html"), html);
  urls.push(path);
}
const pages = informationPages(cfg, isPublic);
function infoPage(p, extra = "") {
  const path = "/" + p.slug + "/";
  return (
    '<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    meta(
      p.title + " · " + siteTitle,
      p.description,
      path,
      p.slug === "mes-progres",
    ) +
    '<link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/college.css"><link rel="stylesheet" href="/production.css"></head><body><a class="skip-link" href="#main">Aller au contenu</a><header><a class="brand" href="/">Les petits déclics</a><a href="/">Revenir aux cours</a></header><main id="main" class="info-shell"><h1>' +
    esc(p.title) +
    "</h1>" +
    p.body +
    "<p><small>Dernière mise à jour : " +
    esc(cfg.updated) +
    ".</small></p>" +
    footer +
    "</main>" +
    extra +
    "</body></html>"
  );
}
for (const p of pages) {
  const path = "/" + p.slug + "/";
  await mkdir(resolve(out, "." + path), { recursive: true });
  await writeFile(
    resolve(out, "." + path, "index.html"),
    infoPage(
      p,
      p.slug === "mes-progres"
        ? '<script src="/progress-core.js"></script><script src="/backup.js"></script>'
        : "",
    ),
  );
  if (p.slug !== "mes-progres") urls.push(path);
}
await writeFile(
  resolve(out, "404.html"),
  infoPage({
    slug: "404",
    title: "Page introuvable",
    description: "Revenir aux cours des Petits déclics.",
    body: '<p>Cette adresse ne correspond à aucune page. <a href="/">Retrouver les cours disponibles</a>.</p>',
  }).replace('content="index, follow"', 'content="noindex, follow"'),
);
await writeFile(
  resolve(out, "robots.txt"),
  isPublic
    ? "User-agent: *\nAllow: /\nDisallow: /mes-progres/\nSitemap: " +
        canonical("/sitemap.xml") +
        "\n"
    : "User-agent: *\nDisallow: /\n",
);
await writeFile(
  resolve(out, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    (isPublic
      ? urls
          .map((p) => "<url><loc>" + esc(canonical(p)) + "</loc></url>")
          .join("")
      : "") +
    "</urlset>",
);
const policy =
  "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'";
await writeFile(
  resolve(out, "_headers"),
  "/*\n  Content-Security-Policy: " +
    policy +
    "\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: SAMEORIGIN\n  Referrer-Policy: no-referrer\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Cache-Control: " +
    (isPublic ? "public, max-age=0, must-revalidate" : "private, no-store") +
    "\n" +
    (!isPublic ? "  X-Robots-Tag: noindex, nofollow\n" : "") +
    "\n/fonts/*\n  Cache-Control: public, max-age=86400\n\n/mes-progres/*\n  X-Robots-Tag: noindex, nofollow\n",
);
await writeFile(
  resolve(out, "_redirects"),
  isPublic
    ? (cfg.redirectHosts ?? [])
        .map(
          (host) =>
            "https://" +
            host +
            "/* " +
            new URL("/:splat", cfg.publicUrl).href +
            " 301",
        )
        .join("\n") + "\n"
    : "",
);
await writeFile(
  resolve(out, "favicon.svg"),
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#315e60"/><text x="50" y="71" font-size="70" text-anchor="middle" fill="white">↗</text></svg>',
);
console.log(
  "Génération " +
    (isPublic ? "publique" : "privée non indexable") +
    " : " +
    courses.length +
    " cours HTML, 4 pages de service → " +
    out,
);

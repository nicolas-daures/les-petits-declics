const { test } = require("node:test");
const assert = require("node:assert/strict");
const vm = require("node:vm");
const fs = require("node:fs");
function harness(initial, hash = "#accueil/6e/toutes") {
  const nodes = new Map();
  const node = () => ({
    innerHTML: "",
    value: "",
    classList: { add() {}, toggle() {} },
    focus() {},
    scrollIntoView() {},
  });
  const get = (s) => {
    if (!nodes.has(s)) nodes.set(s, node());
    return nodes.get(s);
  };
  let data = JSON.stringify(initial);
  const window = { addEventListener() {}, scrollTo() {}, scrollY: 0 };
  const ctx = vm.createContext({
    window,
    document: { querySelector: get, querySelectorAll: () => [] },
    location: { hash },
    history: { replaceState() {} },
    localStorage: {
      getItem: () => data,
      setItem: (key, value) => {
        data = value;
      },
    },
  });
  vm.runInContext(fs.readFileSync("dist/courses.js", "utf8"), ctx);
  vm.runInContext(fs.readFileSync("dist/college.js", "utf8"), ctx);
  return { window, get, save: () => JSON.parse(data) };
}
test("le registre contient des cours aux routes uniques et des réponses valides", () => {
  const h = harness({});
  const courses = h.window.COLLEGE_COURSES;
  assert.ok(courses.some((c) => c.id === "fractions"));
  assert.ok(courses.some((c) => c.id === "accord-sujet-verbe"));
  assert.equal(
    new Set(courses.map((c) => `${c.grade}/${c.subject}/${c.id}`)).size,
    courses.length,
  );
  for (const c of courses) {
    assert.ok(c.body && c.objectives);
    for (const q of c.questions) {
      assert.ok(q.options[q.correct]);
      assert.ok(q.explanation.length > 30);
    }
  }
});
test("une sauvegarde de français migre les fractions sans perdre leurs réponses", () => {
  const old = [1, 0, 2, 1];
  const h = harness({ grade: "6e", subject: "mathematiques", fractions: old });
  h.get("#subject-filter").onchange({ target: { value: "francais" } });
  const saved = h.save();
  assert.deepEqual(saved.fractions, old);
  assert.deepEqual(saved.courses.fractions, old);
  assert.deepEqual(saved.courses["accord-sujet-verbe"], Array(6).fill(null));
  assert.match(h.get("#course-results").innerHTML, /Accorder le verbe/);
  assert.doesNotMatch(h.get("#course-results").innerHTML, /Fractions :/);
});

test("le filtre 5e présente le nouveau cours sans mélanger les progressions de 6e", () => {
  const old = [1, 0, 2, 1],
    fr = [0, 1, null, null, null, null];
  const h = harness(
    { fractions: old, courses: { fractions: old, "accord-sujet-verbe": fr } },
    "#accueil/5e/mathematiques",
  );
  assert.match(
    h.get("#course-results").innerHTML,
    /Proportionnalité : reconnaître et calculer/,
  );
  assert.doesNotMatch(
    h.get("#course-results").innerHTML,
    /Accorder le verbe|Fractions :/,
  );
  h.get("#subject-filter").onchange({ target: { value: "mathematiques" } });
  const saved = h.save();
  assert.deepEqual(saved.courses.fractions, old);
  assert.deepEqual(saved.courses["accord-sujet-verbe"], fr);
  assert.deepEqual(saved.courses.proportionnalite, Array(6).fill(null));
});

test("le filtre anglais de 6e conserve la séance en cours et les autres matières", () => {
  const fractions = [1, 0, 2, 1],
    english = [1, null, null, null, null, null],
    maths = [1, 0, null, null, null, null];
  const h = harness(
    {
      fractions,
      courses: {
        fractions,
        "present-simple-habitudes": english,
        proportionnalite: maths,
      },
    },
    "#accueil/6e/anglais",
  );
  assert.match(
    h.get("#course-results").innerHTML,
    /Présent simple : parler de ses habitudes/,
  );
  assert.match(h.get("#course-results").innerHTML, /En cours/);
  assert.doesNotMatch(
    h.get("#course-results").innerHTML,
    /Fractions :|Accorder le verbe|Proportionnalité :/,
  );
  h.get("#subject-filter").onchange({ target: { value: "anglais" } });
  const saved = h.save();
  assert.deepEqual(saved.courses["present-simple-habitudes"], english);
  assert.deepEqual(saved.courses.fractions, fractions);
  assert.deepEqual(saved.courses.proportionnalite, maths);
});

test("refaire le présent simple efface uniquement ses réponses et conserve les anciens cours", () => {
  const fractions = [1, 0, 2, 1],
    french = [0, 1, 2, 1, 2, 2],
    maths = [1, 0, 2, 1, 0, 2];
  const h = harness(
    {
      fractions,
      courses: {
        fractions,
        "accord-sujet-verbe": french,
        proportionnalite: maths,
        "present-simple-habitudes": [1, 2, 0, 1, 2, 0],
      },
    },
    "#college/6e/anglais/present-simple-habitudes",
  );
  assert.match(h.get("#college-page").innerHTML, /6 bonnes réponses sur 6/);
  h.get("#retry-lesson").onclick();
  const saved = h.save();
  assert.deepEqual(
    saved.courses["present-simple-habitudes"],
    Array(6).fill(null),
  );
  assert.deepEqual(saved.fractions, fractions);
  assert.deepEqual(saved.courses.fractions, fractions);
  assert.deepEqual(saved.courses["accord-sujet-verbe"], french);
  assert.deepEqual(saved.courses.proportionnalite, maths);
  assert.match(h.get("#college-page").innerHTML, /0 \/ 6 exercices terminés/);
});

test("la 4e propose Pythagore et garde les réponses des classes précédentes", () => {
  const fractions = [1, 0, 2, 1],
    english = [1, 2, 0, null, null, null];
  const h = harness(
    { fractions, courses: { fractions, "present-simple-habitudes": english } },
    "#accueil/4e/mathematiques",
  );
  assert.match(
    h.get("#course-results").innerHTML,
    /Pythagore : calculer une longueur/,
  );
  assert.doesNotMatch(
    h.get("#course-results").innerHTML,
    /Fractions :|Proportionnalité :|Présent simple :/,
  );
  h.get("#subject-filter").onchange({ target: { value: "mathematiques" } });
  assert.deepEqual(h.save().courses.fractions, fractions);
  assert.deepEqual(h.save().courses["present-simple-habitudes"], english);
  assert.deepEqual(
    h.save().courses["pythagore-longueurs"],
    Array(6).fill(null),
  );
});

test("la reprise et la remise à zéro de Pythagore préservent les autres cours", () => {
  const fractions = [1, 0, 2, 1],
    english = [1, 2, 0, 1, 2, 0],
    p = [1, 0, 2, 0, 1, 2];
  const h = harness(
    {
      fractions,
      courses: {
        fractions,
        "present-simple-habitudes": english,
        "pythagore-longueurs": p,
      },
    },
    "#college/4e/mathematiques/pythagore-longueurs",
  );
  assert.match(h.get("#college-page").innerHTML, /6 bonnes réponses sur 6/);
  h.get("#retry-lesson").onclick();
  assert.deepEqual(
    h.save().courses["pythagore-longueurs"],
    Array(6).fill(null),
  );
  assert.deepEqual(h.save().courses["present-simple-habitudes"], english);
  assert.deepEqual(h.save().courses.fractions, fractions);
});

test("la géographie de 3e apparaît seule et conserve les progrès des autres classes", () => {
  const fractions = [1, 0, 2, 1],
    pythagore = [1, 0, 2, null, null, null];
  const h = harness(
    { fractions, courses: { fractions, "pythagore-longueurs": pythagore } },
    "#accueil/3e/histoire-geographie",
  );
  assert.match(
    h.get("#course-results").innerHTML,
    /Aires urbaines : espaces et mobilités/,
  );
  assert.doesNotMatch(
    h.get("#course-results").innerHTML,
    /Pythagore :|Fractions :|Présent simple :/,
  );
  h.get("#subject-filter").onchange({
    target: { value: "histoire-geographie" },
  });
  assert.deepEqual(h.save().courses.fractions, fractions);
  assert.deepEqual(h.save().courses["pythagore-longueurs"], pythagore);
  assert.deepEqual(
    h.save().courses["aires-urbaines-mobilites"],
    Array(6).fill(null),
  );
});

test("refaire la géographie de 3e préserve les réponses de mathématiques et d’anglais", () => {
  const fractions = [1, 0, 2, 1],
    english = [1, 2, 0, 1, 2, 0];
  const h = harness(
    {
      fractions,
      courses: {
        fractions,
        "present-simple-habitudes": english,
        "aires-urbaines-mobilites": [0, 1, 2, 0, 1, 2],
      },
    },
    "#college/3e/histoire-geographie/aires-urbaines-mobilites",
  );
  assert.match(h.get("#college-page").innerHTML, /6 bonnes réponses sur 6/);
  h.get("#retry-lesson").onclick();
  assert.deepEqual(
    h.save().courses["aires-urbaines-mobilites"],
    Array(6).fill(null),
  );
  assert.deepEqual(h.save().courses["present-simple-habitudes"], english);
  assert.deepEqual(h.save().courses.fractions, fractions);
});

test("le filtre sciences de 5e propose les mesures et conserve les autres progressions", () => {
  const fractions = [1, 0, 2, 1],
    geography = [0, 1, 2, null, null, null];
  const h = harness(
    {
      fractions,
      courses: { fractions, "aires-urbaines-mobilites": geography },
    },
    "#accueil/5e/sciences",
  );
  assert.match(
    h.get("#course-results").innerHTML,
    /Masse et volume : mesurer sans confondre/,
  );
  assert.doesNotMatch(
    h.get("#course-results").innerHTML,
    /Proportionnalité :|Aires urbaines :|Fractions :/,
  );
  h.get("#subject-filter").onchange({ target: { value: "sciences" } });
  assert.deepEqual(h.save().courses.fractions, fractions);
  assert.deepEqual(h.save().courses["aires-urbaines-mobilites"], geography);
  assert.deepEqual(
    h.save().courses["masse-volume-mesures"],
    Array(6).fill(null),
  );
});

test("une séance de sciences terminée se reprend et se réinitialise sans effacer les autres matières", () => {
  const fractions = [1, 0, 2, 1],
    english = [1, 2, 0, 1, 2, 0];
  const h = harness(
    {
      fractions,
      courses: {
        fractions,
        "present-simple-habitudes": english,
        "masse-volume-mesures": [1, 0, 2, 1, 0, 2],
      },
    },
    "#college/5e/sciences/masse-volume-mesures",
  );
  assert.match(h.get("#college-page").innerHTML, /6 bonnes réponses sur 6/);
  h.get("#retry-lesson").onclick();
  assert.deepEqual(
    h.save().courses["masse-volume-mesures"],
    Array(6).fill(null),
  );
  assert.deepEqual(h.save().courses["present-simple-habitudes"], english);
  assert.deepEqual(h.save().courses.fractions, fractions);
});

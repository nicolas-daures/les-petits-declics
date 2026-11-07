const { test } = require("node:test");
const assert = require("node:assert/strict");
const M = require("../dist/math-engine.js");
function rng() {
  let x = 1234567;
  return () => {
    x = (1664525 * x + 1013904223) >>> 0;
    return x / 4294967296;
  };
}
test("une séance couvre exactement les dix facteurs de la table choisie", () => {
  const s = M.cleanState(null),
    q = M.makeSession(s, [4], "practice", rng());
  assert.equal(q.questions.length, 10);
  assert.ok(q.questions.every((x) => x.a === 4 && x.b >= 1 && x.b <= 10));
  assert.equal(new Set(q.questions.map((x) => x.b)).size, 10);
});
test("deux séances différentes sont nécessaires pour rendre un calcul solide", () => {
  const s = M.cleanState(null),
    a = M.makeSession(s, [3]);
  const fact = a.questions[0];
  M.settle(s, a);
  assert.equal(M.isSolid(M.recordOf(s, fact.a, fact.b)), false);
  a.settled = false;
  M.settle(s, a);
  assert.equal(M.isSolid(M.recordOf(s, fact.a, fact.b)), false);
  const b = M.makeSession(s, [3]);
  b.questions[0] = fact;
  M.settle(s, b);
  assert.equal(M.isSolid(M.recordOf(s, fact.a, fact.b)), true);
});
test("un indice, une erreur ou la solution ne créent pas de maîtrise", () => {
  for (const kind of ["hint", "error", "solution"]) {
    const s = M.cleanState(null),
      a = M.makeSession(s, [7]);
    const q = a.questions[0];
    if (kind === "hint") a.hinted = true;
    if (kind === "error") M.mistake(s, a);
    M.settle(s, a, kind === "solution");
    assert.equal(M.isSolid(M.recordOf(s, q.a, q.b)), false);
    assert.equal(a.answers[0].clean, false);
    assert.ok(M.recordOf(s, q.a, q.b).debt >= 1);
  }
});
test("la correction ne compte qu’une fois et l’erreur persiste après rechargement", () => {
  const s = M.cleanState(null),
    a = M.makeSession(s, [5]);
  const q = a.questions[0];
  M.mistake(s, a);
  M.settle(s, a);
  M.settle(s, a);
  assert.equal(a.answers.length, 1);
  const restored = M.cleanState(JSON.parse(JSON.stringify(s)));
  assert.equal(M.recordOf(restored, q.a, q.b).misses, 1);
  assert.equal(M.recordOf(restored, q.a, q.b).streak, 0);
});
test("les révisions font revenir plus souvent un calcul difficile sans répétition immédiate", () => {
  const s = M.cleanState(null),
    random = rng();
  for (let b = 1; b <= 10; b++)
    s.facts[M.key(6, b)] = { tries: 5, misses: 0, streak: 2, debt: 0 };
  s.facts[M.key(6, 7)] = { tries: 5, misses: 5, streak: 0, debt: 5 };
  let weak = 0,
    total = 0;
  for (let i = 0; i < 200; i++) {
    const q = M.makeSession(s, [6], "review", random).questions;
    q.forEach((x, j) => {
      total++;
      if (x.b === 7) weak++;
      if (j) assert.notEqual(x.b, q[j - 1].b);
    });
  }
  assert.ok(weak / total > 0.15, `${weak}/${total}`);
});
test("les tables non sélectionnées sont exclues des révisions", () => {
  const s = M.cleanState(null),
    q = M.makeSession(s, [2, 5], "review", rng());
  assert.ok(q.questions.every((x) => [2, 5].includes(x.a)));
  assert.throws(() => M.makeSession(s, []));
});

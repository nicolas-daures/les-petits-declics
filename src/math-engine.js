/* Pure learning rules, independent from the page. */
(function (root) {
  "use strict";
  const key = (a, b) => `${a}x${b}`;
  const allTables = Array.from({ length: 10 }, (_, i) => i + 1);
  function recordOf(state, a, b) {
    return (
      state.facts?.[key(a, b)] || {
        tries: 0,
        misses: 0,
        streak: 0,
        debt: 0,
        lastSession: null,
      }
    );
  }
  function cleanState(raw) {
    const s = { facts: {}, sessions: 0 };
    if (!raw || typeof raw !== "object") return s;
    s.sessions =
      Number.isSafeInteger(raw.sessions) && raw.sessions >= 0
        ? raw.sessions
        : 0;
    for (const a of allTables)
      for (const b of allTables) {
        const r = raw.facts?.[key(a, b)];
        if (r && typeof r === "object")
          s.facts[key(a, b)] = {
            tries: Math.max(0, Number(r.tries) || 0),
            misses: Math.max(0, Number(r.misses) || 0),
            streak: Math.max(0, Number(r.streak) || 0),
            debt: Math.max(0, Number(r.debt) || 0),
            lastSession:
              typeof r.lastSession === "string" ? r.lastSession : null,
          };
      }
    return s;
  }
  function isSolid(r) {
    return r.streak >= 2;
  }
  function tableProgress(state, a) {
    return allTables.filter((b) => isSolid(recordOf(state, a, b))).length;
  }
  function weight(state, a, b) {
    const r = recordOf(state, a, b);
    if (isSolid(r)) return 1;
    return 5 + Math.min(r.debt, 5) * 5 + (r.tries === 0 ? 2 : 0);
  }
  function selection(tables) {
    return [...new Set(tables)].filter(
      (t) => Number.isInteger(t) && t >= 1 && t <= 10,
    );
  }
  function pickWeighted(candidates, state, random) {
    const total = candidates.reduce((s, q) => s + weight(state, q.a, q.b), 0);
    let n = random() * total;
    for (const q of candidates) {
      n -= weight(state, q.a, q.b);
      if (n < 0) return { ...q };
    }
    return { ...candidates[candidates.length - 1] };
  }
  function makeSession(state, tables, kind = "practice", random = Math.random) {
    tables = selection(tables);
    if (!tables.length) throw new Error("Choisis au moins une table.");
    const pool = tables.flatMap((a) => allTables.map((b) => ({ a, b })));
    const questions = [];
    if (kind === "practice") {
      const candidates = [...pool];
      while (questions.length < Math.min(10, pool.length)) {
        const index = Math.floor(random() * candidates.length);
        questions.push(candidates.splice(index, 1)[0]);
      }
    } else {
      const seen = {};
      while (questions.length < 10) {
        let eligible = pool.filter(
          (q) =>
            (seen[key(q.a, q.b)] || 0) < 2 &&
            (questions.length === 0 ||
              key(q.a, q.b) !== key(questions.at(-1).a, questions.at(-1).b)),
        );
        if (!eligible.length) eligible = pool;
        const q = pickWeighted(eligible, state, random);
        questions.push(q);
        seen[key(q.a, q.b)] = (seen[key(q.a, q.b)] || 0) + 1;
      }
    }
    state.sessions++;
    return {
      id: `${Date.now()}-${state.sessions}-${Math.floor(random() * 1e6)}`,
      kind,
      tables,
      questions,
      index: 0,
      answers: [],
      attempts: 0,
      hinted: false,
      settled: false,
    };
  }
  function mistake(state, session) {
    const q = session.questions[session.index],
      r = { ...recordOf(state, q.a, q.b) };
    r.tries++;
    r.misses++;
    r.debt = Math.min(r.debt + 1, 20);
    r.streak = 0;
    r.lastSession = session.id;
    state.facts[key(q.a, q.b)] = r;
    session.attempts++;
  }
  function settle(state, session, assisted = false) {
    if (session.settled) return;
    const q = session.questions[session.index],
      r = { ...recordOf(state, q.a, q.b) },
      clean = !assisted && !session.hinted && session.attempts === 0;
    r.tries++;
    if (clean) {
      if (r.lastSession !== session.id) r.streak++;
      r.debt = Math.max(0, r.debt - 1);
    } else {
      r.streak = 0;
      r.debt = Math.max(r.debt, 1);
    }
    r.lastSession = session.id;
    state.facts[key(q.a, q.b)] = r;
    session.settled = true;
    session.answers.push({ ...q, clean });
  }
  function next(session) {
    session.index++;
    session.attempts = 0;
    session.hinted = false;
    session.settled = false;
    return session.index < session.questions.length;
  }
  const api = {
    key,
    allTables,
    recordOf,
    cleanState,
    isSolid,
    tableProgress,
    weight,
    makeSession,
    mistake,
    settle,
    next,
    selection,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Multiplication = api;
})(typeof window !== "undefined" ? window : globalThis);

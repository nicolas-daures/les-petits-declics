(function (root) {
  "use strict";
  const keys = [
    "petit-tour-v1",
    "petits-declics-maths-v1",
    "petits-declics-college-v1",
  ];
  const names = {
    "petit-tour-v1": "Temps et vocabulaire anglais",
    "petits-declics-maths-v1": "Multiplications",
    "petits-declics-college-v1": "Cours du collège",
  };
  const object = (x) =>
    x !== null && typeof x === "object" && !Array.isArray(x);
  const bad = () => {
    throw new Error(
      "Sauvegarde invalide ou version non prise en charge. Aucun progrès n’a été modifié.",
    );
  };
  function inspect(x, depth = 0) {
    if (depth > 10) bad();
    if (Array.isArray(x)) {
      if (x.length > 1000) bad();
      x.forEach((v) => inspect(v, depth + 1));
    } else if (object(x)) {
      if (Object.keys(x).length > 1000) bad();
      for (const [k, v] of Object.entries(x)) {
        if (["__proto__", "prototype", "constructor"].includes(k)) bad();
        inspect(v, depth + 1);
      }
    } else if (typeof x === "string") {
      if (x.length > 500) bad();
    } else if (
      x !== null &&
      typeof x !== "boolean" &&
      !(typeof x === "number" && Number.isFinite(x))
    )
      bad();
  }
  const count = (n) => Number.isSafeInteger(n) && n >= 0 && n <= 1e9;
  function validate(key, value) {
    if (!object(value)) bad();
    inspect(value);
    if (key === "petit-tour-v1") {
      if (value.english !== undefined && typeof value.english !== "boolean")
        bad();
      for (const k of ["badges", "englishBadges"])
        if (
          value[k] !== undefined &&
          (!Array.isArray(value[k]) ||
            value[k].length > 6 ||
            value[k].some(
              (v) =>
                typeof v !== "string" ||
                !/^(months|days|seasons)-(quiz|order)$/.test(v),
            ))
        )
          bad();
    } else if (key === "petits-declics-maths-v1") {
      if (!count(value.sessions) || !object(value.facts)) bad();
      for (const [k, r] of Object.entries(value.facts)) {
        if (!/^(10|[1-9])x(10|[1-9])$/.test(k) || !object(r)) bad();
        if (["tries", "misses", "streak", "debt"].some((f) => !count(r[f])))
          bad();
        if (
          r.lastSession !== null &&
          (typeof r.lastSession !== "string" || r.lastSession.length > 120)
        )
          bad();
      }
    } else if (key === "petits-declics-college-v1") {
      if (
        value.grade !== undefined &&
        !["6e", "5e", "4e", "3e"].includes(value.grade)
      )
        bad();
      if (
        value.subject !== undefined &&
        ![
          "toutes",
          "mathematiques",
          "francais",
          "anglais",
          "histoire-geographie",
          "sciences",
        ].includes(value.subject)
      )
        bad();
      const answers = (a) =>
        Array.isArray(a) &&
        a.length <= 200 &&
        a.every((v) => v === null || (Number.isInteger(v) && v >= 0 && v < 30));
      if (value.fractions !== undefined && !answers(value.fractions)) bad();
      if (value.courses !== undefined) {
        if (!object(value.courses)) bad();
        for (const [id, a] of Object.entries(value.courses))
          if (!/^[a-z0-9-]{1,100}$/.test(id) || !answers(a)) bad();
      }
    } else bad();
    return value;
  }
  function read(storage) {
    const data = {};
    for (const key of keys) {
      const raw = storage.getItem(key);
      if (raw !== null) data[key] = validate(key, JSON.parse(raw));
    }
    return data;
  }
  function exportText(storage) {
    const data = read(storage);
    return JSON.stringify(
      {
        format: "les-petits-declics-progress",
        version: 1,
        exportedAt: new Date().toISOString(),
        data,
      },
      null,
      2,
    );
  }
  function parse(text) {
    if (typeof text !== "string" || text.length > 500000) bad();
    let file;
    try {
      file = JSON.parse(text);
    } catch {
      bad();
    }
    if (
      !object(file) ||
      file.format !== "les-petits-declics-progress" ||
      file.version !== 1 ||
      !object(file.data)
    )
      bad();
    const entries = Object.entries(file.data);
    if (!entries.length || entries.some(([k]) => !keys.includes(k))) bad();
    for (const [k, v] of entries) validate(k, v);
    return file.data;
  }
  function restore(storage, data) {
    // Toutes les validations précèdent la première écriture.
    for (const [k, v] of Object.entries(data)) {
      if (!keys.includes(k)) bad();
      validate(k, v);
    }
    const previous = Object.keys(data).map((k) => [k, storage.getItem(k)]);
    try {
      for (const [k, v] of Object.entries(data))
        storage.setItem(k, JSON.stringify(v));
    } catch (error) {
      let rollbackFailed = false;
      for (const [k, v] of previous)
        try {
          v === null ? storage.removeItem(k) : storage.setItem(k, v);
        } catch {
          rollbackFailed = true;
        }
      throw new Error(
        rollbackFailed
          ? "Écriture impossible. La restauration précédente n’a pas pu être garantie ; conservez votre fichier de sauvegarde."
          : "Écriture impossible. Les progrès précédents ont été restaurés.",
      );
    }
  }
  const api = { keys, names, read, validate, exportText, parse, restore };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.DeclicProgress = api;
})(typeof window !== "undefined" ? window : globalThis);

(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const grades = ["6e", "5e", "4e", "3e"];
  const subjects = [
    "toutes",
    "mathematiques",
    "francais",
    "anglais",
    "histoire-geographie",
    "sciences",
  ];
  const key = "petits-declics-college-v1";
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(key)) || {};
  } catch {}
  let grade = grades.includes(saved.grade) ? saved.grade : "6e";
  let subject = subjects.includes(saved.subject) ? saved.subject : "toutes";
  const courses = window.COLLEGE_COURSES;
  const progress = {};
  for (const c of courses) {
    const source =
      saved.courses?.[c.id] ?? (c.id === "fractions" ? saved.fractions : []);
    progress[c.id] = Array.from({ length: c.questions.length }, (_, i) =>
      Number.isInteger(source?.[i]) &&
      source[i] >= 0 &&
      source[i] < c.questions[i].options.length
        ? source[i]
        : null,
    );
  }
  function persist() {
    try {
      localStorage.setItem(
        key,
        JSON.stringify({
          ...saved,
          grade,
          subject,
          fractions: progress.fractions,
          courses: { ...saved.courses, ...progress },
        }),
      );
    } catch {}
  }
  function completed(c) {
    return c.questions.every((_, i) => Number.isInteger(progress[c.id][i]));
  }
  function catalogue() {
    $("#grade-filters").innerHTML = grades
      .map(
        (g) =>
          `<button class="grade-filter" aria-pressed="${g === grade}" data-grade="${g}">${g.replace("e", "")}<sup>e</sup></button>`,
      )
      .join("");
    $("#subject-filter").value = subject;
    document.querySelectorAll("[data-grade]").forEach(
      (b) =>
        (b.onclick = () => {
          grade = b.dataset.grade;
          updateFilters();
        }),
    );
    const found = courses.filter(
      (c) =>
        c.grade === grade && (subject === "toutes" || c.subject === subject),
    );
    $("#course-results").innerHTML = found.length
      ? found
          .map(
            (c) =>
              `<a class="course-card" href="/cours/${c.grade}/${c.subject}/${c.id}/"><div class="course-icon" aria-hidden="true">${c.icon}</div><div><span class="category-label">${c.grade} · ${c.subjectName.toUpperCase()} · ${c.domain.toUpperCase()}</span><h3>${c.title}</h3><p>${c.description}</p><span class="course-status">Cours + ${c.questions.length} exercices expliqués · ${completed(c) ? "Séance terminée" : progress[c.id].some(Number.isInteger) ? "En cours" : "À découvrir"}</span></div><span aria-hidden="true">↗</span></a>`,
          )
          .join("")
      : `<div class="catalogue-empty"><h3>Cette sélection s’enrichira bientôt.</h3><p>Il n’y a pas encore de cours dédié à cette classe et cette matière. Les révisions des bases restent accessibles ci-dessous.</p><a href="/#accueil/6e/toutes">Voir les cours disponibles en 6e →</a></div>`;
  }

  function updateFilters() {
    persist();
    history.replaceState(null, "", "#accueil/" + grade + "/" + subject);
    catalogue();
    document.querySelector(`[data-grade="${grade}"]`).focus();
  }
  function lesson(c, focus) {
    const questions = c.questions,
      answers = progress[c.id];
    const count = questions.filter((_, i) =>
      Number.isInteger(answers[i]),
    ).length;
    $("#college-page").innerHTML =
      `<a class="back-link" href="/#accueil/${c.grade}/${c.subject}">← ${c.subjectName} · ${c.grade}</a><div class="lesson-heading"><span class="category-label">${c.grade} · ${c.subjectName.toUpperCase()} · ${c.domain.toUpperCase()}</span><h1 tabindex="-1">${c.heading}</h1><p>Objectifs : ${c.objectives}</p><span class="lesson-progress">${count} / ${questions.length} exercices terminés · progrès enregistrés sur ce navigateur</span></div><div class="lesson-layout"><article class="lesson-course">${c.body}</article><section class="lesson-practice" aria-labelledby="practice-title"><span class="category-label">À TOI DE JOUER</span><h2 id="practice-title">Vérifie ta compréhension</h2><p>Choisis une réponse, puis lis l’explication. Tu peux revenir au cours à tout moment.</p>${questions
        .map((q, i) => {
          const answered = Number.isInteger(answers[i]);
          return `<article class="lesson-question"><h3>${i + 1}. ${q.text}</h3><div class="lesson-choices">${q.options.map((option, j) => `<button data-question="${i}" data-choice="${j}" class="${answered && j === q.correct ? "right" : answered && j === answers[i] ? "incorrect" : ""}" ${answered ? "disabled" : ""}>${option}${answered && j === q.correct ? " ✓" : ""}</button>`).join("")}</div>${answered ? `<div class="lesson-correction" role="status" tabindex="-1"><b>${answers[i] === q.correct ? "Bien vu." : "Voici comment raisonner."}</b> ${q.explanation}</div>` : ""}</article>`;
        })
        .join(
          "",
        )}<div class="lesson-summary" role="status">${completed(c) ? `<h3>Séance terminée</h3><p>${questions.filter((q, i) => answers[i] === q.correct).length} bonnes réponses sur ${questions.length} au premier essai. Relis les corrections pour comprendre chaque étape.</p><button class="secondary" id="retry-lesson">Refaire les exercices</button>` : `${count} exercice${count > 1 ? "s" : ""} terminé${count > 1 ? "s" : ""} sur ${questions.length}.`}</div></section></div>`;
    document.querySelectorAll("[data-question]").forEach(
      (b) =>
        (b.onclick = () => {
          const i = Number(b.dataset.question);
          if (Number.isInteger(answers[i])) return;
          answers[i] = Number(b.dataset.choice);
          persist();
          const y = window.scrollY;
          lesson(c, false);
          document
            .querySelectorAll(".lesson-question")
            [i].querySelector(".lesson-correction")
            ?.focus({ preventScroll: true });
          window.scrollTo(0, y);
        }),
    );
    if ($("#retry-lesson"))
      $("#retry-lesson").onclick = () => {
        progress[c.id] = Array(questions.length).fill(null);
        persist();
        lesson(c, false);
        $("#practice-title").scrollIntoView({ block: "start" });
      };
    if (focus) {
      $("#college-page h1").focus();
      window.scrollTo(0, 0);
    }
  }
  function route(focus = false) {
    const p = window.DeclicRoutes
      ? window.DeclicRoutes.parts()
      : location.hash.slice(1).split("/");
    const isLesson = p[0] === "college";
    $("#college-page").classList.toggle("hidden", !isLesson);
    if (isLesson) {
      $("#home-page").classList.add("hidden");
      const course = courses.find(
        (c) => p.slice(1).join("/") === `${c.grade}/${c.subject}/${c.id}`,
      );
      if (course) {
        lesson(course, focus);
        document.title =
          course.title +
          " · " +
          course.subjectName +
          " " +
          course.grade +
          " · Les petits déclics";
      } else {
        $("#college-page").innerHTML =
          '<h1>Ce cours n’est pas disponible.</h1><a href="/#accueil">Revenir aux cours disponibles</a>';
        document.title = "Cours indisponible · Les petits déclics";
      }
    } else if (!p[0] || p[0] === "accueil") {
      if (grades.includes(p[1])) grade = p[1];
      if (subjects.includes(p[2])) subject = p[2];
      catalogue();
    }
  }
  $("#subject-filter").onchange = (e) => {
    subject = e.target.value;
    persist();
    history.replaceState(null, "", "#accueil/" + grade + "/" + subject);
    catalogue();
    $("#subject-filter").focus();
  };
  window.addEventListener("hashchange", () => route(true));
  route();
})();

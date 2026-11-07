(function () {
  "use strict";
  const Q = (s) => document.querySelector(s),
    QA = (s) => [...document.querySelectorAll(s)],
    M = window.Multiplication;
  let mathState;
  try {
    mathState = M.cleanState(
      JSON.parse(localStorage.getItem("petits-declics-maths-v1")),
    );
  } catch {
    mathState = M.cleanState(null);
  }
  let universe = "accueil",
    mathMode = "comprendre",
    selected = [2],
    session = null,
    timer = null,
    seconds = 60,
    challenge = false,
    groupCount = 3,
    perGroup = 4,
    counted = 0,
    showTotal = false,
    swapNote = false;
  function persist() {
    try {
      localStorage.setItem(
        "petits-declics-maths-v1",
        JSON.stringify(mathState),
      );
    } catch {}
    updateProgress();
  }
  function masteredCount() {
    return M.allTables.filter((a) => M.tableProgress(mathState, a) === 10)
      .length;
  }
  function updateProgress() {
    const p = TimeLearning.progress();
    Q("#home-time-progress").textContent = `⭐ ${p.time} / 6 étoiles`;
    Q("#home-english-progress").textContent = `⭐ ${p.english} / 6 étoiles`;
    const n = masteredCount(),
      solid = M.allTables.reduce(
        (s, a) => s + M.tableProgress(mathState, a),
        0,
      );
    Q("#home-math-progress").textContent = solid
      ? `🌱 ${solid} calcul${solid > 1 ? "s" : ""} solide${solid > 1 ? "s" : ""} · ${n} ⭐`
      : mathState.sessions
        ? "🌱 Tes premières pousses sont en route !"
        : "🌱 Prêt pour ton premier déclic ?";
    Q("#math-stars").textContent = `⭐ ${n} / 10 tables maîtrisées`;
    Q("#table-garden").innerHTML = M.allTables
      .map((a) => {
        const n = M.tableProgress(mathState, a);
        return `<a class="garden-table" href="#nombres/entrainement/${a}" aria-label="Table de ${a}, ${n} calculs solides sur 10. S’entraîner."><span class="garden-icon" aria-hidden="true">${n === 10 ? "⭐" : n >= 5 ? "🌿" : n ? "🌱" : "🌰"}</span><b>Table ${a}</b><small>${n} / 10 solides</small><div class="garden-bar" aria-hidden="true"><span style="width:${n * 10}%"></span></div></a>`;
      })
      .join("");
  }
  function stopTimer() {
    if (timer !== null) clearInterval(timer);
    timer = null;
  }
  function focusTitle() {
    Q("#math-content h2")?.focus();
  }
  function renderRoute(focus = false) {
    TimeLearning.stop();
    stopTimer();
    session = null;
    const pieces = window.DeclicRoutes
      ? window.DeclicRoutes.parts()
      : location.hash.slice(1).split("/");
    universe = ["temps", "anglais", "nombres", "college"].includes(pieces[0])
      ? pieces[0]
      : "accueil";
    Q("#home-page").classList.toggle("hidden", universe !== "accueil");
    Q("#time-page").classList.toggle(
      "hidden",
      !["temps", "anglais"].includes(universe),
    );
    Q("#numbers-page").classList.toggle("hidden", universe !== "nombres");
    Q("#english-toggle").classList.toggle("hidden", universe !== "temps");
    Q("#stars").classList.toggle(
      "hidden",
      !["temps", "anglais"].includes(universe),
    );
    Q(".header-motto").classList.toggle("hidden", universe !== "accueil");
    if (universe === "temps" || universe === "anglais") {
      const en = universe === "anglais";
      Q("#time-kicker").textContent = en
        ? "L’UNIVERS DE L’ANGLAIS"
        : "L’UNIVERS DU TEMPS";
      Q("#time-title").textContent = en
        ? "Un petit mot d’anglais"
        : "Le petit tour du temps";
      Q("#time-description").textContent = en
        ? "Écoute, répète et retrouve les jours, les mois et les saisons en anglais."
        : "Des jours qui passent aux saisons qui changent, trouve tes repères.";
      Q("#time-icon").textContent = en ? "💬" : "🗓️";
      TimeLearning.open(
        universe,
        { mois: "months", saisons: "seasons", jours: "days" }[pieces[1]] ||
          "months",
      );
    }
    if (universe === "nombres") {
      mathMode = ["comprendre", "entrainement", "revision"].includes(pieces[1])
        ? pieces[1]
        : "comprendre";
      if (pieces[2]) {
        const incoming = M.selection(pieces[2].split("-").map(Number));
        if (incoming.length)
          selected = mathMode === "entrainement" ? [incoming[0]] : incoming;
      }
      if (mathMode === "entrainement") selected = [selected[0] || 2];
      renderMath();
    }
    updateProgress();
    document.title = {
      college: "Cours · Les petits déclics",
      accueil: "Les petits déclics · Réviser au collège",
      temps: "Le petit tour du temps · Les petits déclics",
      anglais: "Un petit mot d’anglais · Les petits déclics",
      nombres: "Les tables de multiplication · Les petits déclics",
    }[universe];
    if (focus && universe !== "college") {
      const h = Q(
        `#${universe === "accueil" ? "home" : universe === "nombres" ? "numbers" : "time"}-page h1`,
      );
      h?.setAttribute("tabindex", "-1");
      h?.focus();
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }
  function updateMathTabs() {
    QA("[data-math-mode]").forEach((b) => {
      const active = b.dataset.mathMode === mathMode;
      b.setAttribute("aria-selected", String(active));
      b.tabIndex = active ? 0 : -1;
    });
    Q("#math-content").setAttribute(
      "aria-labelledby",
      "math-tab-" +
        {
          comprendre: "understand",
          entrainement: "practice",
          revision: "review",
        }[mathMode],
    );
  }
  function renderMath() {
    stopTimer();
    updateMathTabs();
    if (mathMode === "comprendre") renderUnderstand();
    else renderSetup();
  }
  function groups(a, b, highlight = 0) {
    if (a === 0)
      return '<div class="zero-picture" role="img" aria-label="Zéro groupe : aucun objet">∅</div>';
    return `<div class="group-stage" role="img" aria-label="${a} groupe${a > 1 ? "s" : ""} de ${b} objets, soit ${a * b} objets">${Array.from({ length: a }, (_, i) => `<div class="object-group ${i < highlight ? "counted" : ""}" aria-hidden="true"><div class="dot-grid">${Array.from({ length: b }, () => '<i class="dot"></i>').join("")}</div><small>groupe ${i + 1}</small></div>`).join("")}</div>`;
  }
  function renderUnderstand() {
    const zero = groupCount === 0 || perGroup === 0,
      done = showTotal || counted === groupCount,
      product = groupCount * perGroup;
    Q("#math-content").innerHTML =
      `<h2 tabindex="-1" class="math-focus">Multiplier, c’est faire des groupes.</h2><p class="math-subtitle">${groupCount} groupe${groupCount > 1 ? "s" : ""} de ${perGroup} objets : combien d’objets en tout ? Fais varier les nombres et compte avec nous.</p><div class="manipulation-layout"><div class="manip-controls"><div><span class="control-label">Nombre de groupes</span><div class="stepper"><button data-step="groups-minus" aria-label="Un groupe en moins" ${groupCount === 0 ? "disabled" : ""}>−</button><strong aria-live="polite">${groupCount}</strong><button data-step="groups-plus" aria-label="Un groupe en plus" ${groupCount === 10 ? "disabled" : ""}>+</button></div></div><div><span class="control-label">Objets dans chaque groupe</span><div class="stepper"><button data-step="objects-minus" aria-label="Un objet en moins par groupe" ${perGroup === 0 ? "disabled" : ""}>−</button><strong aria-live="polite">${perGroup}</strong><button data-step="objects-plus" aria-label="Un objet en plus par groupe" ${perGroup === 10 ? "disabled" : ""}>+</button></div></div><hr class="control-divider"><div class="control-bottom"><button class="swap-button" id="swap-groups">⇄ Échanger les deux nombres</button><button class="swap-button" id="try-zero">Et avec zéro ?</button></div></div><div class="manip-display">${groups(groupCount, perGroup, counted)}<div class="equation" aria-live="polite">${groupCount} × ${perGroup} = ${done || zero ? product : "?"}</div><div class="addition">${groupCount ? Array(groupCount).fill(perGroup).join(" + ") + (done || zero ? " = " + product : " = ?") : "Aucun groupe, donc aucun objet."}</div><div class="math-message" role="status">${zero ? "Avec zéro groupe ou zéro objet dans chaque groupe, le total est toujours zéro." : swapNote ? `${perGroup} × ${groupCount} et ${groupCount} × ${perGroup} donnent tous les deux ${product}. On a changé les groupes, pas le total !` : counted ? `${counted} groupe${counted > 1 ? "s" : ""} compté${counted > 1 ? "s" : ""} : ${counted * perGroup} objets${done ? " en tout !" : " pour le moment."}` : "Même quantité dans chaque groupe : voilà le secret !"}</div><div class="actions"><button class="primary" id="count-groups" ${zero || counted === groupCount ? "disabled" : ""}>${counted ? "Compter le groupe suivant" : "Compter ensemble"}</button><button class="secondary" id="show-total">${done ? "Recompter ↻" : "Voir le résultat"}</button></div></div></div><p class="tip">💡 ${groupCount} × ${perGroup} se lit « ${groupCount} fois ${perGroup} ». <button class="text-btn" id="read-equation" aria-label="Écouter la multiplication">▷ Écouter</button></p><div class="actions"><a class="primary next-step-link" href="#nombres/entrainement/${Math.max(1, groupCount)}">M’entraîner à la table de ${Math.max(1, groupCount)} →</a></div>`;
    QA("[data-step]").forEach(
      (b) =>
        (b.onclick = () => {
          const key = b.dataset.step;
          if (key.startsWith("groups"))
            groupCount = Math.max(
              0,
              Math.min(10, groupCount + (key.endsWith("plus") ? 1 : -1)),
            );
          else
            perGroup = Math.max(
              0,
              Math.min(10, perGroup + (key.endsWith("plus") ? 1 : -1)),
            );
          counted = 0;
          showTotal = false;
          swapNote = false;
          renderUnderstand();
          Q(`[data-step="${key}"]`)?.focus();
        }),
    );
    Q("#swap-groups").onclick = () => {
      [groupCount, perGroup] = [perGroup, groupCount];
      counted = 0;
      showTotal = true;
      swapNote = true;
      renderUnderstand();
      Q("#swap-groups").focus();
    };
    Q("#try-zero").onclick = () => {
      groupCount = 0;
      counted = 0;
      showTotal = true;
      swapNote = false;
      renderUnderstand();
      Q("#try-zero").focus();
    };
    Q("#count-groups").onclick = () => {
      counted++;
      swapNote = false;
      renderUnderstand();
      Q(counted === groupCount ? "#show-total" : "#count-groups").focus();
    };
    Q("#show-total").onclick = () => {
      if (done) {
        counted = 0;
        showTotal = false;
      } else {
        counted = groupCount;
        showTotal = true;
      }
      swapNote = false;
      renderUnderstand();
      Q("#show-total").focus();
    };
    Q("#read-equation").onclick = () =>
      speak(
        `${groupCount} fois ${perGroup}${done || zero ? " égale " + product : ""}`,
        "fr-FR",
      );
  }
  function mathLink() {
    return "#nombres/" + mathMode + "/" + selected.join("-");
  }
  function rememberSelection() {
    history.replaceState(null, "", mathLink());
  }
  function renderSetup() {
    session = null;
    challenge = false;
    const review = mathMode === "revision",
      allKnown =
        selected.length > 0 &&
        selected.every((a) => M.tableProgress(mathState, a) === 10),
      trouble = selected
        .flatMap((a) =>
          M.allTables.map((b) => ({ a, b, r: M.recordOf(mathState, a, b) })),
        )
        .filter((q) => q.r.tries > 0 && !M.isSolid(q.r))
        .sort((a, b) => b.r.debt - a.r.debt);
    Q("#math-content").innerHTML =
      `<div class="setup-box"><h2 tabindex="-1" class="math-focus">${review ? "On mélange nos découvertes ?" : "Une table, un petit pas à la fois."}</h2><p class="math-subtitle">${review ? "Choisis les tables que tu veux réviser. Les calculs à retravailler reviendront plus souvent." : "Choisis une table. Tu répondras à 10 calculs, sans chronomètre."}</p><span class="table-label" id="tables-label">${review ? "Quelles tables veux-tu mélanger ?" : "Quelle table veux-tu apprivoiser ?"}</span><div class="table-chips" role="group" aria-labelledby="tables-label">${M.allTables.map((a) => `<button class="table-chip" data-table="${a}" aria-pressed="${selected.includes(a)}" aria-label="Table de ${a}">${a}${M.tableProgress(mathState, a) === 10 ? '<span class="tiny-star" aria-hidden="true">⭐</span>' : ""}</button>`).join("")}</div>${review ? '<div class="selection-tools"><button class="text-btn" data-preset="easy">Tables 2, 5 et 10</button><button class="text-btn" data-preset="all">Toutes les tables</button><button class="text-btn" data-preset="clear">Tout désélectionner</button></div>' : ""}<div class="practice-description">${review ? `🌿 <b>Une révision qui s’adapte à toi.</b> ${trouble.length ? `${trouble.length} calcul${trouble.length > 1 ? "s" : ""} à renforcer dans ta sélection. Les erreurs et les réponses avec aide reviendront en priorité.` : "Les calculs encore inconnus passent en priorité, avec quelques rappels de ceux que tu connais."}` : "💡 <b>Tu as le droit de prendre ton temps.</b> Un indice peut montrer des groupes ou une addition. Si tu bloques, la solution t’aide à comprendre."}</div><details class="math-facts"><summary>📖 ${review ? "Revoir les tables choisies" : "Découvrir la table de " + (selected[0] || 2)}</summary><div class="facts-grid">${selected.flatMap((a) => M.allTables.map((b) => `<span class="fact-row">${a} × ${b} = ${a * b}</span>`)).join("") || "<span>Choisis une table pour la découvrir.</span>"}</div></details><div class="challenge-control"><input type="checkbox" id="challenge" ${!allKnown ? "disabled" : ""}><label for="challenge">⚡ Défi chrono · 60 secondes <small>${allKnown ? "Facultatif. Tes tables choisies sont solides : tu peux essayer de gagner en fluidité." : "Se débloque quand tous les calculs des tables choisies sont solides. Pour l’instant, pas de course !"}</small></label></div><p class="empty-select" id="selection-message" role="status"></p><div class="actions"><button class="primary" id="start-session">${review ? "C’est parti pour les révisions →" : "C’est parti pour 10 calculs →"}</button></div></div>`;
    QA("[data-table]").forEach(
      (b) =>
        (b.onclick = () => {
          const a = Number(b.dataset.table);
          if (review)
            selected = selected.includes(a)
              ? selected.filter((t) => t !== a)
              : [...selected, a].sort((x, y) => x - y);
          else selected = [a];
          rememberSelection();
          renderSetup();
          Q(`[data-table="${a}"]`).focus();
        }),
    );
    QA("[data-preset]").forEach(
      (b) =>
        (b.onclick = () => {
          selected =
            b.dataset.preset === "easy"
              ? [2, 5, 10]
              : b.dataset.preset === "all"
                ? [...M.allTables]
                : [];
          rememberSelection();
          renderSetup();
          Q(`[data-preset="${b.dataset.preset}"]`)?.focus();
        }),
    );
    Q("#challenge").onchange = (e) => {
      challenge = e.target.checked;
    };
    Q("#start-session").onclick = () => {
      if (!selected.length) {
        Q("#selection-message").textContent =
          "Choisis au moins une table pour commencer.";
        return;
      }
      session = M.makeSession(
        mathState,
        selected,
        review ? "review" : "practice",
      );
      persist();
      seconds = 60;
      renderQuestion();
      if (challenge)
        timer = setInterval(() => {
          if (document.hidden) return;
          seconds--;
          const clock = Q("#session-timer");
          if (clock) clock.textContent = "⚡ " + seconds + " s";
          if (seconds <= 0) finishSession(true);
        }, 1000);
    };
  }
  function progressDots() {
    return `<div class="session-progress" role="img" aria-label="${session.answers.length} calculs terminés sur 10">${session.questions.map((_, i) => `<span class="session-dot ${session.answers[i] ? (session.answers[i].clean ? "solid" : "assisted") : i === session.index ? "current" : ""}"></span>`).join("")}</div>`;
  }
  function renderQuestion() {
    const q = session.questions[session.index];
    Q("#math-content").innerHTML =
      `<div class="math-quiz"><div class="session-top"><button id="leave-session">← Choisir mes tables</button><span>${session.kind === "review" ? "Révisions" : "Table de " + session.tables[0]} · Calcul ${session.index + 1} / 10</span><span class="session-state ${challenge ? "timer" : ""}" id="session-timer">${challenge ? "⚡ " + seconds + " s" : "🌱 Tout ton temps"}</span></div>${progressDots()}<h2 class="math-focus" tabindex="-1">Combien ça fait ?</h2><div class="math-equation" aria-label="${q.a} fois ${q.b}">${q.a} × ${q.b} <span style="color:#a5af96">=</span> ?</div><form id="answer-form" class="answer-form" autocomplete="off"><label for="math-answer" class="hidden">Ta réponse</label><input class="answer-input" id="math-answer" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3" aria-label="Ta réponse" aria-describedby="math-feedback" required><button class="primary" type="submit" id="check-answer">Vérifier</button></form><div class="math-feedback" id="math-feedback" role="status"></div><div class="hint-actions"><button class="secondary" id="math-hint">💡 Un petit indice</button><button class="secondary" id="math-audio" aria-label="Écouter le calcul">▷ Écouter</button><button class="secondary" id="math-solution">Voir la solution</button></div><div id="hint-content"></div><div class="actions"><button class="primary hidden" id="math-next">${session.index === 9 ? "Voir mon petit bilan" : "Calcul suivant →"}</button></div></div>`;
    Q("#leave-session").onclick = () => {
      stopTimer();
      TimeLearning.stop();
      renderSetup();
      focusTitle();
    };
    Q("#answer-form").onsubmit = (e) => {
      e.preventDefault();
      checkAnswer();
    };
    Q("#math-hint").onclick = () => {
      session.hinted = true;
      const sum = Array(q.a).fill(q.b).join(" + ");
      Q("#hint-content").innerHTML =
        `<div class="hint-box"><b>${q.a} × ${q.b}, c’est ${q.a} groupes de ${q.b}.</b><br>Tu peux additionner : ${sum}. Compte les objets dans les groupes.${groups(q.a, q.b)}</div>`;
      Q("#math-answer").focus();
    };
    Q("#math-audio").onclick = () => speak(`${q.a} fois ${q.b}`, "fr-FR");
    Q("#math-solution").onclick = () => {
      if (session.settled) return;
      session.hinted = true;
      M.settle(mathState, session, true);
      persist();
      settledUI(
        `Regarde : ${q.a} × ${q.b} = ${q.a * q.b}. On le retrouvera pour t’aider à retenir.`,
        true,
      );
      Q("#hint-content").innerHTML =
        `<div class="hint-box">${Array(q.a).fill(q.b).join(" + ")} = <b>${q.a * q.b}</b>${groups(q.a, q.b, q.a)}</div>`;
      Q("#math-next").focus();
    };
    Q("#math-next").onclick = () => {
      TimeLearning.stop();
      if (M.next(session)) renderQuestion();
      else finishSession();
    };
    Q("#math-answer").focus();
  }
  function checkAnswer() {
    if (!session || session.settled) return;
    const input = Q("#math-answer"),
      value = input.value.trim(),
      q = session.questions[session.index];
    if (!/^\d{1,3}$/.test(value)) {
      Q("#math-feedback").textContent = "Écris un nombre pour répondre.";
      input.focus();
      return;
    }
    if (Number(value) !== q.a * q.b) {
      M.mistake(mathState, session);
      persist();
      Q("#math-feedback").classList.add("error");
      Q("#math-feedback").textContent =
        "Pas encore. Tu peux réessayer ou demander un petit indice.";
      input.setAttribute("aria-invalid", "true");
      input.select();
      return;
    }
    const clean = !session.hinted && session.attempts === 0;
    M.settle(mathState, session);
    persist();
    settledUI(
      clean
        ? "Bravo, tu l’as trouvé tout seul ! 🌱"
        : "Bien joué, tu as trouvé ! On reviendra sur ce calcul pour le consolider.",
      !clean,
    );
    Q("#math-next").focus();
  }
  function settledUI(message, assisted) {
    Q("#math-feedback").classList.remove("error");
    Q("#math-feedback").textContent = message;
    const q = session.questions[session.index];
    Q("#math-answer").value = q.a * q.b;
    Q("#math-answer").disabled = true;
    Q("#math-answer").removeAttribute("aria-invalid");
    Q("#check-answer").disabled = true;
    Q("#math-hint").disabled = true;
    Q("#math-solution").disabled = true;
    Q("#math-next").classList.remove("hidden");
    const dots = QA(".session-dot");
    dots[session.index]?.classList.remove("current");
    dots[session.index]?.classList.add(assisted ? "assisted" : "solid");
  }
  function finishSession(timedOut = false) {
    if (!session) return;
    stopTimer();
    TimeLearning.stop();
    const clean = session.answers.filter((x) => x.clean).length,
      supported = session.answers.length - clean,
      weak = [
        ...new Map(
          session.answers
            .filter((x) => !x.clean)
            .map((x) => [M.key(x.a, x.b), x]),
        ).values(),
      ];
    const title = timedOut
      ? "Le défi est terminé !"
      : clean === 10
        ? "Dix petits déclics, bravo !"
        : "Tu as fait grandir tes idées !";
    Q("#math-content").innerHTML =
      `<div class="quiz result"><div class="result-icon" aria-hidden="true">${clean === 10 ? "🌻" : "🌱"}</div><h2 tabindex="-1" class="math-focus">${title}</h2><p>${timedOut ? `${session.answers.length} calcul${session.answers.length > 1 ? "s" : ""} terminé${session.answers.length > 1 ? "s" : ""} en 60 secondes. Les calculs non terminés ne comptent pas comme des erreurs.` : "Une séance de plus pour faire pousser ta confiance."}</p><div class="result-stats"><div class="result-stat"><b>${clean}</b>trouvé${clean > 1 ? "s" : ""} sans aide</div><div class="result-stat"><b>${supported}</b>compris avec de l’aide ou un nouvel essai</div></div>${weak.length ? `<p>Ces calculs reviendront dans tes révisions :</p><div class="review-list">${weak.map((q) => `<span>${q.a} × ${q.b} = ${q.a * q.b}</span>`).join("")}</div>` : "<p>Les réponses sans aide renforcent tes calculs.<br>Reviens lors d’une autre séance pour les rendre solides.</p>"}<div class="actions"><button class="primary" id="math-again">Une nouvelle séance ↻</button><a class="secondary next-step-link" href="#nombres/comprendre">Revoir les groupes</a></div><p class="garden-help">Ton jardin est juste en dessous. Il garde ta progression, même quand tu fermes le site.</p></div>`;
    Q("#math-again").onclick = () => {
      renderSetup();
      focusTitle();
    };
    persist();
    focusTitle();
  }
  QA("[data-math-mode]").forEach(
    (b) =>
      (b.onclick = () => {
        const m = b.dataset.mathMode;
        if (m === mathMode && universe === "nombres") {
          stopTimer();
          TimeLearning.stop();
          session = null;
          renderMath();
          return;
        }
        location.hash =
          "nombres/" +
          m +
          (m === "entrainement"
            ? "/" + (selected[0] || 2)
            : m === "revision" && selected.length
              ? "/" + selected.join("-")
              : "");
      }),
  );
  Q(".math-navigation").addEventListener("keydown", (e) => {
    const tabs = QA("[data-math-mode]"),
      i = tabs.indexOf(document.activeElement);
    let j;
    if (e.key === "ArrowRight") j = (i + 1) % 3;
    else if (e.key === "ArrowLeft") j = (i + 2) % 3;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = 2;
    else return;
    e.preventDefault();
    tabs[j].click();
    tabs[j].focus();
  });
  window.addEventListener("hashchange", () => renderRoute(true));
  window.addEventListener("pagehide", stopTimer);
  renderRoute();
})();

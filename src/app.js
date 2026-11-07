"use strict";
const DATA = {
  months: {
    name: "Les mois de l’année",
    single: "un mois",
    intro: "Une année, 12 mois. Touche un haut-parleur pour écouter.",
    tip: "Après décembre, on revient à janvier : une nouvelle année commence ! En anglais, les noms des mois commencent toujours par une majuscule.",
    icon: "🗓️",
    items: [
      ["janvier", "January", "⛄"],
      ["février", "February", "💛"],
      ["mars", "March", "🌱"],
      ["avril", "April", "🌦️"],
      ["mai", "May", "🌼"],
      ["juin", "June", "🍒"],
      ["juillet", "July", "☀️"],
      ["août", "August", "🏖️"],
      ["septembre", "September", "🎒"],
      ["octobre", "October", "🎃"],
      ["novembre", "November", "🍂"],
      ["décembre", "December", "🎁"],
    ],
  },
  seasons: {
    name: "Les quatre saisons",
    single: "une saison",
    intro: "Un tour de la Terre autour du Soleil, et 4 saisons défilent !",
    tip: "Nos exemples parlent des saisons en France métropolitaine. Quand c’est l’été en France, c’est l’hiver en Australie !",
    icon: "🌳",
    items: [
      [
        "printemps",
        "spring",
        "🌸",
        "Les bourgeons s’ouvrent et les jours s’allongent.",
      ],
      [
        "été",
        "summer",
        "☀️",
        "Les journées sont longues. Place à la chaleur et aux chapeaux !",
      ],
      [
        "automne",
        "autumn",
        "🍂",
        "Beaucoup de feuilles changent de couleur puis tombent.",
      ],
      [
        "hiver",
        "winter",
        "⛄",
        "Les journées sont courtes. Parfois, il gèle ou il neige.",
      ],
    ],
  },
  days: {
    name: "Les jours de la semaine",
    single: "un jour",
    intro: "Une semaine, 7 jours. Apprends-les de lundi à dimanche.",
    tip: "Après dimanche, on retrouve lundi ! Samedi et dimanche forment le week-end. En anglais, les noms des jours commencent toujours par une majuscule.",
    icon: "🌤️",
    items: [
      ["lundi", "Monday", "🌱"],
      ["mardi", "Tuesday", "🪁"],
      ["mercredi", "Wednesday", "🎨"],
      ["jeudi", "Thursday", "🚲"],
      ["vendredi", "Friday", "🎵"],
      ["samedi", "Saturday", "🌈"],
      ["dimanche", "Sunday", "☀️"],
    ],
  },
};
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
let saved = {};
try {
  saved = JSON.parse(localStorage.getItem("petit-tour-v1")) || {};
} catch {}
let english = saved.english !== false,
  topic = "months",
  mode = "learn",
  badges = Array.isArray(saved.badges)
    ? saved.badges.filter((x) => /^(months|days|seasons)-(quiz|order)$/.test(x))
    : [];
let timeUniverse = "time";
let englishBadges = Array.isArray(saved.englishBadges)
  ? [
      ...new Set(
        saved.englishBadges.filter((x) =>
          /^(months|days|seasons)-(quiz|order)$/.test(x),
        ),
      ),
    ]
  : [];
badges = [...new Set(badges)];
let quiz = null,
  order = [],
  orderChoices = [],
  orderDone = false,
  reading = false,
  speechGeneration = 0,
  toastTimer;
const speaker =
  '<svg class="speaker" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 7h4l5-4v14l-5-4H3zM15 6q5 4 0 8"/></svg>';
const palette = [
  "#f3f4e9",
  "#fcf0e5",
  "#eef3e8",
  "#edf3f3",
  "#faf4df",
  "#faeee7",
];
function save() {
  try {
    localStorage.setItem(
      "petit-tour-v1",
      JSON.stringify({
        english: timeUniverse === "time" ? english : saved.english !== false,
        badges,
        englishBadges,
      }),
    );
  } catch {}
}
function updateHeader() {
  const count = (timeUniverse === "english" ? englishBadges : badges).length;
  $("#stars").textContent = `⭐ ${count} / 6 étoiles`;
  $("#time-stars").textContent = `⭐ ${count} / 6 étoiles`;
  $("#english-toggle").setAttribute("aria-pressed", String(english));
}
function toast(message) {
  clearTimeout(toastTimer);
  $("#toast").textContent = message;
  $("#toast").classList.remove("hidden");
  toastTimer = setTimeout(() => $("#toast").classList.add("hidden"), 5000);
}
function stopSpeech() {
  speechGeneration++;
  reading = false;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  const b = $("#listen-all");
  if (b) b.textContent = "▷ Tout écouter";
}
function utter(text, lang, done) {
  if (!("speechSynthesis" in window)) {
    toast(
      "La lecture audio n’est pas disponible ici. Essaie un navigateur avec la synthèse vocale.",
    );
    return false;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.78;
  const voices = speechSynthesis.getVoices();
  const voice =
    voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase()) ||
    voices.find((v) => v.lang.startsWith(lang.slice(0, 2)));
  if (voice) u.voice = voice;
  u.onend = done || null;
  u.onerror = (e) => {
    if (e.error !== "interrupted" && e.error !== "canceled") {
      stopSpeech();
      toast(
        "Le son n’est pas disponible. Vérifie les voix et le volume de ton appareil.",
      );
    }
  };
  speechSynthesis.speak(u);
  return true;
}
function speak(text, lang) {
  stopSpeech();
  utter(text, lang);
}
function readAll() {
  if (reading) {
    stopSpeech();
    return;
  }
  stopSpeech();
  reading = true;
  const generation = speechGeneration;
  const list = DATA[topic].items.flatMap((x) =>
    english
      ? [
          [x[0], "fr-FR"],
          [x[1], "en-GB"],
        ]
      : [[x[0], "fr-FR"]],
  );
  let i = 0;
  const next = () => {
    if (generation !== speechGeneration) return;
    if (i >= list.length) {
      stopSpeech();
      return;
    }
    const [text, lang] = list[i++];
    if (!utter(text, lang, next)) stopSpeech();
  };
  $("#listen-all").textContent = "■ Arrêter";
  next();
}
function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
function award(kind) {
  const key = topic + "-" + kind;
  const activeBadges = timeUniverse === "english" ? englishBadges : badges;
  if (activeBadges.includes(key)) return false;
  activeBadges.push(key);
  save();
  updateHeader();
  return true;
}
function selectTopic(t) {
  stopSpeech();
  orderChoices = [];
  topic = t;
  quiz = null;
  orderDone = false;
  order = [];
  render();
}
function selectMode(m) {
  stopSpeech();
  mode = m;
  if (m === "quiz") startQuiz();
  if (m === "order") startOrder();
  render();
}
function render() {
  updateHeader();
  $$("[data-topic]").forEach((b) =>
    b.setAttribute("aria-selected", String(b.dataset.topic === topic)),
  );
  $$("[data-mode]").forEach((b) =>
    b.setAttribute("aria-selected", String(b.dataset.mode === mode)),
  );
  $("#learning").setAttribute("aria-labelledby", "topic-" + topic);
  $("#activity").setAttribute("aria-labelledby", "mode-" + mode);
  $("#activity-note").textContent = {
    learn: "Je regarde, j’écoute, je retiens.",
    quiz: "6 questions, plein de découvertes.",
    order: "Chaque chose à sa place.",
  }[mode];
  if (mode === "learn") renderLearn();
  if (mode === "quiz") {
    if (!quiz) startQuiz();
    renderQuiz();
  }
  if (mode === "order") {
    if (
      !orderChoices.length ||
      orderChoices.length !== DATA[topic].items.length ||
      orderChoices.some((x) => x >= DATA[topic].items.length)
    )
      startOrder();
    renderOrder();
  }
}
function renderLearn() {
  const d = DATA[topic];
  $("#activity").innerHTML =
    `<div class="content-heading"><div><h2>${d.name}</h2><p>${d.intro}</p></div><button class="listen-all" id="listen-all">▷ Tout écouter</button></div><div class="cards ${topic}">${d.items.map((x, i) => `<article class="word-card" style="--card:${palette[i % palette.length]}"><div class="card-top"><span class="number">${String(i + 1).padStart(2, "0")} ${topic === "months" ? "/ 12" : ""}</span><span class="emoji" aria-hidden="true">${x[2]}</span></div><h3>${x[0]}</h3>${english ? `<div class="english" lang="en">${x[1]}</div>` : ""}${x[3] ? `<p class="season-note">${x[3]}</p>` : ""}<div class="sounds"><button class="sound" data-audio="${i}" data-lang="fr" aria-label="Écouter ${x[0]} en français">${speaker} FR</button>${english ? `<button class="sound" data-audio="${i}" data-lang="en" aria-label="Écouter ${x[1]} en anglais">${speaker} EN</button>` : ""}</div></article>`).join("")}</div><p class="tip"><span aria-hidden="true">💡</span><span>${d.tip}${topic === "seasons" && english ? " En anglais américain, on dit aussi « fall » pour l’automne." : ""}</span></p>`;
  $("#listen-all").onclick = readAll;
  $$("[data-audio]").forEach(
    (b) =>
      (b.onclick = () => {
        const isEn = b.dataset.lang === "en";
        speak(
          d.items[Number(b.dataset.audio)][isEn ? 1 : 0],
          isEn ? "en-GB" : "fr-FR",
        );
      }),
  );
}
function startQuiz() {
  const d = DATA[topic];
  const indices = shuffle(d.items.map((_, i) => i));
  const questions = Array.from({ length: 6 }, (_, n) => {
    const i = indices[n % indices.length],
      x = d.items[i],
      kind =
        timeUniverse === "english"
          ? ["translate", "listenEnglish"][n % 2]
          : english
            ? ["translate", "next", "listen"][n % 3]
            : ["next", "listen"][n % 2];
    let correct = i,
      prompt = "",
      audio = null,
      lang = "fr",
      help = "";
    if (kind === "translate") {
      prompt = `Comment dit-on « ${x[0]} » en anglais ?`;
      lang = "en";
      help = "Retrouve son nom en anglais.";
    } else if (kind === "next") {
      correct = (i + 1) % d.items.length;
      prompt = `Qu’est-ce qui vient après ${x[0]} ?`;
      help =
        correct === 0
          ? "Pense au cycle : après la fin, on recommence !"
          : "Retrouve la suite.";
    } else {
      prompt =
        kind === "listenEnglish"
          ? "Quel mot anglais entends-tu ?"
          : "Quel mot entends-tu ?";
      audio = kind === "listenEnglish" ? x[1] : x[0];
      if (kind === "listenEnglish") lang = "en";
      help = "Touche le bouton pour écouter, puis choisis le bon mot.";
    }
    const choices = shuffle([
      correct,
      ...shuffle(d.items.map((_, j) => j).filter((j) => j !== correct)).slice(
        0,
        3,
      ),
    ]);
    return { correct, prompt, audio, lang, help, choices };
  });
  quiz = { questions, index: 0, score: 0, answered: false, finished: false };
}
function renderQuiz() {
  if (quiz.finished) {
    renderQuizResult();
    return;
  }
  const q = quiz.questions[quiz.index],
    d = DATA[topic];
  $("#activity").innerHTML =
    `<div class="quiz"><div class="quiz-meta"><span>${d.name}</span><span>Question ${quiz.index + 1} / 6</span></div><div class="progress"><span style="width:${(quiz.index / 6) * 100}%"></span></div><div class="question-icon" aria-hidden="true">${q.audio ? "🎧" : d.icon}</div><h2 class="question" tabindex="-1">${q.prompt}</h2><p class="question-help">${q.help}</p>${q.audio ? '<div class="actions"><button class="secondary" id="question-sound">▷ Écouter le mot</button><button class="secondary" id="reveal-word">Voir le mot</button></div><p class="audio-status" id="audio-help">Tu peux l’écouter autant de fois que tu veux.</p>' : ""}<div class="answers">${q.choices.map((i) => `<button class="answer" data-answer="${i}" ${q.lang === "en" ? 'lang="en"' : ""}>${d.items[i][q.lang === "en" ? 1 : 0]}</button>`).join("")}</div><div class="feedback" id="feedback" role="status"></div><button class="primary hidden" id="next-question">${quiz.index === 5 ? "Voir mon résultat" : "Question suivante →"}</button></div>`;
  if (q.audio) {
    $("#question-sound").onclick = () =>
      speak(q.audio, q.lang === "en" ? "en-GB" : "fr-FR");
    $("#reveal-word").onclick = () => {
      $("#audio-help").textContent = "Le mot à retrouver : " + q.audio;
    };
  }
  $$("[data-answer]").forEach(
    (b) => (b.onclick = () => answer(Number(b.dataset.answer))),
  );
  $("#next-question").onclick = () => {
    stopSpeech();
    quiz.index++;
    quiz.answered = false;
    if (quiz.index === 6) quiz.finished = true;
    renderQuiz();
    $(".question, .result h2")?.focus();
  };
}
function answer(i) {
  if (quiz.answered) return;
  quiz.answered = true;
  const q = quiz.questions[quiz.index],
    ok = i === q.correct;
  if (ok) quiz.score++;
  $$("[data-answer]").forEach((b) => {
    b.disabled = true;
    const n = Number(b.dataset.answer);
    if (n === q.correct) b.classList.add("correct");
    if (n === i && !ok) b.classList.add("wrong");
  });
  $("#feedback").textContent = ok
    ? "Bien joué, c’est ça ! 🌟"
    : `Tu apprends ! La bonne réponse est « ${DATA[topic].items[q.correct][q.lang === "en" ? 1 : 0]} ».`;
  $("#next-question").classList.remove("hidden");
}
function renderQuizResult() {
  const perfect = quiz.score === 6;
  const fresh = perfect && award("quiz");
  $("#activity").innerHTML =
    `<div class="quiz result"><div class="result-icon" aria-hidden="true">${perfect ? "🏆" : "🌱"}</div><h2 tabindex="-1">${perfect ? "Un sans-faute, bravo !" : "Un petit pas de plus !"}</h2><div class="achievement">${quiz.score} bonnes réponses sur 6</div><p>${perfect ? (fresh ? "Tu as gagné une étoile pour ce quiz !" : "Tu connais bien ce thème. Ton étoile est déjà dans ta collection !") : "Chaque essai t’aide à retenir. Fais un tour dans les cartes, puis reviens jouer !"}<br>Un quiz parfait te permet de gagner une étoile.</p><div class="actions"><button class="primary" id="again">Rejouer ↻</button><button class="secondary" id="back-learn">Revoir les cartes</button></div></div>`;
  $("#again").onclick = () => {
    startQuiz();
    renderQuiz();
  };
  $("#back-learn").onclick = () => selectMode("learn");
}
function startOrder() {
  order = [];
  orderDone = false;
  const ids = DATA[topic].items.map((_, i) => i);
  orderChoices = shuffle(ids);
  if (orderChoices.every((x, i) => x === i))
    orderChoices.push(orderChoices.shift());
}
function renderOrder() {
  const d = DATA[topic];
  if (orderDone) {
    const fresh = award("order");
    $("#activity").innerHTML =
      `<div class="quiz result"><div class="result-icon" aria-hidden="true">🎉</div><h2 tabindex="-1">Tout est à sa place !</h2><p>${fresh ? "Une étoile de plus dans ta collection !" : "Bravo, tu as encore réussi ! Ton étoile est déjà dans ta collection."}<br>${d.tip}</p><div class="order-list">${order.map((i) => `<span class="ordered">${d.items[i][0]}</span>`).join("")}</div><div class="actions"><button class="primary" id="again">Rejouer ↻</button><button class="secondary" id="back-learn">Revoir les cartes</button></div></div>`;
    $("#again").onclick = () => {
      startOrder();
      renderOrder();
    };
    $("#back-learn").onclick = () => selectMode("learn");
    return;
  }
  $("#activity").innerHTML =
    `<div class="quiz"><div class="quiz-meta"><span>${d.name}</span><span>${order.length} / ${d.items.length} placés</span></div><h2 class="question">À toi de remettre tout dans l’ordre !</h2><p class="question-help">Touche les mots un par un. Commence par <b>${d.items[0][0]}</b>.<br>${english ? "Les mots anglais apparaîtront dans ta suite." : "Prends ton temps, tu peux recommencer."}</p><div class="order-list" aria-label="Ta suite dans l’ordre">${order.length ? order.map((i) => `<span class="ordered">${d.items[i][0]}${english ? ` <small lang="en">· ${d.items[i][1]}</small>` : ""}</span>`).join("") : '<span class="order-placeholder">Ta suite commence ici…</span>'}</div><div class="order-choices">${orderChoices.map((i) => `<button class="order-choice" data-order="${i}" ${order.includes(i) ? "disabled" : ""}>${d.items[i][0]}</button>`).join("")}</div><div class="feedback" id="feedback" role="status">${order.length ? "Super, continue !" : ""}</div><div class="actions"><button class="secondary" id="undo-order" ${!order.length ? "disabled" : ""}>← Annuler le dernier</button><button class="secondary" id="reset-order">Recommencer ↻</button></div><p class="tip">💡 ${d.tip}</p></div>`;
  $$("[data-order]").forEach(
    (b) =>
      (b.onclick = () => {
        const i = Number(b.dataset.order);
        if (i !== order.length) {
          $("#feedback").textContent =
            `Pas encore ! Cherche ${order.length ? "le mot qui vient après « " + d.items[order.length - 1][0] + " »" : "« " + d.items[0][0] + " »"}.`;
          return;
        }
        order.push(i);
        if (order.length === d.items.length) orderDone = true;
        renderOrder();
        if (orderDone) $(".result h2")?.focus();
        else
          $("#feedback")?.setAttribute(
            "aria-label",
            `${order.length} mots bien placés`,
          );
      }),
  );
  $("#undo-order").onclick = () => {
    order.pop();
    renderOrder();
  };
  $("#reset-order").onclick = () => {
    startOrder();
    renderOrder();
  };
}
$$("[data-topic]").forEach(
  (b) =>
    (b.onclick = () => {
      orderChoices = [];
      selectTopic(b.dataset.topic);
      history.replaceState(
        null,
        "",
        "#" +
          (timeUniverse === "english" ? "anglais" : "temps") +
          "/" +
          { months: "mois", seasons: "saisons", days: "jours" }[topic],
      );
    }),
);
$$("[data-mode]").forEach(
  (b) => (b.onclick = () => selectMode(b.dataset.mode)),
);
$("#english-toggle").onclick = () => {
  stopSpeech();
  english = !english;
  saved.english = english;
  save();
  if (mode === "quiz") startQuiz();
  render();
};
// WAI-ARIA tab keyboard navigation, with automatic activation.
$$("#time-page [role=tablist]").forEach((list) =>
  list.addEventListener("keydown", (e) => {
    const tabs = [...list.querySelectorAll("[role=tab]")],
      i = tabs.indexOf(document.activeElement);
    let j;
    if (e.key === "ArrowRight") j = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") j = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") j = 0;
    else if (e.key === "End") j = tabs.length - 1;
    else return;
    e.preventDefault();
    tabs[j].focus();
    tabs[j].click();
  }),
);
window.TimeLearning = {
  open(universe, t = "months") {
    stopSpeech();
    timeUniverse = universe === "anglais" ? "english" : "time";
    english = timeUniverse === "english" ? true : saved.english !== false;
    topic = t;
    mode = "learn";
    quiz = null;
    orderChoices = [];
    order = [];
    orderDone = false;
    render();
  },
  stop: stopSpeech,
  progress() {
    return { time: badges.length, english: englishBadges.length };
  },
};
window.addEventListener("pagehide", stopSpeech);
render();

(function () {
  "use strict";
  function fractionBar(n, d) {
    return `<div class="fraction-bar" role="img" aria-label="${n} parts sur ${d} parts égales">${Array.from({ length: d }, (_, i) => `<i class="${i >= n ? "unfilled" : ""}"></i>`).join("")}</div>`;
  }
  window.COLLEGE_COURSES = [
    {
      id: "fractions",
      grade: "6e",
      subject: "mathematiques",
      subjectName: "Mathématiques",
      domain: "Nombres et calculs",
      icon: "¾",
      title: "Fractions : du partage au quotient",
      heading: "Les fractions,<br><span>du partage au quotient.</span>",
      description:
        "Comprendre ce que signifie une fraction, retrouver des écritures équivalentes et dépasser l’unité.",
      objectives:
        "Lire et représenter une fraction, la comparer à 1, la décomposer en entier et fraction inférieure à 1, et reconnaître des fractions égales.",
      body: `<h2>1. Une unité, des parts égales</h2><p>Pour représenter <b>3/4</b>, on partage une unité en <b>4 parts égales</b> et on en prend <b>3</b>.</p>${fractionBar(3, 4)}<p><b>4</b> est le dénominateur : il indique en combien de parts égales l’unité est partagée. <b>3</b> est le numérateur : il indique combien de ces parts on prend.</p><aside class="lesson-callout">Les parts doivent être de même taille. Trois morceaux de tailles différentes sur quatre morceaux ne représentent pas forcément 3/4 de l’unité.</aside><h2>2. Une fraction est aussi un quotient</h2><p>Partager 3 litres entre 4 personnes, c’est calculer <b>3 ÷ 4</b>. Chaque personne reçoit <b>3/4 de litre</b>, soit <b>0,75 litre</b>.</p><div class="lesson-formula">3/4 = 3 ÷ 4 = 0,75</div><p>Plus généralement, <b>a/b est le nombre qui, multiplié par b, donne a</b>. Par exemple : (3/4) × 4 = 3. Le dénominateur ne peut jamais être zéro : diviser par zéro n’est pas défini.</p><h2>3. Changer l’écriture, garder le nombre</h2><p>Si on multiplie le numérateur et le dénominateur par un même nombre non nul, on obtient une fraction égale.</p><div class="lesson-formula">3/4 = (3 × 2)/(4 × 2) = 6/8</div>${fractionBar(6, 8)}<p>La partie coloriée occupe la même proportion de la bande. Attention : ajouter le même nombre en haut et en bas ne conserve généralement pas la fraction.</p><h2>4. Dépasser une unité</h2><p>Une fraction n’est pas toujours plus petite que 1. Avec <b>5/4</b>, on prend cinq quarts : une unité entière et encore un quart.</p><div class="double-bars">${fractionBar(4, 4)}${fractionBar(1, 4)}</div><div class="lesson-formula">5/4 = 1 + 1/4 = 1,25</div><aside class="lesson-callout">À retenir : 4/4 = 1. Le nombre 5/4 se trouve donc entre 1 et 2 sur une droite graduée.</aside><h2>5. Comparer une fraction à 1</h2><p>On compare le numérateur au dénominateur, car 1 peut s’écrire avec le même dénominateur : 1 = 4/4 = 7/7, etc.</p><ul><li>Numérateur plus petit : fraction inférieure à 1, par exemple 3/5.</li><li>Numérateur égal : fraction égale à 1, par exemple 6/6.</li><li>Numérateur plus grand : fraction supérieure à 1, par exemple 9/6.</li></ul><h2>6. Colorier et décomposer</h2><p>Pour colorier 3/5, partage la figure en cinq parts de même aire et colorie-en trois.</p>${fractionBar(3, 5)}<p> Pour décomposer 13/5, cherche combien de groupes de cinq sont contenus dans treize.</p><div class="lesson-formula">13/5 = 10/5 + 3/5 = 2 + 3/5</div><details class="lesson-sources"><summary>Référence du programme</summary><p>Mathématiques, 6e (cycle 3) : sens des fractions et sens quotient. Cette fiche aborde une partie de la notion, pas tout le chapitre.</p><p><a href="https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A" target="_blank" rel="noopener">Bulletin officiel du 17 avril 2025</a> · <a href="https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3" target="_blank" rel="noopener">Accompagnement Éduscol</a></p><small>Références vérifiées le 28 octobre 2026.</small></details>`,
      questions: [
        {
          text: "Une bande est partagée en 5 parts égales. Tu en colories 2. Quelle fraction représente la partie coloriée ?",
          options: ["5/2", "2/5", "2/3"],
          correct: 1,
          explanation:
            "Le dénominateur 5 indique le partage de l’unité en cinq parts égales. Le numérateur 2 compte les parts coloriées : 2/5.",
        },
        {
          text: "Trois litres de jus sont répartis équitablement dans 4 bouteilles. Quelle quantité reçoit chaque bouteille ?",
          options: ["3/4 de litre", "4/3 de litre", "3 litres"],
          correct: 0,
          explanation:
            "On partage 3 litres entre 4 bouteilles : 3 ÷ 4 = 3/4. Chaque bouteille reçoit 0,75 litre. La fraction exprime ici un quotient.",
        },
        {
          text: "Quelle fraction désigne le même nombre que 3/4 ?",
          options: ["3/8", "6/4", "6/8"],
          correct: 2,
          explanation:
            "On multiplie le numérateur ET le dénominateur par 2 : (3 × 2)/(4 × 2) = 6/8. Les parts sont deux fois plus petites, mais on en prend deux fois plus.",
        },
        {
          text: "Où se situe le nombre 5/4 ?",
          options: ["Entre 0 et 1", "Entre 1 et 2", "Il est égal à 5"],
          correct: 1,
          explanation:
            "5/4 = 4/4 + 1/4 = 1 + 1/4 = 1,25. Une fraction peut dépasser 1 : le numérateur peut être plus grand que le dénominateur.",
        },
      ],
    },
    {
      id: "accord-sujet-verbe",
      grade: "6e",
      subject: "francais",
      subjectName: "Français",
      domain: "Grammaire et orthographe",
      icon: "Aa",
      title: "Accorder le verbe avec son sujet",
      heading: "Sujet et verbe :<br><span>trouver le bon accord.</span>",
      description:
        "Une méthode pour repérer le sujet, éviter les mots pièges et choisir la bonne terminaison.",
      objectives:
        "Identifier le sujet d’un verbe conjugué et justifier un accord au présent, y compris avec un sujet éloigné ou inversé.",
      body: `<h2>1. Repérer le verbe conjugué</h2><p>Le verbe change quand on modifie le temps ou la personne. Dans « Lina <b>observe</b> la carte », on peut dire « Hier, Lina <b>observait</b> la carte ». Le mot qui change est le verbe.</p><aside class="lesson-callout">Un verbe n’exprime pas toujours une action : dans « Lina <b>semble</b> inquiète », « semble » est aussi un verbe conjugué.</aside><h2>2. Trouver le groupe sujet</h2><p>Le sujet commande l’accord du verbe en personne et en nombre. Pour le repérer, essaie l’encadrement <b>c’est… qui</b> ou <b>ce sont… qui</b>, puis remplace-le par un pronom.</p><div class="lesson-formula">Les deux amies observent la carte.<br>Ce sont les deux amies qui observent la carte.<br>Elles observent la carte.</div><p>Le groupe sujet complet est « les deux amies ». Il peut être remplacé par <b>elles</b> : le verbe est à la troisième personne du pluriel.</p><h2>3. Se méfier du nom le plus proche</h2><p>Dans « <b>Le carnet des explorateurs reste</b> ouvert », le sujet complet est « le carnet des explorateurs ». Son nom principal est <b>carnet</b>, au singulier. On remplace le groupe par <b>il</b> : « il reste ouvert ».</p><aside class="lesson-callout">On écrit « reste », et non « restent ». Le pluriel « des explorateurs » complète le nom « carnet » ; il ne commande pas l’accord.</aside><h2>4. Chercher aussi après le verbe</h2><p>Le sujet peut être placé après le verbe : « Au loin <b>apparaissent deux silhouettes</b> ». En remettant les mots dans l’ordre habituel, on obtient : « Deux silhouettes apparaissent au loin ».</p><div class="lesson-formula">Deux silhouettes → elles → apparaissent</div><p>Ce déplacement du sujet ne change pas l’accord. « Au loin » indique le lieu, pas le sujet.</p><h2>5. Accorder avec plusieurs sujets</h2><p>Dans « <b>Maya et son frère préparent</b> leur sac », les deux groupes coordonnés par « et » forment ensemble le sujet. On peut les remplacer par <b>ils</b> : « ils préparent leur sac ».</p><aside class="lesson-callout"><b>La méthode :</b> repérer le verbe → identifier son sujet complet → remplacer le sujet par un pronom → choisir la terminaison → relire. Le son ne suffit pas : « prépare » et « préparent » se prononcent de la même manière.</aside><details class="lesson-sources"><summary>Références du programme</summary><p>Français, 6e, cycle 3 : identification du groupe sujet et raisonnement sur l’accord sujet-verbe. Cette fiche travaille l’accord au présent ; elle ne couvre pas tous les temps ni tous les cas particuliers.</p><p><a href="https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A" target="_blank" rel="noopener">Programme du cycle 3, BO du 17 avril 2025</a> · <a href="https://eduscol.education.gouv.fr/6525/banque-de-ressources-pour-travailler-les-fondamentaux-au-college" target="_blank" rel="noopener">Ressources Éduscol sur les fondamentaux</a></p><small>Références vérifiées le 29 octobre 2026. Exemples et exercices originaux.</small></details>`,
      questions: [
        {
          text: "Dans « Les élèves de sixième visitent le musée », quel est le groupe sujet complet du verbe « visitent » ?",
          options: ["Les élèves de sixième", "de sixième", "le musée"],
          correct: 0,
          explanation:
            "Ce sont les élèves de sixième qui visitent le musée. Tout le groupe « les élèves de sixième » est sujet. On peut le remplacer par « ils ».",
        },
        {
          text: "Choisis la bonne forme : « Le bruit des vagues … les voyageurs. » (bercer, au présent)",
          options: ["bercent", "berce", "berces"],
          correct: 1,
          explanation:
            "Le sujet est « le bruit des vagues », dont le nom principal « bruit » est singulier. On remplace ce groupe par « il » : il berce les voyageurs. Le nom « vagues » ne commande pas l’accord.",
        },
        {
          text: "Complète : « Dans le ciel … deux montgolfières. » (flotter, au présent)",
          options: ["flotte", "flottes", "flottent"],
          correct: 2,
          explanation:
            "Le sujet est placé après le verbe : « deux montgolfières ». On peut dire « Deux montgolfières flottent dans le ciel ». Elles flottent : troisième personne du pluriel, terminaison -ent.",
        },
        {
          text: "Complète : « Nora et son cousin … un refuge. » (chercher, au présent)",
          options: ["cherche", "cherchent", "cherches"],
          correct: 1,
          explanation:
            "Nora et son cousin forment ensemble le sujet. Ils cherchent un refuge : le verbe est à la troisième personne du pluriel, même si « cousin », juste avant le verbe, est au singulier.",
        },
        {
          text: "Quel mot est le verbe conjugué dans « La salle semble silencieuse » ?",
          options: ["salle", "silencieuse", "semble"],
          correct: 2,
          explanation:
            "On peut changer le temps : « La salle semblait silencieuse ». Le mot qui change est « semble ». Ce verbe exprime ici un état, et non une action.",
        },
        {
          text: "Choisis la phrase correctement accordée au présent.",
          options: [
            "On préparent le matériel.",
            "On prépares le matériel.",
            "On prépare le matériel.",
          ],
          correct: 2,
          explanation:
            "Le pronom « on » commande un verbe à la troisième personne du singulier : on prépare. C’est le cas même quand « on » désigne plusieurs personnes.",
        },
      ],
    },
  ];
  window.COLLEGE_COURSES.push({
    id: "proportionnalite",
    grade: "5e",
    subject: "mathematiques",
    subjectName: "Mathématiques",
    domain: "Proportionnalité et fonctions",
    icon: "× k",
    title: "Proportionnalité : reconnaître et calculer",
    heading: "La proportionnalité,<br><span>une même règle de calcul.</span>",
    description:
      "Lire un tableau, trouver un coefficient et choisir une méthode pour résoudre un problème concret.",
    objectives:
      "Reconnaître une situation de proportionnalité, utiliser un coefficient et calculer une quantité par retour à l’unité ou par linéarité.",
    body: `<h2>1. Reconnaître la même règle</h2><p>Deux grandeurs sont proportionnelles quand on passe de l’une à l’autre en multipliant toujours par <b>un même nombre</b>. Ce nombre est le <b>coefficient de proportionnalité</b>.</p><p>Par exemple, des pommes sont vendues à un prix constant de <b>3 € par kilogramme</b>, sans frais fixes ni réduction. Le prix est alors proportionnel à la masse achetée.</p><div class="course-table-wrap"><table class="course-table"><caption>Pommes au prix constant de 3 €/kg</caption><tbody><tr><th scope="row">Masse (kg)</th><td>2</td><td>5</td><td>7</td></tr><tr><th scope="row">Prix (€)</th><td>6</td><td>15</td><td>21</td></tr></tbody></table></div><div class="lesson-formula">Masse en kg × 3 = prix en euros</div><p>Dans ce sens de lecture, le coefficient est <b>3</b>. Il représente le prix d’un kilogramme. Pour passer du prix à la masse, on divise par 3.</p><h2>2. Vérifier un tableau</h2><p>Pour chaque colonne dont la masse est non nulle, on divise le prix par la masse : <b>6 ÷ 2 = 3</b>, <b>15 ÷ 5 = 3</b> et <b>21 ÷ 7 = 3</b>. Les quotients sont identiques : les données du tableau sont proportionnelles.</p><aside class="lesson-callout">Le simple fait que les deux grandeurs augmentent ne suffit pas. Pour 1, 2 et 3 cahiers vendus respectivement 2 €, 4 € et 7 €, les quotients sont 2, 2 et 7/3 : ce tableau n’est pas proportionnel.</aside><h2>3. Revenir à l’unité</h2><p>Une recette pour <b>6 personnes</b> utilise <b>300 g de farine</b>. On garde la même quantité de farine par personne. Pour adapter cette recette à 10 personnes :</p><div class="lesson-formula">Pour 1 personne : 300 ÷ 6 = 50 g<br>Pour 10 personnes : 50 × 10 = 500 g</div><p>Le retour à l’unité consiste à calculer la quantité pour un seul élément, puis à multiplier par le nombre d’éléments souhaité. Pense à préciser l’unité du résultat.</p><h2>4. Utiliser les colonnes déjà connues</h2><p>Dans le tableau des pommes, 7 kg correspondent à <b>2 kg + 5 kg</b>. On peut additionner les prix associés : <b>6 € + 15 € = 21 €</b>. C’est une propriété de linéarité.</p><p>On peut aussi multiplier une colonne entière : si 2 kg coûtent 6 €, alors 4 kg coûtent 12 €. On multiplie <b>les deux valeurs</b> par 2.</p><aside class="lesson-callout">Ces méthodes s’utilisent une fois la proportionnalité établie. Choisis la plus simple selon les nombres : coefficient, retour à l’unité, addition ou multiplication de colonnes.</aside><h2>5. Repérer les frais fixes</h2><p>Un service facture <b>3 € par carnet</b> et ajoute <b>2 € de livraison par commande</b>. Un carnet coûte au total 5 € ; deux carnets coûtent 8 €. Doubler le nombre de carnets ne double pas le total.</p><div class="lesson-formula">Pour 4 carnets : 4 × 3 + 2 = 14 €</div><p>Le prix des carnets seuls est proportionnel à leur nombre, mais le total avec les frais fixes ne l’est pas.</p><details class="lesson-sources"><summary>Références du programme</summary><p>Mathématiques, 5e : reconnaître la proportionnalité, utiliser un coefficient, représenter une situation par un tableau et mobiliser la linéarité ou le retour à l’unité. Cette fiche introduit ces méthodes ; elle ne couvre pas les graphiques, pourcentages ni tout le chapitre.</p><p><a href="https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A" target="_blank" rel="noopener">Programme du cycle 4, BO du 5 mars 2026</a> · <a href="https://eduscol.education.gouv.fr/5736/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-4" target="_blank" rel="noopener">Accompagnement Éduscol</a></p><small>Programme applicable en 5e depuis la rentrée 2026-2027. Références vérifiées le 30 octobre 2026. Exemples et exercices originaux.</small></details>`,
    questions: [
      {
        text: "Des pommes sont vendues au même prix par kilogramme, sans frais ni réduction. Si 2 kg coûtent 6 €, combien coûtent 5 kg ?",
        options: ["9 €", "15 €", "30 €"],
        correct: 1,
        explanation:
          "On revient à l’unité : 6 ÷ 2 = 3 € pour 1 kg. Pour 5 kg, on calcule 5 × 3 = 15 €. Les grandeurs sont proportionnelles car le prix par kilogramme est constant.",
      },
      {
        text: "Dans le tableau des pommes, quel coefficient permet de passer de la masse en kilogrammes au prix en euros ?",
        options: ["3", "1/3", "6"],
        correct: 0,
        explanation:
          "On multiplie la masse par 3 pour obtenir le prix : 2 × 3 = 6 et 5 × 3 = 15. Le coefficient dans le sens masse → prix est 3. Le nombre 1/3 correspond au sens inverse.",
      },
      {
        text: "Pour 6 personnes, une recette demande 300 g de farine. En conservant les mêmes proportions, quelle quantité faut-il pour 10 personnes ?",
        options: ["304 g", "600 g", "500 g"],
        correct: 2,
        explanation:
          "Pour une personne, il faut 300 ÷ 6 = 50 g de farine. Pour dix personnes, il faut donc 50 × 10 = 500 g. Ajouter quatre personnes ne signifie pas ajouter quatre grammes.",
      },
      {
        text: "Un tableau indique : 1 cahier → 2 €, 2 cahiers → 4 €, 3 cahiers → 7 €. Les données sont-elles proportionnelles ?",
        options: [
          "Oui, car les prix augmentent.",
          "Non, car le prix par cahier change.",
          "Oui, car 4 est le double de 2.",
        ],
        correct: 1,
        explanation:
          "Il faut vérifier toutes les colonnes : 2 ÷ 1 = 2, 4 ÷ 2 = 2, mais 7 ÷ 3 ne vaut pas 2. Les deux premières colonnes seules ne suffisent pas à valider tout le tableau.",
      },
      {
        text: "Un carnet coûte 3 €. Une commande ajoute 2 € de livraison, quel que soit le nombre de carnets. Combien paie-t-on pour une commande de 4 carnets ?",
        options: ["14 €", "20 €", "12 €"],
        correct: 0,
        explanation:
          "Les quatre carnets coûtent 4 × 3 = 12 €. On ajoute une seule fois les 2 € de livraison : 12 + 2 = 14 €. Multiplier 5 € par 4 compterait la livraison quatre fois.",
      },
      {
        text: "Le prix du riz est proportionnel à la masse achetée. On sait que 2 kg coûtent 5 € et que 5 kg coûtent 12,50 €. Quel est le prix de 7 kg ?",
        options: ["12,50 €", "25 €", "17,50 €"],
        correct: 2,
        explanation:
          "On peut additionner les deux colonnes connues : 2 kg + 5 kg = 7 kg et 5 € + 12,50 € = 17,50 €. La proportionnalité autorise ce raisonnement. On retrouve aussi 7 × 2,50 = 17,50 €.",
      },
    ],
  });
  const en = (text) => `<span lang="en-GB">${text}</span>`;
  window.COLLEGE_COURSES.push({
    id: "present-simple-habitudes",
    grade: "6e",
    subject: "anglais",
    subjectName: "Anglais",
    domain: "Vie quotidienne · A1 vers A1+",
    icon: "En",
    title: "Présent simple : parler de ses habitudes",
    heading: "Le présent simple,<br><span>pour raconter ton quotidien.</span>",
    description:
      "Comprendre une journée d’école et construire des phrases affirmatives, négatives et des questions simples.",
    objectives:
      "Repérer une habitude, choisir la forme du verbe selon le sujet et utiliser do ou does dans des phrases simples.",
    body: `
 <p><b>6e · Anglais · A1 vers A1+</b> — Une première fiche sur les habitudes, dans le thème de la vie quotidienne et de l’école. Les questions avec ${en("do")} et ${en("does")} constituent l’étape vers A1+.</p>
 <h2>1. Lire une journée d’école</h2>
 <p>Voici Chloe, une élève fictive qui habite à York, en Angleterre. Lis son petit portrait : les mots qui indiquent un moment aident à comprendre ses habitudes.</p>
 <div class="lesson-reading" aria-label="Portrait de Chloe, texte en anglais">
 <p lang="en-GB">Chloe lives in York. She goes to school by bus every day. She wears a uniform at school. On Tuesdays, she plays football after school. She doesn’t watch TV in the morning.</p>
 </div>
 <p><b>Quelques repères :</b> ${en("every day")} = tous les jours ; ${en("by bus")} = en bus ; ${en("wear a uniform")} = porter un uniforme ; ${en("on Tuesdays")} = le mardi, de façon habituelle ; ${en("after school")} = après l’école ; ${en("in the morning")} = le matin.</p>
 <p>Ce portrait est un texte original d’entraînement. Chaque école et chaque élève ont leurs habitudes.</p>
 <h2>2. Décrire une habitude</h2>
 <p>Le <b>présent simple</b> sert notamment à dire ce que l’on fait régulièrement. Avec ${en("I, you, we, they")}, on utilise la <b>base verbale</b> : la forme du verbe sans ${en("to")}, par exemple ${en("play")}.</p>
 <div class="lesson-formula" lang="en-GB">I play football on Tuesdays.<br>They play football on Tuesdays.</div>
 <p>« Je joue au football le mardi. » / « Ils ou elles jouent au football le mardi. » On parle ici d’une habitude, pas d’une action observée en train de se dérouler.</p>
 <h2>3. Avec he, she ou it : penser à la terminaison</h2>
 <p>À la forme affirmative, avec ${en("he, she, it")} ou un nom singulier comme Chloe, on ajoute généralement <b>-s</b> : ${en("I play → she plays")}, ${en("I live → Chloe lives")}.</p>
 <div class="lesson-formula" lang="en-GB">I watch → she watches<br>I study → she studies<br>I go → she goes</div>
 <p>Pour les verbes en <b>-ch, -sh, -s, -x, -z</b>, on ajoute généralement <b>-es</b>, comme ${en("watch → watches")}. Après une consonne suivie de <b>-y</b>, le <b>y</b> devient <b>-ies</b> : ${en("study → studies")}. Après une voyelle, on garde le <b>y</b> : ${en("play → plays")}.</p>
 <aside class="lesson-callout">Mémorise aussi ${en("go → goes")}, ${en("do → does")} et ${en("have → has")}. Le verbe ${en("be")} a ses propres formes (${en("am, is, are")}) ; cette fiche travaille surtout les verbes comme ${en("play, live, watch")}.</aside>
 <h2>4. Dire ce que l’on ne fait pas</h2>
 <p>Avec ces verbes, on place <b>${en("don’t")}</b> (${en("do not")}) avant la base verbale pour ${en("I, you, we, they")}. Avec ${en("he, she, it")}, on utilise <b>${en("doesn’t")}</b> (${en("does not")}).</p>
 <div class="lesson-formula" lang="en-GB">I don’t watch TV in the morning.<br>She doesn’t watch TV in the morning.</div>
 <p>« Je ne regarde pas la télévision le matin. » / « Elle ne regarde pas la télévision le matin. » Avec ${en("doesn’t")}, le verbe reste à la base : on écrit ${en("doesn’t watch")}, jamais ${en("doesn’t watches")}.</p>
 <h2>5. Poser une question simple</h2>
 <p>Pour demander si une personne a une habitude, on place <b>${en("Do")}</b> ou <b>${en("Does")}</b> devant le sujet, puis la base verbale.</p>
 <div class="lesson-formula" lang="en-GB">Do you play football?<br>Does Chloe play football?</div>
 <p>« Est-ce que tu joues au football ? » / « Est-ce que Chloe joue au football ? » Avec ${en("does")}, on garde encore ${en("play")}, sans <b>-s</b>. Une réponse courte possible est ${en("Yes, she does.")} ou ${en("No, she doesn’t.")}</p>
 <aside class="lesson-callout"><b>Ta méthode :</b> trouve le sujet → repère affirmation, négation ou question → choisis la forme du verbe. ${en("She plays. / She doesn’t play. / Does she play?")} Ces modèles ne s’appliquent pas au verbe ${en("be")} : on dit par exemple ${en("Is she tired?")}</aside>
 <details class="lesson-sources"><summary>Références du programme</summary>
 <p>Anglais, 6e : axe « Le quotidien : vivre, jouer, apprendre » ; présent simple, troisième personne du singulier et construction de phrases simples. Repères linguistiques A1 et A1+ (annexe 3, pages 12–13). Cette fiche travaille l’écrit et une partie de la notion ; elle ne valide pas à elle seule un niveau du CECRL.</p>
 <p><a href="https://www.education.gouv.fr/bo/2025/Hebdo22/MENE2504621A" target="_blank" rel="noopener">Bulletin officiel du 29 mai 2025</a> · <a href="https://www.education.gouv.fr/sites/default/files/annexe-3-programme-d-anglais-pour-les-classes-de-coll-ge-440358.pdf" target="_blank" rel="noopener">Programme d’anglais, annexe 3 (PDF)</a> · <a href="https://eduscol.education.gouv.fr/4758/ressources-d-accompagnement-pour-les-langues-vivantes-etrangeres-et-regionales-au-college" target="_blank" rel="noopener">Accompagnement Éduscol</a></p>
 <small>Programme applicable en 6e depuis la rentrée 2025-2026. Références vérifiées le 31 octobre 2026. Texte, exemples et exercices originaux.</small></details>`,
    questions: [
      {
        text: "D’après le portrait de Chloe, quand joue-t-elle au football ?",
        options: [
          "Le lundi après l’école.",
          "Le mardi après l’école.",
          "Tous les matins.",
        ],
        correct: 1,
        explanation: `${en("On Tuesdays, she plays football after school.")} signifie « Le mardi, elle joue au football après l’école ». ${en("On Tuesdays")} indique une habitude ; ${en("after school")} précise le moment de la journée.`,
      },
      {
        text: `Complète cette habitude : ${en("I … football on Tuesdays.")} (jouer)`,
        options: [en("plays"), en("playing"), en("play")],
        correct: 2,
        explanation: `Avec ${en("I")}, on utilise la base verbale ${en("play")} : ${en("I play football on Tuesdays.")} Le -s de ${en("plays")} concerne ${en("he, she, it")}. ${en("Playing")} seul ne forme pas ici un verbe conjugué.`,
      },
      {
        text: `Complète : ${en("She … English every day.")} (étudier)`,
        options: [en("studies"), en("study"), en("studys")],
        correct: 0,
        explanation: `Le sujet ${en("she")} est à la troisième personne du singulier. Dans ${en("study")}, le y suit une consonne : on remplace -y par -ies. On écrit ${en("She studies English every day.")} (« Elle étudie l’anglais tous les jours »).`,
      },
      {
        text: `Complète : ${en("Chloe … to school by bus.")} (aller)`,
        options: [en("go"), en("goes"), en("going")],
        correct: 1,
        explanation: `Chloe peut être remplacée par ${en("she")}. À la forme affirmative, ${en("go")} devient ${en("goes")} : ${en("Chloe goes to school by bus.")} signifie « Chloe va à l’école en bus ». On mémorise cette forme en -es.`,
      },
      {
        text: "Quelle phrase signifie « Elle ne regarde pas la télévision le matin » ?",
        options: [
          en("She don’t watch TV in the morning."),
          en("She doesn’t watches TV in the morning."),
          en("She doesn’t watch TV in the morning."),
        ],
        correct: 2,
        explanation: `Avec ${en("she")}, la négation se construit avec ${en("doesn’t")} suivi de la base verbale ${en("watch")}. Le verbe ne prend plus de -s : ${en("She doesn’t watch TV in the morning.")} ${en("Don’t")} s’utilise avec ${en("I, you, we, they")}.`,
      },
      {
        text: "Comment demander « Est-ce que Chloe joue au football ? » ?",
        options: [
          en("Does Chloe play football?"),
          en("Does Chloe plays football?"),
          en("Do Chloe play football?"),
        ],
        correct: 0,
        explanation: `Chloe est un sujet singulier, comme ${en("she")}. On commence par ${en("Does")}, puis on place le sujet et la base verbale sans -s : ${en("Does Chloe play football?")} La marque de la troisième personne est déjà portée par ${en("does")}.`,
      },
    ],
  });
  window.COLLEGE_COURSES.push({
    id: "pythagore-longueurs",
    grade: "4e",
    subject: "mathematiques",
    subjectName: "Mathématiques",
    domain: "Espace et géométrie",
    icon: "△",
    title: "Pythagore : calculer une longueur",
    heading: "Un angle droit,<br><span>une longueur à trouver.</span>",
    description:
      "Identifier l’hypoténuse, écrire la bonne égalité et calculer un côté d’un triangle rectangle.",
    objectives:
      "Utiliser le théorème de Pythagore pour calculer l’hypoténuse ou un côté de l’angle droit, puis vérifier le résultat.",
    body: `<p><b>Mathématiques · 4e</b> — Prérequis : calculer un carré et comprendre une racine carrée. Une calculatrice peut aider pour le dernier exemple.</p>
 <h2>1. Partir d’un angle droit connu</h2>
 <p>Le théorème de Pythagore s’applique à un <b>triangle rectangle</b>. Le côté opposé à l’angle droit est l’<b>hypoténuse</b> : c’est le plus long des trois côtés.</p>
 <figure class="pythagore-figure"><svg viewBox="0 0 340 245" role="img" aria-labelledby="pythagore-title pythagore-desc" xmlns="http://www.w3.org/2000/svg"><title id="pythagore-title">Triangle ABC rectangle en A</title><desc id="pythagore-desc">AB mesure 3 centimètres, AC mesure 4 centimètres. BC, opposé à l’angle droit A, est l’hypoténuse à calculer.</desc><path d="M70 40 V190 H270 Z" fill="#e8efea" stroke="#315e60" stroke-width="3"/><path d="M70 170 H90 V190" fill="none" stroke="#315e60" stroke-width="2"/><path d="M70 40 L270 190" stroke="#ac633f" stroke-width="4"/><g fill="#223b3c" font-family="sans-serif" font-size="18"><text x="48" y="214">A</text><text x="50" y="30">B</text><text x="279" y="204">C</text><text x="8" y="121">3 cm</text><text x="142" y="221">4 cm</text><text x="177" y="90">BC = ?</text></g></svg><figcaption>ABC est rectangle en A. Le petit carré code l’angle droit. BC est l’hypoténuse.</figcaption></figure>
 <aside class="lesson-callout">L’énoncé ou un codage doit donner l’angle droit. L’apparence du dessin ne suffit pas à le prouver. Cette fiche utilise un angle droit déjà connu ; prouver qu’un triangle est rectangle relève de la réciproque, à étudier séparément.</aside>
 <h2>2. Écrire l’égalité avant les nombres</h2>
 <p>Dans un triangle rectangle, <b>le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés</b>. Pour ABC rectangle en A :</p>
 <div class="lesson-formula">BC² = AB² + AC²</div>
 <p>Le symbole ² signifie « au carré » : <b>3² = 3 × 3 = 9</b>. Il ne signifie pas « multiplier par 2 ». Attention : le théorème porte sur les carrés des longueurs ; on n’écrit pas BC = AB + AC.</p>
 <h2>3. Calculer l’hypoténuse</h2>
 <p>Dans le triangle dessiné, AB = 3 cm et AC = 4 cm. Puisque ABC est rectangle en A, on peut écrire :</p>
 <div class="lesson-formula">BC² = 3² + 4² = 9 + 16 = 25<br>BC = √25 = 5 cm</div>
 <p>La <b>racine carrée</b> de 25, notée √25, est le nombre positif dont le carré vaut 25. Ici, 5 × 5 = 25. BC est une longueur : elle est positive. Vérifie : 5 cm dépasse bien 3 cm et 4 cm.</p>
 <h2>4. Calculer un côté de l’angle droit</h2>
 <p>DEF est rectangle en D. Son hypoténuse EF mesure 13 cm et DE mesure 5 cm. On cherche DF. L’égalité commence toujours par le carré de l’hypoténuse :</p>
 <div class="lesson-formula">EF² = DE² + DF²<br>13² = 5² + DF²<br>DF² = 169 − 25 = 144<br>DF = √144 = 12 cm</div>
 <p>Pour trouver un côté de l’angle droit, on <b>soustrait</b> les carrés. Le résultat 12 cm est bien inférieur à l’hypoténuse de 13 cm. Toutes les longueurs doivent être exprimées dans la même unité avant le calcul.</p>
 <h2>5. Résoudre un problème et arrondir</h2>
 <p>Un jardin rectangulaire mesure 2 m sur 3 m. Sa diagonale forme un triangle rectangle avec deux côtés du jardin. Si d est la longueur de la diagonale :</p>
 <div class="lesson-formula">d² = 2² + 3² = 13<br>d = √13 m ≈ 3,61 m</div>
 <p><b>√13 m</b> est la valeur exacte. <b>3,61 m</b> est une valeur approchée au centième de mètre : on utilise le signe ≈. On garde la racine carrée jusqu’à la dernière étape pour éviter les arrondis successifs.</p>
 <aside class="lesson-callout"><b>Ta méthode :</b> repérer l’angle droit → nommer l’hypoténuse → écrire l’égalité → remplacer par les longueurs dans une même unité → calculer le carré, puis sa racine → conclure avec l’unité et vérifier l’ordre de grandeur.</aside>
 <details class="lesson-sources"><summary>Références du programme</summary><p>Mathématiques, 4e : calcul de longueurs dans un triangle rectangle et usage des racines carrées. Cette fiche introduit le théorème direct ; elle ne couvre pas sa démonstration, la réciproque ni tout le chapitre.</p><p><a href="https://eduscol.education.gouv.fr/6910/reperes-annuels-de-progression-et-attendus-de-fin-d-annee-du-cp-la-troisieme" target="_blank" rel="noopener">Éduscol : attendus applicables en 4e</a> · <a href="https://eduscol.education.gouv.fr/sites/default/files/document/16-maths-4e-attendus-eduscol1114746pdf-74682.pdf" target="_blank" rel="noopener">Attendus de mathématiques en 4e (PDF)</a> · <a href="https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A" target="_blank" rel="noopener">BO : calendrier des nouveaux programmes</a></p><small>Références vérifiées le 1er novembre 2026. En 4e, programme de 2020 encore applicable en 2026-2027 ; nouveau programme à la rentrée 2027. Exemples et exercices originaux.</small></details>`,
    questions: [
      {
        text: "ABC est rectangle en A. Quel côté est l’hypoténuse ?",
        options: ["AB", "BC", "AC"],
        correct: 1,
        explanation:
          "L’hypoténuse est opposée à l’angle droit A : c’est BC, le côté qui ne passe pas par A. AB et AC sont les deux côtés de l’angle droit.",
      },
      {
        text: "MNP est rectangle en N. Quelle égalité traduit le théorème de Pythagore ?",
        options: ["MP² = MN² + NP²", "MN² = MP² + NP²", "MP = MN + NP"],
        correct: 0,
        explanation:
          "L’angle droit est en N, donc MP est l’hypoténuse. Son carré est égal à la somme des carrés de MN et NP. On additionne les carrés, pas directement les longueurs.",
      },
      {
        text: "RST est rectangle en R. RS = 6 cm et RT = 8 cm. Quelle est la longueur ST ?",
        options: ["14 cm", "100 cm", "10 cm"],
        correct: 2,
        explanation:
          "ST est l’hypoténuse : ST² = RS² + RT² = 36 + 64 = 100. On prend ensuite la racine carrée : ST = √100 = 10 cm. 100 est le carré obtenu, pas la longueur demandée.",
      },
      {
        text: "UVW est rectangle en U. VW = 10 cm et UV = 6 cm. Quelle est la longueur UW ?",
        options: ["8 cm", "4 cm", "√136 cm"],
        correct: 0,
        explanation:
          "VW est l’hypoténuse. VW² = UV² + UW², donc UW² = 100 − 36 = 64. Ainsi UW = 8 cm. Soustraire directement 10 − 6 ne respecte pas l’égalité des carrés.",
      },
      {
        text: "Un rectangle mesure 5 m sur 12 m. Quelle est la longueur de sa diagonale ?",
        options: ["17 m", "13 m", "√119 m"],
        correct: 1,
        explanation:
          "Deux côtés consécutifs et la diagonale forment un triangle rectangle. La diagonale est l’hypoténuse : d² = 5² + 12² = 25 + 144 = 169. Donc d = √169 = 13 m.",
      },
      {
        text: "Un triangle paraît rectangle sur un dessin sans codage. L’énoncé ne précise aucun angle. Peut-on appliquer directement Pythagore pour calculer un côté ?",
        options: [
          "Oui, si le dessin est assez grand.",
          "Oui, dans tous les triangles.",
          "Non, il faut d’abord savoir que le triangle est rectangle.",
        ],
        correct: 2,
        explanation:
          "Le théorème direct suppose un triangle rectangle. Un dessin sans codage ne prouve pas l’existence d’un angle droit. Il faut une donnée de l’énoncé ou une justification avant d’utiliser cette égalité pour calculer une longueur.",
      },
    ],
  });
  window.COLLEGE_COURSES.push({
    id: "aires-urbaines-mobilites",
    grade: "3e",
    subject: "histoire-geographie",
    subjectName: "Histoire-géographie",
    domain: "Géographie · Territoires français",
    icon: "◎",
    title: "Aires urbaines : espaces et mobilités",
    heading:
      "Habiter autour des villes,<br><span>comprendre les déplacements.</span>",
    description:
      "Distinguer centre, banlieue et couronne périurbaine, puis expliquer les liens entre ces espaces.",
    objectives:
      "Lire un schéma d’aire urbaine, définir la périurbanisation et justifier une réponse à partir d’un document sur les mobilités quotidiennes.",
    body: `<p><b>Géographie · 3e</b> — Thème : dynamiques territoriales de la France contemporaine. Cette introduction travaille les espaces sous influence urbaine et leurs liens quotidiens.</p>
 <h2>1. La ville influence un espace plus large</h2>
 <p>Pour comprendre une aire urbaine, on étudie les lieux où les habitants <b>résident, travaillent, étudient et utilisent des services</b>, ainsi que les déplacements qui les relient.</p>
 <p>Le modèle scolaire distingue une <b>ville-centre</b>, les communes de <b>banlieue</b> en continuité du bâti avec elle, et une <b>couronne périurbaine</b>. Celle-ci comporte des espaces bâtis discontinus, des bourgs et des espaces agricoles ou naturels, en relation avec le pôle urbain. La ville-centre et sa banlieue forment le pôle urbain dans ce modèle simplifié.</p>
 <figure class="urban-figure"><svg viewBox="0 0 340 300" role="img" aria-labelledby="urban-title urban-desc" xmlns="http://www.w3.org/2000/svg"><title id="urban-title">Modèle simplifié d’une aire urbaine</title><desc id="urban-desc">La ville-centre au milieu est entourée de la banlieue, puis de la couronne périurbaine. Une double flèche représente les déplacements quotidiens entre la couronne et le centre.</desc><ellipse cx="170" cy="150" rx="160" ry="140" fill="#edf1e1" stroke="#778664" stroke-dasharray="5 5"/><ellipse cx="170" cy="150" rx="114" ry="90" fill="#d2e3dd" stroke="#577d70"/><ellipse cx="170" cy="150" rx="65" ry="39" fill="#315e60"/><g font-family="sans-serif" font-size="16" text-anchor="middle"><text x="170" y="44" fill="#314635">Couronne périurbaine</text><text x="170" y="91" fill="#223b3c">Banlieue</text><text x="170" y="146" fill="white">Ville-centre</text><text x="170" y="168" fill="white" font-size="13">emplois, services</text><text x="170" y="274" fill="#314635">Mobilités quotidiennes</text></g><path d="M170 195 V246 M164 202 L170 195 L176 202 M164 239 L170 246 L176 239" stroke="#ac633f" stroke-width="3" fill="none"/></svg><figcaption>Schéma de principe, sans échelle. Les formes réelles sont irrégulières ; emplois et services existent aussi hors du centre.</figcaption></figure>
 <aside class="lesson-callout">Une banlieue n’est pas forcément composée de grands immeubles : elle peut aussi avoir des maisons, des commerces et des entreprises. Le paysage et les liens avec la ville comptent davantage qu’un stéréotype.</aside>
 <h2>2. Comprendre la périurbanisation</h2>
 <p>La <b>périurbanisation</b> correspond au développement de l’habitat et des activités dans les espaces proches des villes, au-delà de l’agglomération bâtie en continu. Des ménages peuvent y rechercher un logement plus grand ou un cadre de vie différent, tout en gardant un emploi dans le pôle urbain.</p>
 <p>Ce développement peut consommer des terres agricoles ou naturelles et allonger certains trajets. Les situations varient selon les logements, les emplois et les transports disponibles.</p>
 <h2>3. Relier les espaces par les mobilités</h2>
 <p>Les <b>mobilités quotidiennes</b> sont les déplacements réguliers pour travailler, étudier, faire des achats ou pratiquer des loisirs. Les allers-retours réguliers entre domicile et travail sont des <b>mobilités pendulaires</b>.</p>
 <p>Les flux ne vont pas tous vers le centre : un habitant peut travailler dans une zone d’activités de banlieue ou se déplacer d’une commune périphérique à une autre. La dépendance à la voiture peut être plus forte là où les transports collectifs sont peu accessibles.</p>
 <h2>4. Analyser un document : le cas fictif de Clairville</h2>
 <p>Document pédagogique original, <b>entièrement fictif</b>. Il décrit le trajet habituel de trois personnes ; ces trois exemples ne sont pas une enquête représentative de la France.</p>
 <div class="course-table-wrap"><table class="course-table"><caption>Trois trajets domicile-travail dans l’aire urbaine fictive de Clairville</caption><thead><tr><th scope="col">Personne et domicile</th><th scope="col">Lieu de travail</th><th scope="col">Transport</th></tr></thead><tbody><tr><th scope="row">Lina · ville-centre</th><td>Ville-centre</td><td>Marche</td></tr><tr><th scope="row">Sami · banlieue</th><td>Ville-centre</td><td>Tramway</td></tr><tr><th scope="row">Zoé · couronne périurbaine</th><td>Banlieue</td><td>Voiture</td></tr></tbody></table></div>
 <p><b>Exemple de réponse justifiée :</b> « Zoé effectue une mobilité pendulaire : elle se déplace régulièrement entre son domicile périurbain et son travail en banlieue. Son trajet montre qu’un déplacement ne mène pas nécessairement à la ville-centre. »</p>
 <h2>5. Expliquer un enjeu avec nuance</h2>
 <p>Une collectivité peut développer une ligne de bus ou un itinéraire cyclable pour faciliter les déplacements. L’efficacité dépend notamment du tracé, des horaires, de la fréquence et des besoins des habitants. Un bus qui ne dessert pas le lieu de travail ne constitue pas automatiquement une solution pour ce trajet.</p>
 <aside class="lesson-callout"><b>Pour justifier :</b> nomme la notion → cite un fait du document → explique le lien. Distingue ce que le document montre et ce qu’il ne permet pas de conclure.</aside>
 <details class="lesson-sources"><summary>Références du programme</summary><p>Géographie, 3e, thème 1 : aires urbaines et dynamiques territoriales. Cette fiche pose le vocabulaire et entraîne à la lecture de document. Une étude de cas réelle, les repères nationaux et la mondialisation restent à approfondir.</p><p><a href="https://www.education.gouv.fr/les-programmes-du-college-470408" target="_blank" rel="noopener">Ministère : programme de géographie de 3e</a> · <a href="https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4" target="_blank" rel="noopener">Programmes applicables en 2026-2027</a> · <a href="https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4" target="_blank" rel="noopener">Ressources Éduscol</a></p><small>Programme de 2020 en vigueur en 3e. Références vérifiées le 2 novembre 2026. Schéma, document et exercices originaux.</small></details>`,
    questions: [
      {
        text: "Quel élément caractérise la banlieue dans le modèle présenté ?",
        options: [
          "Des communes dont le bâti est en continuité avec la ville-centre.",
          "Uniquement des immeubles de grande hauteur.",
          "Un territoire sans emplois ni commerces.",
        ],
        correct: 0,
        explanation:
          "La banlieue appartient à l’agglomération bâtie en continu autour de la ville-centre. Elle peut comporter des maisons, des immeubles, des commerces et des emplois : sa définition ne repose pas sur un seul type de paysage.",
      },
      {
        text: "Quel exemple illustre la périurbanisation ?",
        options: [
          "La fermeture d’une école dans une ville-centre.",
          "La construction de nouveaux logements dans des communes proches d’une ville, au-delà du bâti continu.",
          "Un voyage touristique entre deux pays.",
        ],
        correct: 1,
        explanation:
          "La périurbanisation transforme les espaces proches des villes par le développement de l’habitat et d’activités. Elle étend l’influence urbaine au-delà de l’agglomération bâtie en continu. Un voyage international relève d’une autre forme de mobilité.",
      },
      {
        text: "D’après le tableau de Clairville, quel trajet Zoé effectue-t-elle pour travailler ?",
        options: [
          "De la ville-centre à la banlieue, à pied.",
          "De la couronne périurbaine à la ville-centre, en tramway.",
          "De la couronne périurbaine à la banlieue, en voiture.",
        ],
        correct: 2,
        explanation:
          "La ligne de Zoé indique un domicile dans la couronne périurbaine, un travail en banlieue et un trajet en voiture. Il faut lire les trois colonnes de la même ligne. Son trajet ne passe pas nécessairement par le centre.",
      },
      {
        text: "Pourquoi le trajet habituel domicile-travail de Sami est-il une mobilité pendulaire ?",
        options: [
          "Parce qu’il se répète entre son domicile et son lieu de travail.",
          "Parce qu’il change définitivement de domicile.",
          "Parce qu’il part en vacances.",
        ],
        correct: 0,
        explanation:
          "Une mobilité pendulaire est un déplacement régulier entre le domicile et le travail, avec un retour. Le trajet de Sami en tramway correspond à cette définition. Un déménagement serait un changement de résidence.",
      },
      {
        text: "Une nouvelle ligne de bus dessert le domicile de Zoé, mais pas sa zone de travail. Quelle conclusion est justifiée ?",
        options: [
          "Zoé peut forcément abandonner sa voiture immédiatement.",
          "Cette ligne seule ne garantit pas une solution adaptée à son trajet.",
          "Les bus sont toujours inutiles en périphérie.",
        ],
        correct: 1,
        explanation:
          "Il faut relier les lieux utiles et tenir compte des horaires et des correspondances possibles. Une desserte près du domicile est un élément favorable, mais elle ne suffit pas à prouver que tout le trajet est réalisable. Le document ne justifie pas une conclusion générale contre les bus.",
      },
      {
        text: "Peut-on déduire des trois trajets fictifs que tous les habitants périurbains de France utilisent une voiture ?",
        options: [
          "Oui, car Zoé utilise une voiture.",
          "Oui, car le tableau contient trois personnes.",
          "Non, ces exemples fictifs ne représentent pas toute la population.",
        ],
        correct: 2,
        explanation:
          "Le tableau sert à comprendre des relations spatiales, pas à mesurer les pratiques en France. Le seul cas de Zoé ne permet pas de généraliser. Il faudrait des données réelles, un échantillon pertinent et des informations sur les transports disponibles.",
      },
    ],
  });
  window.COLLEGE_COURSES.push({
    id: "masse-volume-mesures",
    grade: "5e",
    subject: "sciences",
    subjectName: "Sciences",
    domain: "Physique-chimie · Matière",
    icon: "mL",
    title: "Masse et volume : mesurer sans confondre",
    heading: "Masse et volume,<br><span>deux grandeurs à distinguer.</span>",
    description:
      "Choisir le bon instrument, lire une éprouvette graduée et mesurer la masse d’un liquide.",
    objectives:
      "Distinguer masse et volume, utiliser une tare, lire un ménisque et calculer le volume d’un solide par déplacement d’eau.",
    body: `<p><b>Physique-chimie · 5e · Cycle 4</b> — Une introduction aux mesures de matière. Prérequis : soustraire des nombres et convertir des unités usuelles.</p>
 <h2>1. Deux questions différentes</h2>
 <p>La <b>masse</b> caractérise un échantillon de matière. Elle se mesure avec une <b>balance</b> et s’exprime notamment en kilogrammes (kg) ou en grammes (g). Le <b>volume</b> est l’espace occupé par cet échantillon ; pour un liquide, on peut le mesurer avec une <b>éprouvette graduée</b>, en litres (L) ou en millilitres (mL).</p>
 <div class="lesson-formula">Masse → balance → g ou kg<br>Volume → éprouvette graduée → mL ou L</div>
 <p>Un objet très volumineux n’a pas forcément une grande masse : une grosse éponge peut avoir une masse plus faible qu’une petite pièce métallique. La nature de la matière compte aussi.</p>
 <h2>2. Garder la bonne unité</h2>
 <div class="lesson-formula">1 kg = 1 000 g<br>1 L = 1 000 mL<br>1 mL = 1 cm³</div>
 <p>Par exemple, <b>250 mL = 0,250 L</b> : on divise par 1 000. La masse et le volume ne sont pas interchangeables : on ne transforme pas des millilitres en grammes avec une simple conversion d’unité.</p>
 <aside class="lesson-callout">À température usuelle, 1 L d’eau liquide a une masse d’environ 1 kg. Ce repère concerne l’eau : 1 L d’un autre liquide peut avoir une masse différente. La relation entre masse et volume sera approfondie avec la masse volumique.</aside>
 <h2>3. Mesurer la masse d’un liquide</h2>
 <p>Le récipient a lui aussi une masse. Pose un récipient vide sur la balance, puis utilise la fonction <b>tare</b> : l’affichage revient à zéro. Ajoute ensuite le liquide ; l’affichage donne la masse du liquide seul.</p>
 <p>Sans tare, on peut mesurer séparément le récipient vide et le récipient rempli, puis soustraire :</p>
 <div class="lesson-formula">Récipient rempli : 186 g<br>Récipient vide : 36 g<br>Masse du liquide : 186 − 36 = 150 g</div>
 <p>La tare met l’affichage à zéro ; elle ne fait pas disparaître la masse physique du récipient. Pense à vérifier l’unité affichée par la balance.</p>
 <h2>4. Lire le volume d’un liquide</h2>
 <p>Pose l’éprouvette verticalement sur une surface horizontale. Repère son unité et la valeur d’un intervalle entre deux traits. Pour l’eau, la surface est légèrement courbée : c’est le <b>ménisque</b>. Place les yeux à sa hauteur et lis le <b>bas du ménisque</b>.</p>
 <figure class="measure-figure"><svg viewBox="0 0 320 260" role="img" aria-labelledby="measure-title measure-desc" xmlns="http://www.w3.org/2000/svg"><title id="measure-title">Lecture de 60 mL dans une éprouvette</title><desc id="measure-desc">Les graduations vont de 40 à 80 millilitres, par intervalles de 10 millilitres. Le bas du ménisque est aligné avec 60 millilitres.</desc><path d="M70 30 V220 H150 V30" fill="#f7faf8" stroke="#315e60" stroke-width="3"/><path d="M71 95 Q110 105 149 95 V219 H71 Z" fill="#b4d8d5"/><path d="M70 95 Q110 105 150 95" fill="none" stroke="#315e60" stroke-width="2"/><path d="M60 230 H160 M130 140 H150 M130 120 H150 M125 100 H150 M130 80 H150 M130 60 H150" fill="none" stroke="#315e60" stroke-width="2"/><path d="M110 100 H260" fill="none" stroke="#ac633f" stroke-dasharray="4 4" stroke-width="2"/><g font-family="sans-serif" font-size="17" fill="#223b3c"><text x="165" y="146">40</text><text x="165" y="126">50</text><text x="165" y="106">60</text><text x="165" y="86">70</text><text x="165" y="66">80</text><text x="165" y="42">mL</text><text x="24" y="254">Lecture au bas du ménisque : 60 mL</text></g></svg><figcaption>Schéma de lecture pour l’eau : les yeux sont à la hauteur du bas du ménisque. Ici, un intervalle vaut 10 mL.</figcaption></figure>
 <p>Sur une autre éprouvette, si 40 mL et 60 mL sont séparés par <b>quatre intervalles égaux</b>, chaque intervalle vaut (60 − 40) ÷ 4 = <b>5 mL</b>. On compte les espaces entre les traits, pas le nombre de traits.</p>
 <h2>5. Mesurer le volume d’un solide irrégulier</h2>
 <p>On peut utiliser le déplacement d’eau si le solide <b>ne se dissout pas</b>, est <b>complètement immergé</b> et ne retient pas de bulles d’air. On relève le volume initial, puis le volume après immersion, sans perte d’eau.</p>
 <div class="lesson-formula">Avant : 40 mL · Après : 55 mL<br>Volume du solide : 55 − 40 = 15 mL<br>Soit 15 cm³</div>
 <p>55 mL est la lecture totale après immersion. Le volume du solide correspond à <b>l’augmentation</b> du volume lu : 15 mL.</p>
 <aside class="lesson-callout"><b>Ta méthode :</b> identifier la grandeur → choisir l’instrument → vérifier l’unité et les graduations → lire correctement → calculer si nécessaire → écrire le résultat avec son unité.</aside>
 <details class="lesson-sources"><summary>Références du programme</summary><p>Physique-chimie, cycle 4 : mesures de masse et de volume dans le thème « Organisation et transformations de la matière ». Cette fiche est une introduction de 5e ; l’organisation de la progression sur le cycle peut varier. La masse volumique et sa relation de calcul ne sont pas traitées ici.</p><p><a href="https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm" target="_blank" rel="noopener">Programme du cycle 4, BO du 30 juillet 2020</a> · <a href="https://eduscol.education.gouv.fr/5739/ressources-d-accompagnement-du-programme-de-physique-chimie-au-cycle-4" target="_blank" rel="noopener">Programme en vigueur et accompagnement Éduscol</a> · <a href="https://eduscol.education.gouv.fr/sites/default/files/document/ra16c4phchmatiereprogression680433pdf-78105.pdf" target="_blank" rel="noopener">Exemple de progression sur la matière (PDF)</a></p><small>Références vérifiées le 3 novembre 2026. Programme de 2020 applicable en 2026-2027. Exemples, schéma et exercices originaux.</small></details>`,
    questions: [
      {
        text: "Quel instrument permet de mesurer la masse d’un liquide ?",
        options: [
          "Une éprouvette seule, en mL.",
          "Une balance, avec un récipient et une tare.",
          "Une règle, en cm.",
        ],
        correct: 1,
        explanation:
          "La balance mesure la masse. On place le récipient vide, puis on effectue la tare avant d’ajouter le liquide : l’affichage donne alors la masse du liquide seul. L’éprouvette mesure un volume.",
      },
      {
        text: "À quel volume correspondent 250 mL ?",
        options: ["0,250 L", "250 L", "2,50 L"],
        correct: 0,
        explanation:
          "Un litre contient 1 000 millilitres. Pour passer des mL aux L, on divise par 1 000 : 250 ÷ 1 000 = 0,250 L. La grandeur reste un volume, seule son unité change.",
      },
      {
        text: "Un récipient vide a une masse de 40 g. Rempli de liquide, il a une masse de 164 g. Quelle est la masse du liquide seul ?",
        options: ["204 g", "164 g", "124 g"],
        correct: 2,
        explanation:
          "La masse totale comprend le récipient et le liquide. On enlève la masse du récipient : 164 − 40 = 124 g. Additionner les deux masses compterait le récipient une seconde fois.",
      },
      {
        text: "Deux graduations de 40 mL et 60 mL sont séparées par quatre intervalles égaux. Combien vaut un intervalle ?",
        options: ["4 mL", "5 mL", "20 mL"],
        correct: 1,
        explanation:
          "L’écart entre les valeurs est de 60 − 40 = 20 mL. Il est partagé en quatre intervalles : 20 ÷ 4 = 5 mL par intervalle. On compte les espaces entre les traits.",
      },
      {
        text: "Une éprouvette contient 35 mL d’eau. Après immersion complète d’un solide insoluble, sans bulles ni perte d’eau, elle indique 50 mL. Quel est le volume du solide ?",
        options: ["15 cm³", "50 cm³", "85 cm³"],
        correct: 0,
        explanation:
          "Le volume du solide est la différence des deux lectures : 50 − 35 = 15 mL. Comme 1 mL = 1 cm³, cela correspond à 15 cm³. La lecture finale inclut aussi l’eau déjà présente.",
      },
      {
        text: "Deux liquides différents occupent chacun 100 mL. Peut-on affirmer qu’ils ont forcément la même masse ?",
        options: [
          "Oui, un même volume impose toujours une même masse.",
          "Oui, 100 mL signifie toujours 100 g.",
          "Non, la masse dépend aussi de la nature du liquide.",
        ],
        correct: 2,
        explanation:
          "Un même volume de deux liquides différents peut avoir des masses différentes. Le repère d’environ 1 g pour 1 mL concerne l’eau liquide à température usuelle ; ce n’est pas une conversion valable pour toute matière.",
      },
    ],
  });
  window.COLLEGE_COURSES.push({"id":"nutrition-vegetaux","grade":"5e","subject":"sciences","subjectName":"Sciences","domain":"SVT · Le vivant et son évolution","icon":"🌿","title":"Nutrition des végétaux : de la racine à la feuille","heading":"Comment une plante se nourrit-elle ?<br><span>De la racine à la feuille.</span>","description":"Comprendre ce que les racines prélèvent, comment les feuilles fabriquent de la matière et comment celle-ci circule dans la plante.","objectives":"Relier les besoins d’une plante chlorophyllienne, la production de matière organique dans les feuilles et le transport vers les autres organes.","body":"<p><b>SVT · 5e · Cycle 4</b> — Une première approche de la nutrition des plantes chlorophylliennes. Dans le cycle 4, les notions sont approfondies progressivement ; leur ordre peut varier selon la progression de la classe.</p>\n<h2>1. Les racines prélèvent de l’eau et des sels minéraux</h2>\n<p>Les racines absorbent l’<b>eau</b> et les <b>sels minéraux</b> dissous dans l’eau du sol. Les très fins prolongements des racines, appelés <b>poils absorbants</b>, augmentent la surface de contact avec le sol.</p>\n<p>Ce mélange d’eau et de sels minéraux circule dans des vaisseaux conducteurs sous forme de <b>sève brute</b>. Il monte des racines vers les feuilles, en passant par la tige.</p>\n<div class=\"lesson-formula\">Eau + sels minéraux<br><span aria-hidden=\"true\">↓</span><br>Racines → tige → feuilles<br><b>Sève brute</b></div>\n<h2>2. Les feuilles reçoivent aussi de la matière de l’air</h2>\n<p>Les feuilles échangent des gaz avec l’air, notamment par de petites ouvertures appelées <b>stomates</b>. Pour la photosynthèse, elles prélèvent du <b>dioxyde de carbone (CO₂)</b>. Les parties vertes contiennent de la <b>chlorophylle</b>, un pigment qui capte l’énergie lumineuse.</p>\n<aside class=\"lesson-callout\">La lumière apporte de l’énergie : ce n’est pas une matière que la plante absorbe. Le dioxyde de carbone, lui, est une matière présente dans l’air.</aside>\n<h2>3. La photosynthèse fabrique de la matière organique</h2>\n<p>Dans les organes verts éclairés, la plante utilise l’énergie lumineuse pour fabriquer de la <b>matière organique</b> à partir d’eau et de dioxyde de carbone. Cette fabrication s’appelle la <b>photosynthèse</b>. Elle s’accompagne d’un rejet de <b>dioxygène (O₂)</b> dans l’air.</p>\n<div class=\"lesson-formula\">Eau + dioxyde de carbone<br><span aria-hidden=\"true\">— énergie lumineuse →</span><br>Matière organique + dioxygène</div>\n<p>La matière organique, notamment des sucres, permet à la plante de construire ses organes et de fonctionner. Une partie peut être transformée et stockée sous forme de réserves, par exemple dans un tubercule ou une graine. Les sels minéraux sont également indispensables, mais ils ne remplacent ni l’eau ni le dioxyde de carbone dans cette fabrication.</p>\n<h2>4. La matière fabriquée est distribuée dans la plante</h2>\n<p>La matière organique produite dans les feuilles peut être transportée vers les organes qui grandissent ou qui stockent des réserves. Elle circule, dissoute dans l’eau, dans la <b>sève élaborée</b>, par d’autres vaisseaux conducteurs. Elle peut aller vers les racines, les fruits, les bourgeons ou les organes de réserve : le trajet dépend des besoins de la plante.</p>\n<figure class=\"plant-figure\"><svg viewBox=\"0 0 360 260\" role=\"img\" aria-labelledby=\"plant-title plant-desc\" xmlns=\"http://www.w3.org/2000/svg\">\n<title id=\"plant-title\">Les prélèvements et les transports dans une plante</title>\n<desc id=\"plant-desc\">Une plante avec des racines, une tige et des feuilles. L’eau et les sels minéraux montent des racines vers les feuilles dans la sève brute. Les feuilles utilisent le dioxyde de carbone et l’énergie lumineuse pour fabriquer de la matière organique et libèrent du dioxygène. La sève élaborée transporte cette matière vers les autres organes.</desc>\n<defs>\n<marker id=\"plant-arrow-green\" markerWidth=\"7\" markerHeight=\"7\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6 Z\" fill=\"#315e60\"/></marker>\n<marker id=\"plant-arrow-rust\" markerWidth=\"7\" markerHeight=\"7\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0 0 L6 3 L0 6 Z\" fill=\"#ac633f\"/></marker>\n</defs>\n<circle cx=\"42\" cy=\"35\" r=\"15\" fill=\"#f4d78e\" stroke=\"#ac633f\" stroke-width=\"2\"/>\n<g stroke=\"#ac633f\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M42 10 V3 M42 67 V60 M17 35 H9 M75 35 H67 M24 17 L18 11 M60 53 L66 59 M60 17 L66 11 M24 53 L18 59\"/></g>\n<path d=\"M180 197 V83\" stroke=\"#547b53\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n<path d=\"M180 112 C143 65 112 69 115 93 C119 116 153 126 180 112Z\" fill=\"#91b58b\" stroke=\"#315e60\" stroke-width=\"2\"/>\n<path d=\"M180 100 C206 52 243 57 240 82 C236 105 205 116 180 100Z\" fill=\"#91b58b\" stroke=\"#315e60\" stroke-width=\"2\"/>\n<path d=\"M180 198 C158 211 149 227 140 244 M180 198 C199 214 211 228 222 244 M180 199 C175 220 175 237 173 250 M163 214 L151 218 M203 217 L216 213\" fill=\"none\" stroke=\"#8b7257\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M0 199 H360\" stroke=\"#b8a88d\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<path d=\"M168 190 V123\" stroke=\"#315e60\" stroke-width=\"2.5\" marker-end=\"url(#plant-arrow-green)\"/>\n<path d=\"M192 122 V190\" stroke=\"#ac633f\" stroke-width=\"2.5\" marker-end=\"url(#plant-arrow-rust)\"/>\n<path d=\"M64 94 C84 88 97 88 116 92\" stroke=\"#315e60\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#plant-arrow-green)\"/>\n<path d=\"M242 83 C269 72 286 72 310 75\" stroke=\"#ac633f\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#plant-arrow-rust)\"/>\n<path d=\"M54 48 L119 77\" stroke=\"#ac633f\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#plant-arrow-rust)\"/>\n<g font-family=\"sans-serif\" font-size=\"11\" fill=\"#223b3c\">\n<text x=\"8\" y=\"84\">CO₂</text><text x=\"308\" y=\"64\">O₂</text><text x=\"7\" y=\"14\">Lumière</text>\n<text x=\"8\" y=\"151\">Sève brute</text><text x=\"8\" y=\"165\">(vers les feuilles)</text>\n<text x=\"225\" y=\"157\">Sève élaborée</text><text x=\"225\" y=\"171\">(vers les organes)</text>\n<text x=\"12\" y=\"218\">Sol</text><text x=\"145\" y=\"257\">Racines</text>\n</g>\n</svg><figcaption>Schéma simplifié : les flèches montrent les principaux échanges et transports. La sève élaborée rejoint les organes qui utilisent ou stockent la matière organique.</figcaption></figure>\n<h2>5. Attention : la plante respire aussi</h2>\n<p>Comme les autres êtres vivants, une plante respire : ses cellules utilisent du dioxygène et rejettent du dioxyde de carbone. La respiration a lieu <b>jour et nuit</b>. Elle est différente de la photosynthèse, qui nécessite de la lumière. Une plante ne réalise donc pas la photosynthèse dans l’obscurité, mais elle continue à respirer.</p>\n<aside class=\"lesson-callout\"><b>À retenir :</b> les racines prélèvent de l’eau et des sels minéraux ; les feuilles utilisent aussi le CO₂ de l’air et l’énergie lumineuse pour fabriquer de la matière organique ; les sèves assurent le transport dans la plante.</aside>\n<details class=\"lesson-sources\"><summary>Références du programme</summary><p>SVT, cycle 4, thème « Le vivant et son évolution » : relier les besoins des cellules d’une plante chlorophyllienne, les lieux de production ou de prélèvement de matière et de stockage, ainsi que les systèmes de transport dans la plante. Cette fiche propose une introduction en 5e ; elle ne couvre pas tout le thème et ne fixe pas une progression nationale annuelle.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel du cycle 4, BO n° 31 du 30 juillet 2020</a> · <a href=\"https://eduscol.education.gouv.fr/5742/ressources-d-accompagnement-du-programme-de-sciences-de-la-vie-et-de-la-terre-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources d’accompagnement Éduscol en SVT</a></p><small>Références vérifiées le 8 novembre 2026. Exemples et schéma originaux.</small></details>","questions":[{"text":"Que prélèvent principalement les racines dans le sol pour la nutrition de la plante ?","options":["De l’eau et des sels minéraux dissous","Du dioxygène et du sucre","De la lumière et du dioxyde de carbone"],"correct":0,"explanation":"Les racines absorbent l’eau et les sels minéraux dissous dans l’eau du sol. La lumière est une énergie captée par les parties vertes ; le dioxyde de carbone est prélevé dans l’air par les organes qui réalisent la photosynthèse."},{"text":"Quels éléments sont utilisés par une feuille verte éclairée pour réaliser la photosynthèse ?","options":["De l’eau, du dioxyde de carbone et de l’énergie lumineuse","Du dioxygène, du sucre et de la lumière","Uniquement des sels minéraux et du dioxygène"],"correct":0,"explanation":"La photosynthèse utilise de l’eau et du dioxyde de carbone grâce à l’énergie lumineuse. La lumière fournit l’énergie nécessaire : ce n’est pas une matière."},{"text":"Lorsqu’une feuille verte réalise la photosynthèse à la lumière, quel échange de gaz est associé à cette activité ?","options":["Elle prélève du CO₂ et libère du dioxygène (O₂)","Elle prélève du dioxygène et libère du CO₂ uniquement","Elle ne réalise aucun échange avec l’air"],"correct":0,"explanation":"La photosynthèse consomme du dioxyde de carbone et s’accompagne d’un rejet de dioxygène. Attention : la respiration de la plante a lieu elle aussi, y compris à la lumière."},{"text":"Que transporte la sève brute et dans quel sens circule-t-elle principalement ?","options":["De la matière organique des feuilles vers les racines","De l’eau et des sels minéraux des racines vers les feuilles","Du dioxygène des feuilles vers les racines"],"correct":1,"explanation":"La sève brute est constituée d’eau et de sels minéraux prélevés par les racines. Elle monte dans les vaisseaux conducteurs vers les parties aériennes, notamment les feuilles."},{"text":"Quel est le rôle principal de la sève élaborée ?","options":["Transporter la matière organique produite par les feuilles vers les organes qui en ont besoin ou la stockent","Faire monter uniquement l’eau du sol","Transporter la lumière jusqu’aux racines"],"correct":0,"explanation":"La sève élaborée transporte des substances organiques dissoutes, notamment des sucres, depuis les organes producteurs vers les organes consommateurs ou de réserve. Le trajet dépend des besoins de la plante."},{"text":"Quelle phrase décrit correctement la respiration d’une plante ?","options":["Elle respire seulement la nuit.","Elle respire jour et nuit : ses cellules utilisent du dioxygène et rejettent du dioxyde de carbone.","Elle ne respire pas lorsqu’elle réalise la photosynthèse."],"correct":1,"explanation":"La respiration cellulaire a lieu en permanence, de jour comme de nuit. Elle est distincte de la photosynthèse, qui nécessite de la lumière ; les deux phénomènes peuvent se dérouler en même temps dans les organes verts éclairés."}]});

  // Révisions de mathématiques de 6e — Plan de travail 1.
  window.COLLEGE_COURSES.push({
    "id": "tables-multiplication",
    "grade": "6e",
    "subject": "mathematiques",
    "subjectName": "Mathématiques",
    "domain": "Nombres et calculs",
    "icon": "×",
    "title": "Tables de multiplication : mémoriser et retrouver",
    "heading": "Tables de multiplication : mémoriser et retrouver<br><span>Comprendre et s’entraîner.</span>",
    "description": "Mémoriser les tables et retrouver un produit ou un facteur manquant, dans les deux sens.",
    "objectives": "Connaître les produits des tables de 2 à 10 et utiliser la multiplication à trous.",
    "body": "<h2>1. Un produit, deux facteurs</h2><p>Dans <b>6 × 7 = 42</b>, 6 et 7 sont les facteurs ; 42 est le produit. Il faut savoir retrouver le résultat, mais aussi un facteur manquant.</p><div class=\"lesson-formula\">6 × 7 = 42<br>42 = 7 × 6<br>42 ÷ 7 = 6</div><h2>2. S’entraîner dans les deux sens</h2><p>Une table peut être interrogée à l’endroit (8 × 4 = ?) ou à l’envers (quel nombre multiplié par 8 donne 56 ?). La commutativité permet de retourner les facteurs : 4 × 8 = 8 × 4.</p><aside class=\"lesson-callout\">Astuce : si tu connais 5 × 7 = 35, alors 6 × 7 = 35 + 7 = 42. Vérifie aussi les divisions correspondantes.</aside><details class=\"lesson-sources\"><summary>Repères du programme</summary><p>Fiche de révision construite à partir des notions du plan de travail fourni. Le programme officiel de mathématiques du cycle 3, publié au Bulletin officiel du 17 avril 2025, s’applique en 6e depuis la rentrée 2025.</p><p><a href=\"https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A\" target=\"_blank\" rel=\"noopener\">Programme officiel – BO du 17 avril 2025</a> · <a href=\"https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>",
    "questions": [
      {
        "text": "Combien font 7 × 8 ?",
        "options": [
          "54",
          "56",
          "64"
        ],
        "correct": 1,
        "explanation": "7 × 8 = 56. C’est un produit à connaître par cœur dans la table de 7."
      },
      {
        "text": "Quel nombre manque ? 9 × … = 63",
        "options": [
          "6",
          "7",
          "8"
        ],
        "correct": 1,
        "explanation": "63 ÷ 9 = 7, donc le facteur manquant est 7 et 9 × 7 redonne bien 63."
      },
      {
        "text": "Combien font 6 × 9 ?",
        "options": [
          "45",
          "54",
          "56"
        ],
        "correct": 1,
        "explanation": "6 × 9 = 54. On peut calculer 6 × 10 − 6."
      },
      {
        "text": "Complète : 72 ÷ 8 = …",
        "options": [
          "8",
          "9",
          "10"
        ],
        "correct": 1,
        "explanation": "Comme 8 × 9 = 72, alors 72 ÷ 8 = 9."
      },
      {
        "text": "Quelle égalité est correcte ?",
        "options": [
          "7 × 6 = 48",
          "6 × 8 = 42",
          "9 × 5 = 45"
        ],
        "correct": 2,
        "explanation": "9 × 5 = 45. Les deux autres produits valent 42 et 48."
      },
      {
        "text": "Quel facteur manque ? … × 4 = 36",
        "options": [
          "8",
          "9",
          "10"
        ],
        "correct": 1,
        "explanation": "36 ÷ 4 = 9 : le facteur manquant est 9."
      },
      {
        "text": "Combien font 8 × 8 ?",
        "options": [
          "56",
          "64",
          "72"
        ],
        "correct": 1,
        "explanation": "8 × 8 = 64. Huit groupes de huit unités forment soixante-quatre unités."
      }
    ]
  });
  window.COLLEGE_COURSES.push({
    "id": "numeration-entiers-decimaux",
    "grade": "6e",
    "subject": "mathematiques",
    "subjectName": "Mathématiques",
    "domain": "Nombres et calculs",
    "icon": "123",
    "title": "Nombres entiers et décimaux : lire, écrire, décomposer",
    "heading": "Nombres entiers et décimaux : lire, écrire, décomposer<br><span>Comprendre et s’entraîner.</span>",
    "description": "Comprendre la position des chiffres, lire les grands nombres et passer entre plusieurs écritures.",
    "objectives": "Identifier chiffre et nombre de, écrire en chiffres et en lettres, décomposer et recomposer entiers et décimaux.",
    "body": "<h2>1. La position donne la valeur</h2><p>Dans <b>4 582,307</b>, le 5 est le chiffre des centaines et représente 500 ; le 3 est le chiffre des dixièmes et représente 0,3.</p><div class=\"course-table-wrap\"><table class=\"course-table\"><caption>Valeur des chiffres dans 4 582,307</caption><tbody><tr><th>Milliers</th><th>Centaines</th><th>Dizaines</th><th>Unités</th><th>Dixièmes</th><th>Centièmes</th><th>Millièmes</th></tr><tr><td>4</td><td>5</td><td>8</td><td>2</td><td>3</td><td>0</td><td>7</td></tr></tbody></table></div><p>Le <b>chiffre</b> des dizaines est 8 ; le <b>nombre de dizaines</b> est 458 : il y a 458 dizaines complètes dans 4 582,307.</p><h2>2. Décomposer un nombre</h2><div class=\"lesson-formula\">4 582,307 = 4 000 + 500 + 80 + 2 + 0,3 + 0,007</div><p>On peut aussi écrire 4 582 + 307/1 000. Ces écritures désignent le même nombre.</p><h2>3. Lire et écrire les grands nombres</h2><p>On regroupe les chiffres par paquets de trois en partant de la droite : millions, milliers, unités. Exemple : <b>2 045 018</b> se lit « deux millions quarante-cinq mille dix-huit ».</p><p><b>Mille</b> est invariable. <b>Million</b> est un nom : il prend un s au pluriel. Dans « quatre-vingts », vingt prend un s lorsqu’il termine le nombre ; il le perd s’il est suivi d’un autre nombre (« quatre-vingt-deux »).</p><h2>4. Les zéros utiles et inutiles</h2><p>Dans 5,40, le zéro final ne change pas la valeur : 5,40 = 5,4. En revanche, dans 5,04, le zéro marque l’absence de dixièmes : 5,04 n’est pas 5,4.</p><aside class=\"lesson-callout\">« Chiffre de » désigne un chiffre à une position donnée. « Nombre de » compte des unités complètes : 4 582 contient 45 centaines.</aside><details class=\"lesson-sources\"><summary>Repères du programme</summary><p>Fiche de révision construite à partir des notions du plan de travail fourni. Le programme officiel de mathématiques du cycle 3, publié au Bulletin officiel du 17 avril 2025, s’applique en 6e depuis la rentrée 2025.</p><p><a href=\"https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A\" target=\"_blank\" rel=\"noopener\">Programme officiel – BO du 17 avril 2025</a> · <a href=\"https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>",
    "questions": [
      {
        "text": "Dans 7 352, quel est le chiffre des centaines ?",
        "options": [
          "7",
          "3",
          "5"
        ],
        "correct": 1,
        "explanation": "De droite à gauche : 2 unités, 5 dizaines, 3 centaines, 7 milliers."
      },
      {
        "text": "Dans 7 352, quel est le nombre de centaines ?",
        "options": [
          "3",
          "35",
          "73"
        ],
        "correct": 2,
        "explanation": "7 352 contient 73 centaines complètes (73 × 100 = 7 300)."
      },
      {
        "text": "Dans 8,406, quel chiffre occupe le rang des centièmes ?",
        "options": [
          "4",
          "0",
          "6"
        ],
        "correct": 1,
        "explanation": "Après la virgule : 4 dixièmes, 0 centième, 6 millièmes."
      },
      {
        "text": "Quelle décomposition correspond à 3 205,08 ?",
        "options": [
          "3 000 + 200 + 5 + 0,8",
          "3 000 + 200 + 5 + 0,08",
          "300 + 20 + 5 + 0,08"
        ],
        "correct": 1,
        "explanation": "3 205,08 = 3 000 + 200 + 5 + 8 centièmes."
      },
      {
        "text": "Comment s’écrit « deux millions quarante-cinq mille dix-huit » ?",
        "options": [
          "2 045 018",
          "2 450 018",
          "2 045 180"
        ],
        "correct": 0,
        "explanation": "2 000 000 + 45 000 + 18 = 2 045 018."
      },
      {
        "text": "Quelle écriture est égale à 6,5 ?",
        "options": [
          "6,05",
          "6,50",
          "6,005"
        ],
        "correct": 1,
        "explanation": "Le zéro placé à droite de la partie décimale ne change pas la valeur."
      },
      {
        "text": "Combien de dixièmes contient 12,7 ?",
        "options": [
          "7",
          "12",
          "127"
        ],
        "correct": 2,
        "explanation": "12 unités valent 120 dixièmes, auxquels s’ajoutent 7 dixièmes : 127."
      }
    ]
  });
  window.COLLEGE_COURSES.push({
    "id": "multiplier-diviser-puissances-dix",
    "grade": "6e",
    "subject": "mathematiques",
    "subjectName": "Mathématiques",
    "domain": "Nombres et calculs",
    "icon": "×10",
    "title": "Multiplier et diviser par 10, 100 et 1 000",
    "heading": "Multiplier et diviser par 10, 100 et 1 000<br><span>Comprendre et s’entraîner.</span>",
    "description": "Déplacer la virgule en comprenant le changement de valeur des chiffres.",
    "objectives": "Multiplier et diviser un décimal par une puissance de 10 et retrouver le facteur manquant.",
    "body": "<h2>1. Multiplier par 10, 100 ou 1 000</h2><p>Multiplier par 10 rend chaque chiffre dix fois plus important : les chiffres se décalent d’un rang vers la gauche dans le tableau de numération.</p><div class=\"lesson-formula\">4,26 × 10 = 42,6<br>4,26 × 100 = 426<br>4,26 × 1 000 = 4 260</div><h2>2. Diviser par 10, 100 ou 1 000</h2><p>Diviser par 10, c’est partager en dix parts égales. Les chiffres se décalent d’un rang vers la droite.</p><div class=\"lesson-formula\">426 ÷ 10 = 42,6<br>426 ÷ 100 = 4,26<br>426 ÷ 1 000 = 0,426</div><h2>3. Trouver l’opération manquante</h2><p>Pour passer de 1,87 à 18 700, on multiplie par 10 000 : quatre décalages vers la gauche.</p><aside class=\"lesson-callout\">On ne déplace pas réellement la virgule : c’est la valeur de position des chiffres qui change. On ajoute des zéros si nécessaire.</aside><details class=\"lesson-sources\"><summary>Repères du programme</summary><p>Fiche de révision construite à partir des notions du plan de travail fourni. Le programme officiel de mathématiques du cycle 3, publié au Bulletin officiel du 17 avril 2025, s’applique en 6e depuis la rentrée 2025.</p><p><a href=\"https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A\" target=\"_blank\" rel=\"noopener\">Programme officiel – BO du 17 avril 2025</a> · <a href=\"https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>",
    "questions": [
      {
        "text": "Calcule 3,47 × 10.",
        "options": [
          "0,347",
          "34,7",
          "347"
        ],
        "correct": 1,
        "explanation": "Multiplier par 10 décale les chiffres d’un rang vers la gauche."
      },
      {
        "text": "Calcule 8,2 × 100.",
        "options": [
          "82",
          "820",
          "0,082"
        ],
        "correct": 1,
        "explanation": "Deux rangs vers la gauche : 8,2 × 100 = 820."
      },
      {
        "text": "Calcule 625 ÷ 10.",
        "options": [
          "62,5",
          "6,25",
          "6 250"
        ],
        "correct": 0,
        "explanation": "Diviser par 10 décale les chiffres d’un rang vers la droite."
      },
      {
        "text": "Calcule 4,8 ÷ 1 000.",
        "options": [
          "0,48",
          "0,048",
          "0,0048"
        ],
        "correct": 2,
        "explanation": "Trois rangs vers la droite : 4,8 devient 0,0048."
      },
      {
        "text": "Complète : 1,87 × … = 18 700.",
        "options": [
          "100",
          "1 000",
          "10 000"
        ],
        "correct": 2,
        "explanation": "Il faut multiplier par 10 000 : quatre rangs de décalage."
      },
      {
        "text": "Complète : 54,3 ÷ … = 0,543.",
        "options": [
          "10",
          "100",
          "1 000"
        ],
        "correct": 1,
        "explanation": "54,3 ÷ 100 = 0,543 : deux rangs vers la droite."
      },
      {
        "text": "Quelle égalité est correcte ?",
        "options": [
          "0,56 × 100 = 5,6",
          "0,56 × 1 000 = 560",
          "56 ÷ 100 = 0,56"
        ],
        "correct": 1,
        "explanation": "0,56 × 1 000 = 560. La première vaut 56 et la troisième 0,56."
      }
    ]
  });
  window.COLLEGE_COURSES.push({
    "id": "vocabulaire-operations-addition",
    "grade": "6e",
    "subject": "mathematiques",
    "subjectName": "Mathématiques",
    "domain": "Nombres et calculs",
    "icon": "∑",
    "title": "Vocabulaire des opérations et addition posée",
    "heading": "Vocabulaire des opérations et addition posée<br><span>Comprendre et s’entraîner.</span>",
    "description": "Identifier les termes d’une opération et poser correctement une addition entière ou décimale.",
    "objectives": "Connaître somme, termes, différence, produit et quotient ; effectuer une addition en alignant les rangs.",
    "body": "<h2>1. Le vocabulaire des quatre opérations</h2><div class=\"course-table-wrap\"><table class=\"course-table\"><tbody><tr><th>Opération</th><th>Vocabulaire</th><th>Exemple</th></tr><tr><td>Addition</td><td>termes, somme</td><td>12 + 5 = 17</td></tr><tr><td>Soustraction</td><td>termes, différence</td><td>12 − 5 = 7</td></tr><tr><td>Multiplication</td><td>facteurs, produit</td><td>12 × 5 = 60</td></tr><tr><td>Division</td><td>dividende, diviseur, quotient</td><td>12 ÷ 3 = 4</td></tr></tbody></table></div><h2>2. Poser une addition</h2><p>On aligne les unités sous les unités, les dizaines sous les dizaines, et surtout les virgules sous les virgules. On complète éventuellement avec des zéros à droite.</p><div class=\"lesson-formula\">  24,70<br>+  8,35<br>──────<br>  33,05</div><p>On additionne de droite à gauche, en effectuant les retenues si nécessaire. Le résultat d’une addition s’appelle la <b>somme</b>.</p><aside class=\"lesson-callout\">Vérifie l’ordre de grandeur : 24,70 + 8,35 doit être un peu supérieur à 24 + 8, soit 32.</aside><details class=\"lesson-sources\"><summary>Repères du programme</summary><p>Fiche de révision construite à partir des notions du plan de travail fourni. Le programme officiel de mathématiques du cycle 3, publié au Bulletin officiel du 17 avril 2025, s’applique en 6e depuis la rentrée 2025.</p><p><a href=\"https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A\" target=\"_blank\" rel=\"noopener\">Programme officiel – BO du 17 avril 2025</a> · <a href=\"https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>",
    "questions": [
      {
        "text": "Dans 14 + 9 = 23, comment appelle-t-on 14 et 9 ?",
        "options": [
          "Les facteurs",
          "Les termes",
          "Le quotient"
        ],
        "correct": 1,
        "explanation": "Dans une addition, les nombres additionnés sont les termes ; leur résultat est la somme."
      },
      {
        "text": "Comment appelle-t-on le résultat d’une multiplication ?",
        "options": [
          "La somme",
          "La différence",
          "Le produit"
        ],
        "correct": 2,
        "explanation": "Le résultat d’une multiplication est un produit. Les nombres multipliés sont les facteurs."
      },
      {
        "text": "Quel est le résultat de 36 − 18 ?",
        "options": [
          "54",
          "18",
          "2"
        ],
        "correct": 1,
        "explanation": "36 − 18 = 18. Le résultat d’une soustraction est une différence."
      },
      {
        "text": "Dans 48 ÷ 6 = 8, quel est le diviseur ?",
        "options": [
          "48",
          "6",
          "8"
        ],
        "correct": 1,
        "explanation": "48 est le dividende, 6 le diviseur et 8 le quotient."
      },
      {
        "text": "Calcule 27,6 + 4,85.",
        "options": [
          "31,85",
          "32,45",
          "76,1"
        ],
        "correct": 1,
        "explanation": "On aligne les virgules : 27,60 + 4,85 = 32,45."
      },
      {
        "text": "Calcule 308 + 95.",
        "options": [
          "393",
          "403",
          "413"
        ],
        "correct": 1,
        "explanation": "308 + 95 = 308 + 90 + 5 = 398 + 5 = 403. La somme est 403."
      },
      {
        "text": "Comment poser 12,5 + 3,72 ?",
        "options": [
          "Virgules alignées",
          "Chiffres de droite alignés sans regarder les virgules",
          "12,5 sous les centièmes"
        ],
        "correct": 0,
        "explanation": "On écrit 12,50 + 3,72 : les virgules et les rangs de même valeur sont alignés."
      }
    ]
  });
  window.COLLEGE_COURSES.push({
    "id": "conversions-grandeurs",
    "grade": "6e",
    "subject": "mathematiques",
    "subjectName": "Mathématiques",
    "domain": "Grandeurs et mesures",
    "icon": "m·g·L",
    "title": "Conversions de longueurs, masses et contenances",
    "heading": "Conversions de longueurs, masses et contenances<br><span>Comprendre et s’entraîner.</span>",
    "description": "Utiliser le tableau des unités pour convertir sans confondre les grandeurs.",
    "objectives": "Connaître les préfixes de kilo à milli et convertir des longueurs, masses et contenances, y compris tonne et quintal.",
    "body": "<h2>1. Le tableau des préfixes</h2><p>Kilo = 1 000 fois, hecto = 100 fois, déca = 10 fois, déci = un dixième, centi = un centième, milli = un millième.</p><div class=\"course-table-wrap\"><table class=\"course-table\"><caption>Préfixes, de kilo à milli</caption><tbody><tr><th>kilo</th><th>hecto</th><th>déca</th><th>unité</th><th>déci</th><th>centi</th><th>milli</th></tr><tr><td>× 1 000</td><td>× 100</td><td>× 10</td><td>× 1</td><td>÷ 10</td><td>÷ 100</td><td>÷ 1 000</td></tr></tbody></table></div><h2>2. Longueurs, masses et contenances</h2><p>Les unités de référence sont le mètre (m), le gramme (g) et le litre (L).</p><div class=\"lesson-formula\">1 km = 1 000 m<br>1 kg = 1 000 g<br>1 kL = 1 000 L</div><p>À chaque déplacement d’une colonne vers la droite, on multiplie par 10 ; vers la gauche, on divise par 10. On conserve toujours la même grandeur.</p><h2>3. Tonne et quintal</h2><p><b>1 tonne (t) = 1 000 kg</b> et <b>1 quintal (q) = 100 kg</b>. Donc 1 t = 10 q.</p><aside class=\"lesson-callout\">Pour convertir des mètres en centimètres, on multiplie par 100 ; pour convertir des grammes en kilogrammes, on divise par 1 000.</aside><details class=\"lesson-sources\"><summary>Repères du programme</summary><p>Fiche de révision construite à partir des notions du plan de travail fourni. Le programme officiel de mathématiques du cycle 3, publié au Bulletin officiel du 17 avril 2025, s’applique en 6e depuis la rentrée 2025.</p><p><a href=\"https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A\" target=\"_blank\" rel=\"noopener\">Programme officiel – BO du 17 avril 2025</a> · <a href=\"https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>",
    "questions": [
      {
        "text": "Combien de centimètres y a-t-il dans 2,5 m ?",
        "options": [
          "25 cm",
          "250 cm",
          "2 500 cm"
        ],
        "correct": 1,
        "explanation": "1 m = 100 cm, donc 2,5 × 100 = 250 cm."
      },
      {
        "text": "Convertis 3 400 m en kilomètres.",
        "options": [
          "34 km",
          "3,4 km",
          "0,34 km"
        ],
        "correct": 1,
        "explanation": "1 km = 1 000 m. 3 400 ÷ 1 000 = 3,4 km."
      },
      {
        "text": "Convertis 750 g en kilogrammes.",
        "options": [
          "7,5 kg",
          "0,75 kg",
          "75 kg"
        ],
        "correct": 1,
        "explanation": "1 kg = 1 000 g. 750 ÷ 1 000 = 0,75 kg."
      },
      {
        "text": "Combien de grammes représentent 2,4 kg ?",
        "options": [
          "240 g",
          "2 400 g",
          "24 000 g"
        ],
        "correct": 1,
        "explanation": "Pour passer des kilogrammes aux grammes, on multiplie par 1 000 : 2,4 kg = 2 400 g."
      },
      {
        "text": "Convertis 1,25 L en millilitres.",
        "options": [
          "125 mL",
          "1 250 mL",
          "12 500 mL"
        ],
        "correct": 1,
        "explanation": "1 L = 1 000 mL, donc 1,25 L = 1 250 mL."
      },
      {
        "text": "Combien de litres représentent 35 cL ?",
        "options": [
          "3,5 L",
          "0,35 L",
          "35 000 L"
        ],
        "correct": 1,
        "explanation": "1 L = 100 cL, donc 35 cL = 0,35 L."
      },
      {
        "text": "Une cargaison pèse 2 tonnes. Quelle est sa masse en kilogrammes ?",
        "options": [
          "200 kg",
          "2 000 kg",
          "20 000 kg"
        ],
        "correct": 1,
        "explanation": "Une tonne vaut 1 000 kg : 2 t = 2 000 kg."
      },
      {
        "text": "Combien de kilogrammes représentent 7 quintaux ?",
        "options": [
          "70 kg",
          "700 kg",
          "7 000 kg"
        ],
        "correct": 1,
        "explanation": "Un quintal vaut 100 kg : 7 × 100 = 700 kg."
      }
    ]
  });
  window.COLLEGE_COURSES.push({
    "id": "notations-geometrie-paralleles-perpendiculaires",
    "grade": "6e",
    "subject": "mathematiques",
    "subjectName": "Mathématiques",
    "domain": "Espace et géométrie",
    "icon": "∥ ⟂",
    "title": "Notations géométriques, parallèles et perpendiculaires",
    "heading": "Notations géométriques, parallèles et perpendiculaires<br><span>Comprendre et s’entraîner.</span>",
    "description": "Lire les notations des droites et segments, puis construire des parallèles et des perpendiculaires avec précision.",
    "objectives": "Noter droites, segments et demi-droites ; utiliser ∈ et ∉ ; distinguer longueur et segment ; construire parallèles et perpendiculaires.",
    "body": "<h2>1. Droite, segment et demi-droite</h2><ul><li><b>(AB)</b> désigne la droite passant par A et B : elle se prolonge des deux côtés.</li><li><b>[AB]</b> désigne le segment d’extrémités A et B.</li><li><b>[AB)</b> désigne la demi-droite d’origine A passant par B.</li></ul><p>On les prononce « droite AB », « segment AB » et « demi-droite AB ».</p><h2>2. Appartenance et longueur</h2><p><b>A ∈ (d)</b> signifie que A appartient à la droite (d). <b>A ∉ (d)</b> signifie que A n’y appartient pas.</p><p>Les crochets désignent un objet géométrique ; sans crochets, <b>AB</b> désigne la longueur du segment [AB]. Si [AB] mesure 4,5 cm, on écrit <b>AB = 4,5 cm</b>.</p><h2>3. Parallèles et perpendiculaires</h2><p>Deux droites parallèles distinctes ne se coupent pas. Deux droites perpendiculaires se coupent en formant un angle droit.</p><figure class=\"pythagore-figure\"><svg viewBox=\"0 0 320 150\" role=\"img\" aria-labelledby=\"geometry-diagram-title\"><title id=\"geometry-diagram-title\">Exemples de droites parallèles et perpendiculaires</title><g fill=\"none\" stroke=\"#315e60\" stroke-width=\"2.5\"><path d=\"M20 35 H140 M20 75 H140\"/><path d=\"M205 20 V125 M165 75 H290\"/></g><path d=\"M205 75 h18 v18\" fill=\"none\" stroke=\"#ac633f\" stroke-width=\"2.5\"/><g fill=\"#223b3c\" font-size=\"12\"><text x=\"25\" y=\"25\">d</text><text x=\"25\" y=\"68\">e</text><text x=\"230\" y=\"28\">f</text><text x=\"268\" y=\"68\">g</text></g></svg><figcaption>À gauche, d et e sont parallèles. À droite, f et g sont perpendiculaires ; le petit carré marque l’angle droit.</figcaption></figure><h2>4. Construire proprement</h2><p><b>Perpendiculaire :</b> place un côté de l’équerre sur la droite donnée, fais-la glisser jusqu’au point demandé, puis trace le long de l’autre côté. Ajoute le petit carré d’angle droit.</p><p><b>Parallèle :</b> place un côté de l’équerre sur la droite donnée, appuie une règle contre l’autre côté, puis fais glisser l’équerre le long de la règle jusqu’au point demandé. Trace la parallèle.</p><aside class=\"lesson-callout\">Utilise un crayon bien taillé, des traits fins et une règle stable. Prolonge les droites assez loin pour rendre la construction lisible.</aside><details class=\"lesson-sources\"><summary>Repères du programme</summary><p>Fiche de révision construite à partir des notions du plan de travail fourni. Le programme officiel de mathématiques du cycle 3, publié au Bulletin officiel du 17 avril 2025, s’applique en 6e depuis la rentrée 2025.</p><p><a href=\"https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A\" target=\"_blank\" rel=\"noopener\">Programme officiel – BO du 17 avril 2025</a> · <a href=\"https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>",
    "questions": [
      {
        "text": "Quelle notation désigne le segment dont les extrémités sont A et B ?",
        "options": [
          "(AB)",
          "[AB]",
          "[AB)"
        ],
        "correct": 1,
        "explanation": "[AB] désigne le segment limité par A et B ; (AB) la droite entière et [AB) une demi-droite."
      },
      {
        "text": "Quelle notation désigne la demi-droite d’origine A qui passe par B ?",
        "options": [
          "[AB)",
          "[BA)",
          "(AB)"
        ],
        "correct": 0,
        "explanation": "Dans [AB), le premier point A est l’origine ; la demi-droite passe par B."
      },
      {
        "text": "Que signifie A ∈ (d) ?",
        "options": [
          "A est à l’extérieur de d",
          "A appartient à d",
          "A est la longueur de d"
        ],
        "correct": 1,
        "explanation": "Le symbole ∈ signifie « appartient à » : A se trouve sur la droite (d)."
      },
      {
        "text": "[MN] mesure 6,2 cm. Quelle écriture donne sa longueur ?",
        "options": [
          "[MN] = 6,2 cm",
          "(MN) = 6,2 cm",
          "MN = 6,2 cm"
        ],
        "correct": 2,
        "explanation": "Le segment est [MN], mais sa longueur s’écrit MN, sans crochets."
      },
      {
        "text": "Deux droites qui se coupent en formant un angle droit sont…",
        "options": [
          "parallèles",
          "perpendiculaires",
          "confondues"
        ],
        "correct": 1,
        "explanation": "Des droites perpendiculaires se coupent en formant un angle droit."
      },
      {
        "text": "Quel instrument permet de vérifier un angle droit et de tracer une perpendiculaire ?",
        "options": [
          "Un compas seul",
          "Une équerre",
          "Un rapporteur seul"
        ],
        "correct": 1,
        "explanation": "L’équerre possède un angle droit."
      },
      {
        "text": "Deux droites parallèles distinctes…",
        "options": [
          "se coupent en un point",
          "ne se coupent pas",
          "forment toujours un angle droit"
        ],
        "correct": 1,
        "explanation": "Dans le plan, deux droites parallèles distinctes ne se rencontrent pas."
      },
      {
        "text": "Quel symbole indique que P n’appartient pas à la droite (d) ?",
        "options": [
          "P ∈ (d)",
          "P ∉ (d)",
          "P = (d)"
        ],
        "correct": 1,
        "explanation": "Le symbole ∉ signifie « n’appartient pas à »."
      }
    ]
  });

  window.COLLEGE_COURSES.push({
    id: "anglais-meteo-vocabulaire",
    grade: "6e",
    subject: "anglais",
    subjectName: "Anglais",
    domain: "Le quotidien · La météo · A1",
    icon: "☀",
    title: "La météo en anglais : vocabulaire et expressions",
    heading: "What's the weather like?<br><span>Parler de la météo en anglais.</span>",
    description: "Apprendre à reconnaître les phénomènes météo, décrire le temps et comprendre un petit bulletin météorologique.",
    objectives: "Mémoriser le vocabulaire essentiel de la météo, distinguer noms et adjectifs, demander et décrire le temps avec des phrases simples.",
    body: `
 <p><b>6e · Anglais · A1</b> — Apprends à décrire le temps qu'il fait et à comprendre un bulletin météo simple.</p>
 <h2>1. Demander quel temps il fait</h2>
 <div class="lesson-formula" lang="en-GB">What's the weather like today?<br>How's the weather today?</div>
 <p>Ces deux questions signifient « Quel temps fait-il aujourd'hui ? ». Pour répondre, on commence généralement par <b>${en("It's")}</b> (${en("It is")}):</p>
 <div class="lesson-formula" lang="en-GB">It's sunny today. — Il fait beau aujourd'hui.<br>It's cloudy. — Le ciel est nuageux.</div>
 <h2>2. Les adjectifs pour décrire le temps</h2>
 <p>Ces mots décrivent le temps qu'il fait. La plupart se terminent par <b>-y</b>.</p>
 <div class="course-table-wrap"><table class="course-table"><caption>Weather adjectives — Les adjectifs météo</caption><tbody>
 <tr><th scope="col">English</th><th scope="col">Français</th></tr>
 <tr><td>${en("sunny")}</td><td>ensoleillé</td></tr><tr><td>${en("cloudy")}</td><td>nuageux</td></tr>
 <tr><td>${en("rainy")}</td><td>pluvieux</td></tr><tr><td>${en("windy")}</td><td>venteux</td></tr>
 <tr><td>${en("snowy")}</td><td>enneigé</td></tr><tr><td>${en("foggy")}</td><td>brumeux</td></tr>
 <tr><td>${en("stormy")}</td><td>orageux</td></tr><tr><td>${en("partly cloudy")}</td><td>partiellement nuageux</td></tr>
 </tbody></table></div>
 <h2>3. Les températures</h2>
 <div class="course-table-wrap"><table class="course-table"><caption>Temperature — La température</caption><tbody>
 <tr><td>${en("freezing")}</td><td>glacial</td></tr><tr><td>${en("cold")}</td><td>froid</td></tr>
 <tr><td>${en("cool")}</td><td>frais</td></tr><tr><td>${en("warm")}</td><td>doux, chaud</td></tr>
 <tr><td>${en("hot")}</td><td>chaud</td></tr>
 </tbody></table></div>
 <p>Exemples : ${en("It's cold today.")} (Il fait froid aujourd'hui.) · ${en("It's very hot.")} (Il fait très chaud.)</p>
 <h2>4. Les phénomènes météo : les noms</h2>
 <p>Un <b>nom</b> désigne le phénomène ; un <b>adjectif</b> décrit le temps.</p>
 <div class="course-table-wrap"><table class="course-table"><caption>Nouns — Les noms</caption><tbody>
 <tr><th scope="col">Nom</th><th scope="col">Adjectif</th><th scope="col">Français</th></tr>
 <tr><td>${en("sun")}</td><td>${en("sunny")}</td><td>soleil / ensoleillé</td></tr>
 <tr><td>${en("cloud")}</td><td>${en("cloudy")}</td><td>nuage / nuageux</td></tr>
 <tr><td>${en("rain")}</td><td>${en("rainy")}</td><td>pluie / pluvieux</td></tr>
 <tr><td>${en("wind")}</td><td>${en("windy")}</td><td>vent / venteux</td></tr>
 <tr><td>${en("snow")}</td><td>${en("snowy")}</td><td>neige / enneigé</td></tr>
 <tr><td>${en("fog")}</td><td>${en("foggy")}</td><td>brouillard / brumeux</td></tr>
 <tr><td>${en("storm")}</td><td>${en("stormy")}</td><td>orage / orageux</td></tr>
 </tbody></table></div>
 <p>Autres mots utiles : ${en("thunder")} = tonnerre, ${en("lightning")} = éclair, ${en("rainbow")} = arc-en-ciel.</p>
 <h2>5. Dire ce qui se passe maintenant</h2>
 <div class="lesson-formula" lang="en-GB">It's raining. — Il pleut.<br>It's snowing. — Il neige.</div>
 <p>On ne dit pas ${en("It's rain")} pour « il pleut ». Pour décrire le temps avec un adjectif, on dit ${en("It's rainy")}; pour parler de la pluie qui tombe maintenant, on dit ${en("It's raining")}.</p>
 <h2>6. Lire un mini bulletin météo</h2>
 <div class="lesson-reading" aria-label="Mini bulletin météo en anglais"><p lang="en-GB"><b>Good morning!</b> Today in London, it's cloudy and cool. In Cardiff, it's raining. In Edinburgh, it's windy and cold. Have a nice day!</p></div>
 <p>Pour présenter la météo d'une ville, utilise le modèle <b>${en("In + city, it's + adjective.")}</b> : ${en("In London, it's cloudy.")} signifie « À Londres, le ciel est nuageux ».</p>
 <aside class="lesson-callout"><b>À retenir :</b> ${en("What's the weather like?")} → ${en("It's sunny / cloudy / windy...")} ; ${en("It's raining")} = il pleut ; ${en("It's snowing")} = il neige.</aside>
 <details class="lesson-sources"><summary>Références et repères pédagogiques</summary>
 <p>Leçon de vocabulaire pour le niveau 6e (repères A1), avec une progression de la reconnaissance des mots vers la compréhension d'un bulletin météo. Les exemples et exercices sont originaux.</p>
 <p><a href="https://scolaires.futuroscope.com/sites/default/files/2025-04/GP_Chasseurs_de_tornades_CHARTE_2024.pdf" target="_blank" rel="noopener">Dossier pédagogique « What's the weather like today? » — Cycle 3, anglais</a> · <a href="https://www.ac-versailles.fr/media/16310/download" target="_blank" rel="noopener">DSDEN 78 — Séquence type anglais, cycle 3</a></p>
 <small>Repères consultés le 14 novembre 2026. Cette fiche ne couvre pas à elle seule toute la séquence ni l'ensemble du programme d'anglais de 6e.</small></details>`,
    questions: [
      { text: `Que signifie ${en("windy")} ?`, options: ["Ensoleillé", "Venteux", "Nuageux"], correct: 1, explanation: `${en("Wind")} signifie « vent » et ${en("windy")} signifie « venteux ». Le suffixe -y transforme ici le nom en adjectif.` },
      { text: `Comment dit-on « brouillard » en anglais ?`, options: [en("Fog"), en("Frog"), en("Foggy")], correct: 0, explanation: `${en("Fog")} est le nom « brouillard ». ${en("Foggy")} est l'adjectif « brumeux ». Attention à ne pas confondre ${en("fog")} et ${en("frog")} (grenouille).` },
      { text: `Complète : ${en("It's … today.")} — Le ciel est nuageux.`, options: [en("cloud"), en("cloudy"), en("clouding")], correct: 1, explanation: `${en("Cloudy")} signifie « nuageux ». Après ${en("It's")}, on utilise ici l'adjectif. ${en("Cloud")} est le nom « nuage ».` },
      { text: `Quel mot signifie « glacial » ?`, options: [en("Warm"), en("Cool"), en("Freezing")], correct: 2, explanation: `${en("Freezing")} signifie « glacial ». On peut retenir l'échelle : ${en("cool")} (frais), ${en("cold")} (froid), ${en("freezing")} (glacial).` },
      { text: `Comment dit-on « Il pleut » pour décrire ce qui se passe maintenant ?`, options: [en("It's rain."), en("It's raining."), en("It's rainying.")], correct: 1, explanation: `${en("It's raining")} signifie « il pleut ». Pour une action météo en cours, on emploie ${en("raining")}. ${en("Rainy")} est un adjectif : ${en("It's rainy")} signifie « le temps est pluvieux ».` },
      { text: `Quel couple nom / adjectif est correct ?`, options: [`${en("sun")} = ensoleillé ; ${en("sunny")} = soleil`, `${en("sun")} = soleil ; ${en("sunny")} = ensoleillé`, `${en("sunny")} = pluie ; ${en("sun")} = pluvieux`], correct: 1, explanation: `${en("Sun")} est le nom « soleil » et ${en("sunny")} l'adjectif « ensoleillé ». Même modèle avec ${en("rain / rainy")} et ${en("cloud / cloudy")}.` },
      { text: `Dans le bulletin, quel temps fait-il à Edinburgh ?`, options: [`${en("It's sunny and hot.")}`, `${en("It's windy and cold.")}`, `${en("It's snowy and warm.")}`], correct: 1, explanation: `Le bulletin indique : ${en("In Edinburgh, it's windy and cold.")}. Cela signifie « À Édimbourg, il y a du vent et il fait froid ».` },
      { text: `Quelle question signifie « Quel temps fait-il aujourd'hui ? » ?`, options: [en("What's the weather like today?"), en("Where is the weather today?"), en("What time is the weather?")], correct: 0, explanation: `${en("What's the weather like today?")} est la formulation courante pour demander quel temps il fait aujourd'hui. On peut aussi demander ${en("How's the weather today?")}.` },
    ],
  });

  window.COLLEGE_COURSES.push({
    id: "thales-agrandissement",
    grade: "3e",
    subject: "mathematiques",
    subjectName: "Mathématiques",
    domain: "Géométrie · Théorème de Thalès",
    icon: "△",
    title: "Thalès : calculer une longueur",
    heading: "Le théorème de Thalès,<br><span>des rapports pour mesurer.</span>",
    description: "Reconnaître une configuration de Thalès, écrire les rapports dans le bon ordre et calculer une longueur.",
    objectives: "Identifier les triangles en configuration de Thalès, utiliser l’égalité des rapports et rédiger un calcul avec son unité.",
    body: `<p><b>Mathématiques · 3e · Géométrie</b> — Cette fiche présente le théorème de Thalès dans une configuration de triangles emboîtés. Il faut savoir reconnaître des droites parallèles et calculer un quotient.</p>
<h2>1. Repérer la configuration</h2>
<p>Dans un triangle <b>ABC</b>, les points <b>M</b> et <b>N</b> appartiennent respectivement aux côtés [AB] et [AC]. Si les droites (MN) et (BC) sont parallèles, les triangles AMN et ABC sont dans une configuration de Thalès.</p>
<div class="lesson-formula">M ∈ [AB] · N ∈ [AC] · (MN) ∥ (BC)</div>
<p>Les côtés correspondants sont [AM] et [AB], [AN] et [AC], puis [MN] et [BC]. Il faut conserver cet ordre dans les rapports.</p>
<h2>2. Écrire l’égalité des rapports</h2>
<div class="lesson-formula">AM / AB = AN / AC = MN / BC</div>
<p>Chaque rapport compare deux côtés correspondants : un côté du petit triangle sur le côté correspondant du grand triangle. On peut aussi écrire tous les rapports dans le sens inverse, à condition de rester cohérent.</p>
<aside class="lesson-callout">Avant de remplacer par des nombres, vérifie le parallélisme et repère les côtés correspondants. Un dessin qui semble parallèle ne constitue pas une preuve.</aside>
<h2>3. Calculer une longueur</h2>
<p>Supposons AM = 4 cm, AB = 10 cm et AC = 7,5 cm. On cherche AN :</p>
<div class="lesson-formula">AM / AB = AN / AC<br>4 / 10 = AN / 7,5<br>AN = (4 × 7,5) / 10 = 3 cm</div>
<p>Le résultat est cohérent : le petit triangle est une réduction du grand, donc AN est inférieur à AC.</p>
<h2>4. Utiliser la réciproque avec prudence</h2>
<p>La <b>réciproque</b> de Thalès permet de démontrer que deux droites sont parallèles lorsque les points sont alignés dans le même ordre et que les rapports de longueurs correspondants sont égaux.</p>
<p>Par exemple, si AM/AB = AN/AC et si les points sont dans la configuration requise, on peut conclure que (MN) et (BC) sont parallèles. Il faut vérifier les alignements et l’ordre des points : l’égalité de deux nombres isolée ne suffit pas.</p>
<h2>5. Rédiger une démonstration</h2>
<p>Une rédaction claire suit trois étapes : annoncer les alignements et le parallélisme connus, citer le théorème, puis écrire l’égalité des rapports et effectuer le calcul. Termine par une phrase réponse avec l’unité.</p>
<details class="lesson-sources"><summary>Références du programme</summary><p>Mathématiques, cycle 4 : théorème de Thalès et sa réciproque, calcul de longueurs et démonstration. Cette fiche est une introduction ciblée, pas une couverture complète de la géométrie de 3e.</p><p><a href="https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm" target="_blank" rel="noopener">Programme du cycle 4, BO du 30 juillet 2020</a> · <a href="https://eduscol.education.gouv.fr/6910/reperes-annuels-de-progression-et-attendus-de-fin-d-annee-du-cp-la-troisieme" target="_blank" rel="noopener">Repères annuels et attendus de fin d’année</a></p><small>Programme applicable en 3e en 2026-2027. Exemples et exercices originaux.</small></details>`,
    questions: [
      { text: "Dans le triangle ABC, M appartient à [AB], N appartient à [AC] et (MN) est parallèle à (BC). Quelle égalité est correcte ?", options: ["AM / AB = AN / AC", "AM / AC = AN / AB", "AB / AM = AN / BC"], correct: 0, explanation: "Les côtés correspondants sont AM et AB, puis AN et AC. On compare les côtés du petit triangle à ceux du grand triangle dans le même ordre : AM/AB = AN/AC = MN/BC." },
      { text: "Quelle condition permet d’utiliser le théorème de Thalès dans cette configuration ?", options: ["Le triangle doit être isocèle.", "Les droites (MN) et (BC) doivent être parallèles.", "L’angle A doit être droit."], correct: 1, explanation: "Dans la configuration présentée, M et N sont sur les côtés issus de A et (MN) doit être parallèle à (BC). Ni l’égalité des côtés ni un angle droit ne sont nécessaires." },
      { text: "On sait que AM = 4 cm, AB = 10 cm et AC = 7,5 cm. Quelle est la longueur AN ?", options: ["4,5 cm", "3 cm", "18,75 cm"], correct: 1, explanation: "AM/AB = AN/AC, donc 4/10 = AN/7,5. Ainsi AN = 7,5 × 4 ÷ 10 = 3 cm." },
      { text: "Si AM/AB = 0,6 et si les conditions de la réciproque sont réunies, que peut-on conclure lorsque AN/AC = 0,6 ?", options: ["(MN) est parallèle à (BC).", "(MN) est perpendiculaire à (BC).", "Le triangle ABC est rectangle."], correct: 0, explanation: "La réciproque de Thalès permet de conclure au parallélisme lorsque les points sont alignés dans le même ordre et que les rapports correspondants sont égaux." },
      { text: "Dans une configuration de Thalès, AM/AB = 3/5 et BC = 12 cm. Quelle est la longueur MN ?", options: ["20 cm", "7,2 cm", "9 cm"], correct: 1, explanation: "MN/BC = AM/AB = 3/5. Donc MN = 12 × 3/5 = 36/5 = 7,2 cm." },
      { text: "Un élève affirme que deux droites sont parallèles uniquement parce que son dessin semble le montrer. Que manque-t-il ?", options: ["Une mesure ou une démonstration fondée sur les données.", "Un dessin plus grand.", "Une couleur différente pour chaque droite."], correct: 0, explanation: "Un schéma n’est pas une preuve. Il faut utiliser les informations de l’énoncé, par exemple des alignements et des rapports égaux pour appliquer la réciproque de Thalès." }
    ]
  });
  window.COLLEGE_COURSES.push({
    id: "paragraphe-argumente",
    grade: "3e",
    subject: "francais",
    subjectName: "Français",
    domain: "Écriture · Argumentation",
    icon: "¶",
    title: "Construire un paragraphe argumenté",
    heading: "Défendre une idée,<br><span>organiser son argumentation.</span>",
    description: "Formuler une thèse, développer un argument, l’appuyer par un exemple et relier ses idées.",
    objectives: "Distinguer thèse, argument et exemple ; organiser un paragraphe cohérent avec des connecteurs et une phrase de conclusion.",
    body: `<p><b>Français · 3e · Écriture</b> — Un paragraphe argumenté cherche à faire comprendre et accepter un point de vue. Il ne suffit pas d’aligner des opinions : chaque idée doit être expliquée et illustrée.</p>
<h2>1. Distinguer thèse et argument</h2>
<p>La <b>thèse</b> est l’opinion que l’on défend. Un <b>argument</b> est une raison qui la justifie. Un <b>exemple</b> rend cette raison concrète et vérifiable.</p>
<div class="lesson-formula">Thèse : La lecture régulière est utile.<br>Argument : Elle enrichit le vocabulaire.<br>Exemple : On rencontre des mots nouveaux dans un roman.</div>
<h2>2. Développer plutôt que juxtaposer</h2>
<p>Un argument doit être expliqué. Après « la lecture enrichit le vocabulaire », précise comment : le lecteur rencontre des mots dans leur contexte, observe leur emploi et peut en déduire le sens.</p>
<aside class="lesson-callout">Un exemple ne remplace pas l’argument. « J’ai lu un roman hier » raconte un fait ; il faut expliquer en quoi ce fait soutient l’idée défendue.</aside>
<h2>3. Relier les idées</h2>
<p>Les connecteurs logiques rendent le raisonnement lisible : <b>tout d’abord</b> introduit une première idée ; <b>en effet</b> apporte une explication ; <b>par exemple</b> introduit une illustration ; <b>de plus</b> ajoute un argument ; <b>cependant</b> marque une opposition ; <b>donc</b> annonce une conséquence.</p>
<p>Choisis le connecteur selon le lien logique réel. « Cependant » ne signifie pas « de plus » : il annonce une nuance ou une opposition.</p>
<h2>4. Construire un paragraphe</h2>
<p>Un paragraphe peut suivre cette structure souple :</p>
<ol><li>Une phrase qui énonce l’idée défendue.</li><li>Un argument formulé clairement.</li><li>Une explication qui montre pourquoi l’argument est valable.</li><li>Un exemple précis.</li><li>Une phrase qui relie l’exemple à la thèse.</li></ol>
<p>Exemple : « La lecture régulière mérite une place dans la journée. En effet, elle enrichit le vocabulaire en exposant le lecteur à des mots employés dans des contextes variés. Par exemple, un récit historique permet de découvrir des termes liés à une époque. Ainsi, lire aide à mieux comprendre et à mieux s’exprimer. »</p>
<h2>5. Relire son raisonnement</h2>
<p>Vérifie que chaque exemple soutient bien l’argument, que les connecteurs expriment le bon rapport logique et que les pronoms ont un référent clair. Évite les répétitions et les affirmations absolues sans justification.</p>
<details class="lesson-sources"><summary>Références du programme</summary><p>Français, cycle 4 : écriture de textes organisés, justification d’un point de vue, cohérence et progression du propos. Cette fiche propose une méthode de paragraphe ; elle ne remplace pas l’étude des genres et des œuvres au programme.</p><p><a href="https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm" target="_blank" rel="noopener">Programme du cycle 4, BO du 30 juillet 2020</a> · <a href="https://eduscol.education.gouv.fr/enseignements/secondaire/college" target="_blank" rel="noopener">Ressources officielles pour le collège</a></p><small>Exemples et exercices originaux.</small></details>`,
    questions: [
      { text: "Dans « Les sorties scolaires sont utiles car elles permettent d’apprendre autrement », quelle est la thèse ?", options: ["Les sorties scolaires sont utiles.", "Elles permettent d’apprendre autrement.", "Car."], correct: 0, explanation: "La thèse est l’idée défendue : « Les sorties scolaires sont utiles ». La proposition introduite par « car » donne un argument qui justifie cette opinion." },
      { text: "Quel élément est un argument pour défendre la lecture régulière ?", options: ["J’ai un livre bleu.", "Elle permet de rencontrer des mots nouveaux en contexte.", "Mon livre est posé sur la table."], correct: 1, explanation: "Un argument est une raison qui soutient la thèse. Rencontrer des mots nouveaux en contexte explique en quoi la lecture peut être utile." },
      { text: "Quel connecteur convient pour introduire un exemple ?", options: ["Cependant", "Par exemple", "Donc"], correct: 1, explanation: "« Par exemple » annonce une illustration concrète. « Cependant » introduit une opposition ou une nuance ; « donc » marque une conséquence." },
      { text: "Quelle phrase explique réellement l’argument « le sport collectif apprend à coopérer » ?", options: ["Le sport existe depuis longtemps.", "Les joueurs doivent se parler et coordonner leurs actions pour atteindre un objectif commun.", "J’aime beaucoup le sport."], correct: 1, explanation: "Cette phrase développe le mécanisme de coopération : communication, coordination et objectif commun. Les deux autres phrases ne justifient pas l’argument." },
      { text: "Quel connecteur marque une opposition ou une nuance ?", options: ["De plus", "En effet", "Cependant"], correct: 2, explanation: "« Cependant » introduit une réserve ou une opposition. « De plus » ajoute un élément et « en effet » apporte une explication." },
      { text: "Quel ordre forme le paragraphe le plus cohérent ?", options: ["Exemple → conclusion → thèse → argument.", "Thèse → argument expliqué → exemple → phrase de bilan.", "Connecteur → exemple sans explication → autre sujet."], correct: 1, explanation: "On annonce d’abord l’idée défendue, puis on la justifie, on l’illustre et on relie l’exemple à la thèse. Cet ordre aide le lecteur à suivre le raisonnement." }
    ]
  });
  window.COLLEGE_COURSES.push({
    id: "immunite-vaccination",
    grade: "3e",
    subject: "sciences",
    subjectName: "Sciences",
    domain: "SVT · Corps humain et santé",
    icon: "＋",
    title: "Immunité et vaccination : protéger l’organisme",
    heading: "Le système immunitaire,<br><span>une défense qui s’entraîne.</span>",
    description: "Comprendre les barrières, la réponse immunitaire et le principe de la mémoire immunitaire.",
    objectives: "Distinguer barrières et réponse immunitaire, expliquer le rôle des lymphocytes et décrire le principe général de la vaccination.",
    body: `<p><b>SVT · 3e · Corps humain et santé</b> — L’organisme possède plusieurs moyens de défense contre les agents pathogènes. Cette fiche présente les grandes étapes de la réponse immunitaire adaptative.</p>
<h2>1. Des barrières en première ligne</h2>
<p>La peau et les muqueuses constituent des <b>barrières</b> qui limitent l’entrée de nombreux micro-organismes. Elles sont complétées par des mécanismes chimiques et biologiques, comme certaines sécrétions et le microbiote.</p>
<h2>2. Une réponse rapide : l’immunité innée</h2>
<p>Si un agent pathogène franchit les barrières, des cellules de défense peuvent le reconnaître et participer à une réaction inflammatoire. Des phagocytes l’engloutissent et le digèrent : c’est la <b>phagocytose</b>. Cette réponse est rapide et ne cible pas un seul agent de manière spécifique.</p>
<aside class="lesson-callout">Une inflammation locale peut provoquer rougeur, chaleur, douleur et gonflement. C’est une réaction de défense ; ces signes ne permettent pas à eux seuls d’identifier le micro-organisme responsable.</aside>
<h2>3. Une réponse ciblée : l’immunité adaptative</h2>
<p>Certains <b>lymphocytes</b> reconnaissent des éléments caractéristiques d’un agent pathogène, appelés antigènes. Des lymphocytes B peuvent se différencier en cellules qui produisent des <b>anticorps</b>. Ceux-ci se fixent sur leur antigène et facilitent la neutralisation ou l’élimination de l’agent.</p>
<p>Des lymphocytes T participent à la coordination de la réponse ; certains peuvent détruire des cellules infectées. Les mécanismes sont complémentaires : ils ne se remplacent pas tous les uns les autres.</p>
<h2>4. La mémoire immunitaire</h2>
<p>Après une première rencontre, certains lymphocytes deviennent des <b>cellules mémoire</b>. Lors d’une nouvelle exposition au même antigène, la réponse peut être plus rapide et plus importante. C’est le principe de la mémoire immunitaire.</p>
<h2>5. Le principe de la vaccination</h2>
<p>Un vaccin présente au système immunitaire un antigène ou une information permettant d’en produire un, sans provoquer la maladie ciblée de la même façon qu’une infection. Il prépare une réponse et favorise la formation de cellules mémoire. Les technologies vaccinales diffèrent, mais l’objectif est de préparer les défenses avant une rencontre avec l’agent pathogène.</p>
<p>La vaccination contribue aussi à réduire la circulation de certains agents infectieux lorsque la couverture vaccinale est suffisante. Son efficacité et les recommandations dépendent du vaccin et de la maladie concernés.</p>
<details class="lesson-sources"><summary>Références scientifiques et programme</summary><p>SVT, cycle 4 : fonctionnement du système immunitaire, reconnaissance des agents pathogènes et vaccination. Cette fiche est une synthèse introductive ; elle ne détaille pas toutes les cellules ni toutes les stratégies vaccinales.</p><p><a href="https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm" target="_blank" rel="noopener">Programme du cycle 4, BO du 30 juillet 2020</a> · <a href="https://www.inserm.fr/dossier/vaccins-et-vaccinations/" target="_blank" rel="noopener">Inserm : vaccins et vaccinations</a> · <a href="https://www.who.int/fr/health-topics/vaccines-and-immunization" target="_blank" rel="noopener">OMS : vaccination et immunisation</a></p><small>Contenu pédagogique général, sans conseil médical individuel.</small></details>`,
    questions: [
      { text: "Quel élément constitue une barrière physique contre l’entrée de nombreux micro-organismes ?", options: ["La peau.", "Les anticorps circulants uniquement.", "Les cellules mémoire."], correct: 0, explanation: "La peau et les muqueuses forment des barrières qui limitent l’entrée des micro-organismes. Les anticorps et les cellules mémoire interviennent dans d’autres étapes de la défense." },
      { text: "Quelle cellule peut réaliser la phagocytose ?", options: ["Un globule rouge.", "Un phagocyte.", "Une cellule de peau morte."], correct: 1, explanation: "Les phagocytes sont des cellules immunitaires capables d’englober puis de digérer des éléments étrangers. Cette action fait partie de l’immunité innée." },
      { text: "Quel est le rôle des anticorps ?", options: ["Transporter le dioxygène.", "Se fixer sur un antigène et contribuer à sa neutralisation.", "Fabriquer les globules rouges."], correct: 1, explanation: "Les anticorps reconnaissent et se fixent sur un antigène spécifique. Cette liaison peut neutraliser l’agent ou faciliter son élimination par d’autres mécanismes." },
      { text: "Pourquoi la réponse immunitaire peut-elle être plus rapide lors d’une nouvelle rencontre avec le même antigène ?", options: ["Parce que des cellules mémoire peuvent persister.", "Parce que la peau devient transparente.", "Parce que les globules rouges changent de forme."], correct: 0, explanation: "Des lymphocytes mémoire restent après la première rencontre. Ils permettent une réponse secondaire généralement plus rapide et plus importante face au même antigène." },
      { text: "Quel est le principe général d’un vaccin ?", options: ["Déclencher volontairement la maladie grave.", "Préparer le système immunitaire à reconnaître un antigène et à développer une mémoire.", "Remplacer définitivement toutes les défenses naturelles."], correct: 1, explanation: "Un vaccin expose le système immunitaire à un antigène ou à une information permettant de le produire, afin de préparer les défenses et la mémoire sans provoquer la maladie ciblée comme une infection." },
      { text: "Quelle affirmation distingue correctement immunité innée et adaptative ?", options: ["L’innée est rapide et non spécifique ; l’adaptative cible des antigènes et peut laisser une mémoire.", "L’innée apparaît seulement après vaccination.", "L’adaptative ne fait intervenir aucune cellule."], correct: 0, explanation: "L’immunité innée intervient rapidement sans ciblage spécifique d’un antigène unique. L’immunité adaptative repose notamment sur des lymphocytes spécifiques et peut produire des cellules mémoire." }
    ]
  });



  // Approfondissements de français pour la classe de 3e.
  window.COLLEGE_COURSES.push(...[{"id":"phrase-complexe","grade":"3e","subject":"francais","subjectName":"Français","domain":"Grammaire · Phrase complexe","icon":"§","title":"Analyser la phrase complexe","heading":"La phrase complexe,<br><span>relier les propositions.</span>","description":"Identifier les propositions, comprendre coordination, juxtaposition et subordination, analyser les relatives.","objectives":"Délimiter les propositions, reconnaître les liens syntaxiques et identifier l’antécédent et la fonction d’un pronom relatif.","body":"<p><b>Français · 3e · Grammaire</b> — Une phrase complexe contient plusieurs propositions. Pour les analyser, commence par repérer les verbes conjugués.</p><h2>1. Délimiter les propositions</h2><p>Chaque verbe conjugué constitue généralement le noyau d’une proposition. « Le vent souffle et les volets claquent » contient deux propositions. Un infinitif seul ne crée pas une nouvelle proposition indépendante : « Elle veut partir » ne contient qu’un verbe conjugué.</p><h2>2. Juxtaposition et coordination</h2><p>La <b>juxtaposition</b> relie des propositions indépendantes par une virgule, un point-virgule ou deux-points : « La nuit tombe ; les rues se vident. » La <b>coordination</b> utilise un mot de liaison : mais, ou, et, donc, or, ni, car : « La nuit tombe, donc les rues se vident. »</p><h2>3. La subordination</h2><p>Une proposition subordonnée dépend d’une autre proposition. Elle est introduite par un mot subordonnant : « Je pense <b>que tu as raison</b> » ; « Je partirai <b>quand tu arriveras</b> ». La conjonctive peut compléter un verbe ou exprimer une circonstance.</p><h2>4. La proposition relative</h2><p>La relative est introduite par un pronom relatif (qui, que, dont, où, lequel…). Elle complète un nom ou un pronom appelé <b>antécédent</b>.</p><div class=\"lesson-formula\">Le roman <b>que tu lis</b> est passionnant.<br>Antécédent : « roman » · « que » reprend ce nom.</div><p>Le pronom relatif a une fonction dans la relative : « qui » est sujet dans « le garçon qui court » ; « que » est COD dans « le livre que je lis ».</p><h2>5. Méthode d’analyse</h2><ol><li>Souligne les verbes conjugués.</li><li>Délimite les propositions.</li><li>Repère le signe ou le mot qui les relie.</li><li>Indique juxtaposition, coordination ou subordination.</li><li>Pour une relative, retrouve l’antécédent et la fonction du pronom.</li></ol><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Français, cycle 4 : étude de la langue, lecture, écriture et oral. Le programme publié au BO du 30 juillet 2020 reste applicable en 3e en 2026-2027 ; le nouveau programme de français du cycle 4 s’appliquera en 3e à la rentrée 2028-2029.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel de français du cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p><small>Exemples et exercices originaux.</small></details>","questions":[{"text":"Combien de propositions contient « Le soleil se couche et les oiseaux se taisent » ?","options":["Une","Deux","Trois"],"correct":1,"explanation":"Les verbes conjugués sont « se couche » et « se taisent » : la phrase contient deux propositions."},{"text":"Quel signe peut relier deux propositions par juxtaposition ?","options":["Une virgule","La conjonction « mais »","Le pronom « qui »"],"correct":0,"explanation":"La juxtaposition relie les propositions par un signe de ponctuation, sans mot de liaison."},{"text":"Dans « Je reste parce qu’il pleut », quel est le lien ?","options":["Juxtaposition","Coordination","Subordination"],"correct":2,"explanation":"« Parce qu’il pleut » est une subordonnée conjonctive qui exprime la cause."},{"text":"Dans « Le film que nous avons vu est drôle », quel est l’antécédent de « que » ?","options":["Le film","Nous","Drôle"],"correct":0,"explanation":"« Que » reprend le nom « film », son antécédent."},{"text":"Dans « La fille qui chante est ma sœur », quelle est la fonction de « qui » ?","options":["COD","Sujet de « chante »","Complément circonstanciel"],"correct":1,"explanation":"« Qui » accomplit l’action de chanter : il est sujet du verbe de la relative."},{"text":"Quelle phrase contient une proposition relative ?","options":["Il pleut, je rentre.","Je sais que tu viens.","La maison où je vis est ancienne."],"correct":2,"explanation":"« Où je vis » est une relative introduite par « où » et complète l’antécédent « maison »."}]},{"id":"accord-participe-passe","grade":"3e","subject":"francais","subjectName":"Français","domain":"Orthographe · Accords","icon":"✓","title":"Maîtriser l’accord du participe passé","heading":"Le participe passé,<br><span>choisir le bon accord.</span>","description":"Appliquer les règles avec être et avoir, repérer le COD et éviter les pièges fréquents.","objectives":"Accorder le participe passé avec être, appliquer la règle du COD antéposé avec avoir et analyser les verbes pronominaux.","body":"<p><b>Français · 3e · Orthographe</b> — L’accord du participe passé dépend de l’auxiliaire et de la place du complément. Identifie d’abord la construction.</p><h2>1. Avec être</h2><p>Le participe passé s’accorde généralement avec le sujet en genre et en nombre : « Lina est partie » ; « Les garçons sont arrivés » ; « Les filles sont arrivées ».</p><h2>2. Avec avoir</h2><p>Avec <b>avoir</b>, pas d’accord avec le sujet. Le participe passé s’accorde avec le COD seulement si celui-ci est placé avant le verbe.</p><div class=\"lesson-formula\">J’ai rangé les affaires. → COD après : rangé.<br>Les affaires que j’ai rangées… → COD avant : rangées.</div><h2>3. Repérer le COD</h2><p>Pose « qui ? » ou « quoi ? » après le verbe, sans préposition. Dans « Les lettres que tu as écrites », le COD est « que », qui reprend « les lettres » : féminin pluriel, placé avant, donc « écrites ». Un COI introduit par « à » ou « de » ne commande pas l’accord.</p><h2>4. Les verbes pronominaux</h2><p>Ne fais pas d’accord automatique. « Elles se sont lavées » : « se » est COD. « Elles se sont lavé les mains » : COD après, pas d’accord. « Ils se sont parlé » : « se » est COI, pas d’accord.</p><h2>5. Méthode</h2><ol><li>Repère l’auxiliaire.</li><li>Avec être, retrouve le sujet.</li><li>Avec avoir, cherche le COD.</li><li>Vérifie si le COD est placé avant le participe passé.</li></ol><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Français, cycle 4 : étude de la langue, lecture, écriture et oral. Le programme publié au BO du 30 juillet 2020 reste applicable en 3e en 2026-2027 ; le nouveau programme de français du cycle 4 s’appliquera en 3e à la rentrée 2028-2029.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel de français du cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p><small>Exemples et exercices originaux.</small></details>","questions":[{"text":"« Les voyageuses sont … tôt. » (arriver)","options":["arrivé","arrivées","arrivés"],"correct":1,"explanation":"Avec être, le participe passé s’accorde avec « les voyageuses », féminin pluriel : arrivées."},{"text":"Quelle phrase est correcte ?","options":["Elles ont terminées leur travail.","Elles ont terminé leur travail.","Elles sont terminé leur travail."],"correct":1,"explanation":"Avec avoir, le COD « leur travail » est placé après le verbe : le participe passé reste invariable."},{"text":"« Les chansons que nous avons … » (écouter)","options":["écouté","écoutés","écoutées"],"correct":2,"explanation":"Le COD « que » reprend « les chansons » et se trouve avant le participe passé : féminin pluriel."},{"text":"Pourquoi écrit-on « Il a téléphoné à ses parents » sans accord ?","options":["Le sujet est masculin","Le complément est un COI","Le verbe est au présent"],"correct":1,"explanation":"« À ses parents » est un COI : il ne commande pas l’accord du participe passé avec avoir."},{"text":"« Elles se sont … les mains. » (laver)","options":["lavées","lavé","lavés"],"correct":1,"explanation":"Le COD « les mains » est placé après le participe passé. « Se » est ici COI : on écrit « lavé »."},{"text":"« Les décisions qu’ils ont … » (prendre)","options":["pris","prise","prises"],"correct":2,"explanation":"Le COD « que » reprend « les décisions », féminin pluriel, et est placé avant : « prises »."}]},{"id":"temps-modes-conjugaison","grade":"3e","subject":"francais","subjectName":"Français","domain":"Conjugaison · Valeurs des temps","icon":"↻","title":"Choisir les temps et les modes","heading":"Temps et modes,<br><span>exprimer la bonne nuance.</span>","description":"Distinguer les temps du récit, exprimer l’antériorité et comprendre conditionnel et subjonctif.","objectives":"Reconnaître les valeurs de l’imparfait et du passé simple, employer les temps composés et distinguer indicatif, conditionnel et subjonctif.","body":"<p><b>Français · 3e · Conjugaison</b> — Un temps verbal situe une action et organise le texte : premier plan, arrière-plan, antériorité, habitude, hypothèse ou souhait.</p><h2>1. Les temps du récit</h2><p>Dans un récit au passé, le <b>passé simple</b> présente souvent les actions successives ; l’<b>imparfait</b> décrit un décor, une habitude ou une action en cours.</p><div class=\"lesson-formula\">La pluie tombait (arrière-plan) lorsque la porte s’ouvrit (événement).</div><h2>2. Exprimer l’antériorité</h2><p>Le <b>plus-que-parfait</b> présente une action accomplie avant un autre moment du passé : « Quand elle arriva, le train était déjà parti. » Le futur antérieur présente une action achevée avant une autre action future : « Quand tu auras terminé, nous sortirons. »</p><h2>3. Le conditionnel</h2><p>Le conditionnel exprime notamment une hypothèse, une demande atténuée ou une information non confirmée : « Si j’avais le temps, je lirais ce roman. » Après « si » exprimant cette hypothèse, on emploie ici l’imparfait, puis le conditionnel dans la conséquence. On n’écrit pas « si j’aurais ».</p><h2>4. Le subjonctif</h2><p>Il apparaît après certaines expressions de volonté, de nécessité, de sentiment ou de doute : « Il faut que tu <b>viennes</b> » ; « Je souhaite qu’elle <b>réussisse</b> ». L’indicatif présente généralement un fait comme établi : « Je sais qu’il vient. »</p><h2>5. Choisir en contexte</h2><p>Demande-toi : quand se déroule l’action ? Est-elle achevée ou en cours ? Est-elle antérieure à une autre ? Est-ce un fait, une hypothèse, un souhait ou une obligation ? Garde un système de temps cohérent dans ta rédaction.</p><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Français, cycle 4 : étude de la langue, lecture, écriture et oral. Le programme publié au BO du 30 juillet 2020 reste applicable en 3e en 2026-2027 ; le nouveau programme de français du cycle 4 s’appliquera en 3e à la rentrée 2028-2029.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel de français du cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p><small>Exemples et exercices originaux.</small></details>","questions":[{"text":"Dans « Le vent soufflait quand la cloche sonna », quel temps présente le décor ?","options":["Passé simple","Imparfait","Plus-que-parfait"],"correct":1,"explanation":"« Soufflait » est à l’imparfait et décrit l’arrière-plan ; « sonna » présente l’événement."},{"text":"Quel temps marque une action antérieure à un autre moment du passé ?","options":["Plus-que-parfait","Futur simple","Présent"],"correct":0,"explanation":"Le plus-que-parfait exprime l’antériorité dans le passé."},{"text":"« Si j’avais davantage de temps, je … davantage. »","options":["lirais","lirai","aurais lu"],"correct":0,"explanation":"La conséquence d’une hypothèse introduite par « si » à l’imparfait se met ici au conditionnel présent."},{"text":"Quelle phrase appelle le subjonctif ?","options":["Je sais qu’il vient.","Il faut que tu viennes.","Il affirme qu’elle réussit."],"correct":1,"explanation":"« Il faut que » exprime une nécessité et commande le subjonctif : « que tu viennes »."},{"text":"Dans « Quand tu auras fini, nous partirons », « auras fini » est au…","options":["Passé composé","Futur antérieur","Plus-que-parfait"],"correct":1,"explanation":"« Auras fini » est au futur antérieur : l’action sera achevée avant le départ."},{"text":"Quelle phrase respecte la construction de l’hypothèse ?","options":["Si j’aurais su, je serais venu.","Si j’avais su, je serais venu.","Si je saurais, je serais venu."],"correct":1,"explanation":"Pour une hypothèse irréelle dans le passé : imparfait dans la proposition en « si », conditionnel passé dans la conséquence."}]},{"id":"analyser-texte-litteraire","grade":"3e","subject":"francais","subjectName":"Français","domain":"Lecture · Analyse littéraire","icon":"¶","title":"Analyser un texte littéraire","heading":"Lire entre les lignes,<br><span>justifier une interprétation.</span>","description":"Repérer le point de vue, les procédés d’écriture et les effets produits pour construire une réponse précise.","objectives":"Distinguer auteur et narrateur, reconnaître les points de vue, analyser des procédés et justifier une interprétation par une citation.","body":"<p><b>Français · 3e · Lecture</b> — Analyser un texte, ce n’est pas seulement raconter ce qui s’y passe. Il faut formuler une interprétation et montrer quels mots ou procédés la rendent possible.</p><h2>1. Auteur, narrateur et personnage</h2><p>L’<b>auteur</b> est la personne qui écrit l’œuvre. Le <b>narrateur</b> est la voix qui raconte. Il peut être un personnage (« je ») ou une voix extérieure. Ne confonds pas automatiquement auteur et narrateur.</p><h2>2. Les points de vue</h2><ul><li><b>Interne :</b> le lecteur accède aux perceptions ou pensées d’un personnage.</li><li><b>Externe :</b> les actions sont décrites de l’extérieur, sans accès aux pensées.</li><li><b>Omniscient :</b> le narrateur connaît les pensées et les événements au-delà de ce qu’un personnage sait.</li></ul><h2>3. Les procédés d’écriture</h2><p>Une comparaison rapproche deux éléments avec un outil (« comme »). Une métaphore crée un rapprochement sans outil. Une personnification attribue des caractéristiques humaines à un objet ou à la nature.</p><div class=\"lesson-formula\">« Rapide comme l’éclair » : comparaison.<br>« Cette mer de toits » : métaphore.<br>« La ville s’éveille » : personnification.</div><p>Ne te contente pas de nommer le procédé : explique l’image créée et l’effet produit dans ce contexte.</p><h2>4. Justifier avec une citation</h2><p>Une réponse solide suit trois étapes : <b>j’affirme</b> une idée, <b>je cite</b> quelques mots exacts, <b>j’explique</b> comment ils prouvent mon interprétation.</p><div class=\"lesson-formula\">Idée : le personnage a peur.<br>Indice : « ses mains tremblaient ».<br>Explication : le verbe « tremblaient » traduit une réaction physique révélatrice de son inquiétude.</div><h2>5. Lire l’ensemble</h2><p>Observe le genre (récit, poésie, théâtre, argumentation), la situation d’énonciation, les champs lexicaux, les temps et la progression. Un procédé peut produire plusieurs effets : justifie toujours ton interprétation par le passage précis.</p><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Français, cycle 4 : étude de la langue, lecture, écriture et oral. Le programme publié au BO du 30 juillet 2020 reste applicable en 3e en 2026-2027 ; le nouveau programme de français du cycle 4 s’appliquera en 3e à la rentrée 2028-2029.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel de français du cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p><small>Exemples et exercices originaux.</small></details>","questions":[{"text":"Qui est le narrateur d’un récit ?","options":["Toujours l’auteur réel","La voix qui raconte l’histoire","Le lecteur"],"correct":1,"explanation":"Le narrateur est l’instance qui raconte. Il peut être un personnage ou une voix extérieure."},{"text":"Quel indice correspond à un point de vue interne ?","options":["Le narrateur connaît toutes les pensées","Le lecteur accède aux sensations d’un personnage","La scène est décrite sans pensée"],"correct":1,"explanation":"Le point de vue interne donne accès aux perceptions, émotions ou pensées d’un personnage."},{"text":"« Les arbres murmuraient dans la nuit » contient surtout…","options":["Une personnification","Une comparaison","Une hyperbole"],"correct":0,"explanation":"Le verbe humain « murmurer » est attribué aux arbres : c’est une personnification."},{"text":"Quelle réponse analyse correctement une citation ?","options":["Je recopie un long passage sans commentaire.","Je nomme un procédé sans expliquer son effet.","J’affirme une idée, cite quelques mots et explique leur effet."],"correct":2,"explanation":"Une analyse relie une interprétation à un indice précis puis explique comment cet indice la justifie."},{"text":"Dans « Il avançait, tremblant, vers la porte », quel mot peut suggérer la peur ?","options":["Avançait","Tremblant","Porte"],"correct":1,"explanation":"« Tremblant » décrit une réaction physique qui peut traduire la peur ; le contexte permet de préciser l’interprétation."},{"text":"Quelle distinction est correcte ?","options":["Auteur et narrateur sont toujours identiques.","Le narrateur raconte ; l’auteur écrit l’œuvre.","Le personnage qui parle est toujours le narrateur."],"correct":1,"explanation":"L’auteur est la personne qui compose l’œuvre ; le narrateur est la voix construite pour raconter."}]},{"id":"redaction-brevet-recriture","grade":"3e","subject":"francais","subjectName":"Français","domain":"Écriture · Brevet","icon":"✎","title":"Réussir la rédaction et la réécriture du brevet","heading":"Écrire avec méthode,<br><span>réviser pour le brevet.</span>","description":"Préparer un brouillon, organiser un récit ou une réflexion, puis réussir les transformations de réécriture.","objectives":"Construire un plan adapté au sujet, rédiger des paragraphes cohérents et appliquer une consigne de réécriture à toute la chaîne grammaticale.","body":"<p><b>Français · 3e · Méthode</b> — Une rédaction réussie répond précisément au sujet, suit une progression claire et maîtrise la langue. La réécriture demande de repérer tous les mots concernés par la transformation.</p><h2>1. Lire la consigne</h2><p>Repère le type de texte demandé : raconter, décrire, expliquer, argumenter ou poursuivre un récit. Souligne les contraintes : personne grammaticale, temps, éléments obligatoires et destinataire. Reformule le sujet avec tes mots.</p><h2>2. Préparer un brouillon efficace</h2><p>Note une idée principale par paragraphe, les étapes du récit ou les arguments à développer. Pour un récit, prévois une situation initiale, un événement, des actions et une fin. Pour une réflexion, prépare une thèse, des arguments expliqués et des exemples.</p><h2>3. Organiser les paragraphes</h2><p>Chaque paragraphe développe une idée principale. Utilise des connecteurs adaptés, évite les répétitions et veille aux reprises pronominales. Dans un récit, garde des temps cohérents et varie les verbes lorsque cela sert le texte.</p><h2>4. Réussir une réécriture</h2><p>Une consigne peut demander de changer le nombre, le genre, la personne ou le temps. Ne modifie pas seulement le mot visé : contrôle toute la chaîne d’accord.</p><div class=\"lesson-formula\">Original : « La jeune voyageuse est arrivée. Elle raconte son aventure. »<br>Pluriel : « Les jeunes voyageuses sont arrivées. Elles racontent leur aventure. »</div><p>Vérifie déterminants, noms, adjectifs, pronoms, verbes conjugués et participes passés. Relis la phrase entière pour contrôler les accords et le sens.</p><h2>5. Se relire</h2><ol><li>Ai-je répondu à toutes les parties du sujet ?</li><li>Mes paragraphes suivent-ils un ordre logique ?</li><li>Les temps et les personnes restent-ils cohérents ?</li><li>Ai-je vérifié accords et participes passés ?</li><li>La ponctuation et les homophones sont-ils corrects ?</li></ol><aside class=\"lesson-callout\">Le quiz vérifie les méthodes, mais ne remplace pas une rédaction complète ni les retours d’un professeur. Entraîne-toi à écrire réellement quelques paragraphes.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Français, cycle 4 : étude de la langue, lecture, écriture et oral. Le programme publié au BO du 30 juillet 2020 reste applicable en 3e en 2026-2027 ; le nouveau programme de français du cycle 4 s’appliquera en 3e à la rentrée 2028-2029.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel de français du cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p><small>Exemples et exercices originaux.</small></details>","questions":[{"text":"Quelle est la première étape avant une rédaction ?","options":["Écrire immédiatement","Repérer le type de texte et les contraintes","Chercher une citation au hasard"],"correct":1,"explanation":"Il faut comprendre le type de texte, la personne, les temps et les éléments obligatoires avant de construire un plan."},{"text":"À quoi sert principalement le brouillon ?","options":["À recopier tout le texte final","À organiser les idées et les étapes","À remplacer la relecture"],"correct":1,"explanation":"Le brouillon sert à construire un plan, ordonner les idées et vérifier que le sujet est traité."},{"text":"Que contient un paragraphe argumentatif développé ?","options":["Une opinion sans justification","Un argument expliqué et illustré","Une suite de connecteurs"],"correct":1,"explanation":"Un paragraphe convaincant présente une idée, la justifie, l’explique et l’illustre."},{"text":"Mets au pluriel : « La jeune voyageuse est arrivée. »","options":["Les jeunes voyageuses sont arrivées.","Les jeune voyageuses sont arrivé.","Les jeunes voyageuse sont arrivées."],"correct":0,"explanation":"Le groupe nominal devient féminin pluriel et le participe passé avec être s’accorde avec le sujet : « arrivées »."},{"text":"Que faut-il contrôler lors d’une réécriture au pluriel ?","options":["Uniquement les noms","Noms, déterminants, adjectifs, pronoms, verbes et participes","Uniquement le dernier mot"],"correct":1,"explanation":"Le changement de nombre se propage dans la chaîne grammaticale : contrôle tous les mots qui dépendent du groupe transformé."},{"text":"Quelle relecture est la plus efficace ?","options":["Vérifier seulement le début","Contrôler sujet, cohérence, temps, accords et ponctuation","Relire vite sans regarder les verbes"],"correct":1,"explanation":"Une relecture méthodique vérifie le contenu, l’organisation, la cohérence des temps, les accords et la ponctuation."}]}]);


  // Parcours d'histoire-géographie de 3e : les thèmes d'histoire et de géographie.
  window.COLLEGE_COURSES.push(...[{"id":"premiere-guerre-totalitarismes","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Histoire · 1914-1939","title":"Première Guerre mondiale et totalitarismes","heading":"1914-1939,<br><span>guerre totale et régimes totalitaires.</span>","description":"Comprendre la Grande Guerre, ses conséquences et la montée des totalitarismes.","objectives":"Expliquer les phases de la guerre, définir guerre totale et caractériser les régimes soviétique, fasciste et nazi.","icon":"⚔️","body":"<p><b>Thème 1 · Histoire.</b> De 1914 à 1939, l’Europe est bouleversée par une guerre d’une violence inédite, des révolutions et la montée des dictatures.</p><h2>1. La Première Guerre mondiale</h2><p>L’attentat de Sarajevo du 28 juin 1914 déclenche une crise diplomatique. Le jeu des alliances entraîne une guerre européenne puis mondiale. Après la guerre de mouvement de 1914, le front occidental se stabilise dans les tranchées. En 1917, les États-Unis entrent en guerre et la Russie connaît deux révolutions. L’armistice est signé le 11 novembre 1918.</p><h2>2. Une guerre totale et des violences de masse</h2><p>La guerre est <b>totale</b> car les États mobilisent soldats, économie, industrie, sciences, finances, propagande et civils. Les combattants subissent bombardements et conditions extrêmes ; les civils connaissent pénuries et destructions. Le génocide des Arméniens dans l’Empire ottoman en 1915-1916 est une violence de masse organisée. Le bilan humain et matériel est considérable.</p><h2>3. Révolution russe et URSS</h2><p>Les révolutions de 1917 renversent le tsar puis portent les bolcheviks au pouvoir. L’URSS est créée en 1922. Sous Staline, le parti communiste contrôle l’État et la société : collectivisation forcée, propagande, purges et terreur.</p><h2>4. Les régimes totalitaires</h2><p>En Italie, Mussolini instaure le fascisme. En Allemagne, Hitler arrive au pouvoir en 1933 et impose une dictature nazie fondée sur le racisme, l’antisémitisme et la conquête. Ces régimes ont en commun parti unique, culte du chef, propagande, encadrement de la population et répression, mais leurs idéologies ne sont pas identiques.</p><h2>5. Des démocraties fragilisées</h2><p>La crise de 1929 aggrave les tensions. En France, le Front populaire remporte les élections de 1936 et adopte des réformes sociales, dont les congés payés.</p><aside class=\"lesson-callout\">Pour caractériser un régime totalitaire, croise plusieurs critères : idéologie, parti unique, chef, propagande, encadrement et terreur.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Quel événement déclenche la crise de juillet 1914 ?","options":["L’invasion de la Pologne","L’attentat de Sarajevo","La révolution russe"],"correct":1,"explanation":"L’assassinat de l’archiduc François-Ferdinand à Sarajevo déclenche la crise qui conduit à la guerre."},{"text":"Pourquoi la guerre de 1914-1918 est-elle totale ?","options":["Seuls les soldats sont mobilisés","Les États mobilisent toute la société et l’économie","Elle se déroule sur un seul continent"],"correct":1,"explanation":"Armées, industries, finances, civils, sciences et propagande sont mobilisés."},{"text":"Quelle date marque l’armistice de 1918 ?","options":["11 novembre 1918","8 mai 1945","28 juin 1919"],"correct":0,"explanation":"L’armistice entre en vigueur le 11 novembre 1918 ; le traité de Versailles est signé en 1919."},{"text":"Quel changement politique a lieu en Russie en 1917 ?","options":["Le retour du tsar","Deux révolutions puis le pouvoir bolchevik","La création de l’ONU"],"correct":1,"explanation":"Les révolutions de février et d’octobre mettent fin au tsarisme puis portent les bolcheviks au pouvoir."},{"text":"Quel élément caractérise les régimes totalitaires ?","options":["Le pluralisme politique","Le parti unique, la propagande et la terreur","L’alternance démocratique"],"correct":1,"explanation":"Ils cherchent à contrôler la vie politique et sociale par l’embrigadement et la répression."},{"text":"En quelle année Hitler devient-il chancelier ?","options":["1919","1933","1939"],"correct":1,"explanation":"Hitler est nommé chancelier le 30 janvier 1933."}]},{"id":"seconde-guerre-vichy-resistance","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Histoire · 1939-1945","title":"Seconde Guerre mondiale, Vichy et Résistance","heading":"1939-1945,<br><span>guerre d’anéantissement et libération.</span>","description":"Comprendre le conflit mondial, l’Occupation, la collaboration, la Résistance et la Shoah.","objectives":"Dater les étapes du conflit, expliquer la guerre d’anéantissement et distinguer Vichy, France libre et Résistance.","icon":"✹","body":"<p><b>Thème 1 · Histoire.</b> La Seconde Guerre mondiale oppose l’Axe aux Alliés et atteint une violence extrême contre les combattants et les civils.</p><h2>1. Les grandes étapes</h2><p>L’Allemagne envahit la Pologne le 1er septembre 1939. En 1940, la France est vaincue et signe l’armistice du 22 juin. En 1941, l’Allemagne attaque l’URSS et le Japon attaque Pearl Harbor : les États-Unis entrent en guerre. Les Alliés remportent des victoires à Stalingrad (1942-1943), débarquent en Normandie le 6 juin 1944 et libèrent Paris en août. L’Allemagne capitule le 8 mai 1945 ; le Japon en septembre.</p><h2>2. Une guerre d’anéantissement</h2><p>Les belligérants cherchent à détruire les capacités de l’ennemi. Bombardements massifs, massacres et violences contre les civils marquent le conflit, particulièrement sur le front de l’Est.</p><h2>3. La Shoah</h2><p>Le régime nazi persécute les Juifs dès 1933. Pendant la guerre, ghettos, fusillades de masse puis centres de mise à mort organisent le génocide des Juifs d’Europe, appelé <b>Shoah</b> : environ six millions de personnes sont assassinées. Les nazis persécutent et assassinent aussi les Roms.</p><h2>4. Vichy et la collaboration</h2><p>Après la défaite de 1940, Pétain obtient les pleins pouvoirs et met fin à la République. Vichy collabore avec l’Allemagne nazie, adopte ses propres lois antisémites et participe aux déportations, notamment lors de la rafle du Vél’ d’Hiv en juillet 1942.</p><h2>5. Résister et libérer</h2><p>Le 18 juin 1940, de Gaulle appelle depuis Londres à poursuivre le combat et organise la France libre. En France, les résistants diffusent des journaux clandestins, renseignent les Alliés, sabotent et combattent. Jean Moulin unifie les mouvements au sein du Conseil national de la Résistance en 1943. La Libération rétablit la République.</p><aside class=\"lesson-callout\">Ne confonds pas Vichy, qui collabore, avec la France libre et les mouvements de Résistance. Les comportements des Français ont été divers et ont évolué.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Quel événement marque le début de la guerre en Europe ?","options":["L’invasion de la Pologne","Le débarquement en Normandie","La capitulation du Japon"],"correct":0,"explanation":"L’Allemagne envahit la Pologne le 1er septembre 1939."},{"text":"Quel événement fait entrer les États-Unis dans la guerre en 1941 ?","options":["Stalingrad","Pearl Harbor","Le débarquement"],"correct":1,"explanation":"L’attaque japonaise de Pearl Harbor, le 7 décembre 1941, conduit les États-Unis à entrer en guerre."},{"text":"Que désigne la Shoah ?","options":["La reconstruction européenne","Le génocide des Juifs d’Europe par les nazis","La Résistance française"],"correct":1,"explanation":"La Shoah est le génocide des Juifs d’Europe organisé par l’Allemagne nazie et ses collaborateurs."},{"text":"Quel rôle joue le régime de Vichy ?","options":["Il dirige la France libre","Il collabore avec l’Allemagne nazie","Il organise le débarquement"],"correct":1,"explanation":"Vichy collabore avec l’occupant et participe aux persécutions et déportations."},{"text":"Quel est l’objectif de l’appel du 18 juin 1940 ?","options":["Poursuivre le combat contre l’Allemagne","Annoncer la capitulation japonaise","Créer l’ONU"],"correct":0,"explanation":"Depuis Londres, de Gaulle appelle à continuer la lutte et à rejoindre la France libre."},{"text":"Quelle date marque la capitulation allemande en Europe ?","options":["11 novembre 1918","8 mai 1945","9 novembre 1989"],"correct":1,"explanation":"La capitulation allemande entre en vigueur le 8 mai 1945."}]},{"id":"guerre-froide-decolonisation-europe","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Histoire · Le monde depuis 1945","title":"Guerre froide, décolonisation et construction européenne","heading":"Depuis 1945,<br><span>un monde recomposé.</span>","description":"Comprendre la bipolarisation, les indépendances, la construction européenne et les recompositions après 1989.","objectives":"Définir guerre froide et décolonisation, situer les crises et expliquer la construction européenne.","icon":"🌐","body":"<p><b>Thème 2 · Histoire.</b> Après 1945, le monde se reconstruit, se divise en deux blocs puis connaît de nouvelles puissances et de nouveaux conflits.</p><h2>1. Organiser la paix</h2><p>L’ONU est créée en 1945 pour maintenir la paix et favoriser la coopération. Les États-Unis et l’URSS deviennent les deux superpuissances.</p><h2>2. La guerre froide (environ 1947-1991)</h2><p>Les États-Unis défendent la démocratie libérale et l’économie capitaliste ; l’URSS impose un régime communiste à parti unique et une économie planifiée. Leur rivalité passe par les alliances, la propagande, la course aux armements et à l’espace et des conflits indirects. Le mur de Berlin, construit en 1961, symbolise la division de l’Europe. Repères : blocus de Berlin (1948-1949), guerre de Corée (1950-1953), crise de Cuba (1962), chute du mur (1989), disparition de l’URSS (1991).</p><h2>3. La décolonisation</h2><p>Après 1945, les peuples colonisés revendiquent leur indépendance. L’Inde devient indépendante en 1947. La guerre d’Indochine se termine en 1954. La guerre d’Algérie (1954-1962) conduit à l’indépendance en 1962. Les indépendances sont parfois négociées, parfois obtenues après des guerres.</p><h2>4. Construire l’Europe</h2><p>La CECA est créée en 1951. Les traités de Rome fondent la CEE en 1957. Le traité de Maastricht crée l’Union européenne en 1992. La coopération vise à rendre la guerre moins probable et à développer les échanges.</p><h2>5. Depuis 1991</h2><p>La disparition de l’URSS met fin à la bipolarisation. Les conflits ne disparaissent pas : guerres en ex-Yougoslavie, tensions au Moyen-Orient, terrorisme et rivalités régionales. La mondialisation intensifie les échanges et les interdépendances.</p><aside class=\"lesson-callout\">La guerre froide est une rivalité globale : les superpuissances s’affrontent indirectement, sans guerre directe généralisée entre elles.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Quels sont les deux principaux rivaux de la guerre froide ?","options":["France et Royaume-Uni","États-Unis et URSS","Chine et Japon"],"correct":1,"explanation":"La guerre froide oppose principalement les États-Unis et l’Union soviétique."},{"text":"Quel événement symbolise la division de Berlin ?","options":["La construction du mur en 1961","La création de l’ONU","Le traité de Rome"],"correct":0,"explanation":"Le mur de Berlin est construit en 1961 et symbolise la division de l’Europe."},{"text":"En quelle année l’Inde devient-elle indépendante ?","options":["1918","1947","1962"],"correct":1,"explanation":"L’indépendance de l’Inde britannique est proclamée en août 1947."},{"text":"Quel événement conduit à l’indépendance de l’Algérie ?","options":["Les accords d’Évian en 1962","Le traité de Versailles","Le traité de Maastricht"],"correct":0,"explanation":"Les accords d’Évian de mars 1962 ouvrent la voie à l’indépendance proclamée en juillet."},{"text":"Quel traité fonde la CEE ?","options":["Traité de Rome de 1957","Traité de Versailles de 1919","Traité de Maastricht de 1992"],"correct":0,"explanation":"Les traités de Rome de 1957 fondent la Communauté économique européenne."},{"text":"Quel événement symbolise la fin de la division de Berlin ?","options":["La chute du mur en 1989","La création de l’URSS en 1922","Le débarquement de 1944"],"correct":0,"explanation":"L’ouverture du mur en novembre 1989 symbolise la fin de la division de l’Europe."}]},{"id":"france-republique-depuis-1944","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Histoire · La France depuis 1944","title":"La République française depuis la Libération","heading":"Depuis 1944,<br><span>refonder et transformer la République.</span>","description":"Étudier le rétablissement républicain, la naissance de la Ve République et les évolutions sociales.","objectives":"Expliquer les réformes de la Libération, distinguer IVe et Ve Républiques et repérer les transformations sociales.","icon":"⚖️","body":"<p><b>Thème 3 · Histoire.</b> Depuis la Libération, la France rétablit la République, transforme ses institutions et connaît de profondes évolutions sociales.</p><h2>1. Refonder la République (1944-1947)</h2><p>Le Gouvernement provisoire rétablit les libertés. Le droit de vote est accordé aux femmes en 1944 ; elles votent pour la première fois en 1945. Le programme du Conseil national de la Résistance inspire des réformes : Sécurité sociale (1945), nationalisations et droits sociaux.</p><h2>2. La IVe République (1946-1958)</h2><p>La Constitution de 1946 fonde un régime parlementaire. La France se reconstruit, modernise son économie et participe aux débuts de la construction européenne. L’instabilité gouvernementale et les guerres de décolonisation fragilisent le régime.</p><h2>3. La Ve République</h2><p>En 1958, la crise liée à la guerre d’Algérie entraîne le retour au pouvoir du général de Gaulle. La Constitution renforce le pouvoir exécutif et la fonction présidentielle. En 1962, le président est élu au suffrage universel direct. La Ve République est toujours en vigueur.</p><h2>4. Une société transformée</h2><p>Les Trente Glorieuses (environ 1945-1975) sont marquées par la croissance, l’industrialisation, l’urbanisation et la consommation de masse. L’automobile, l’équipement des logements, la scolarisation prolongée et l’immigration transforment la société. Mai 1968 exprime des contestations étudiantes, ouvrières et sociales. La loi Veil de 1975 autorise l’IVG dans un cadre légal. La crise ouverte en 1973 met fin à la forte croissance continue.</p><aside class=\"lesson-callout\">Repères : 1944 (droit de vote des femmes), 1945 (Sécurité sociale), 1946 (IVe République), 1958 (Ve République), 1962 (élection présidentielle au suffrage universel direct), 1968 (mobilisations), 1975 (loi Veil).</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Quand les Françaises obtiennent-elles le droit de vote ?","options":["1936","1944","1958"],"correct":1,"explanation":"L’ordonnance du 21 avril 1944 accorde le droit de vote et l’éligibilité aux femmes."},{"text":"Quelle réforme sociale est mise en place en 1945 ?","options":["La Sécurité sociale","La CEE","L’ONU"],"correct":0,"explanation":"La Sécurité sociale est créée en 1945 pour protéger contre plusieurs risques sociaux."},{"text":"En quelle année la Ve République est-elle fondée ?","options":["1946","1958","1968"],"correct":1,"explanation":"La Constitution de la Ve République est approuvée en 1958."},{"text":"Quelle réforme est adoptée en 1962 ?","options":["L’élection du président au suffrage universel direct","Le droit de vote des femmes","La création de l’ONU"],"correct":0,"explanation":"En 1962, le mode d’élection du président est modifié par référendum."},{"text":"Que désignent les Trente Glorieuses ?","options":["La forte croissance après 1945","Une guerre de trente ans","La Révolution française"],"correct":0,"explanation":"Les Trente Glorieuses désignent approximativement 1945-1975, période de croissance et de modernisation."},{"text":"Quelle loi de 1975 concerne l’IVG ?","options":["La loi Veil","La loi de 1905","Le traité de Rome"],"correct":0,"explanation":"La loi portée par Simone Veil en 1975 légalise l’IVG dans un cadre légal."}]},{"id":"espaces-productifs","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Géographie · Dynamiques territoriales","title":"Les espaces productifs français","heading":"Produire en France,<br><span>des territoires connectés.</span>","description":"Identifier les espaces agricoles, industriels et de services et comprendre leur insertion dans la mondialisation.","objectives":"Définir espace productif, comparer les secteurs et expliquer les facteurs de localisation.","icon":"🏭","body":"<p><b>Thème 1 · Géographie.</b> Un espace productif est un territoire aménagé pour produire des richesses. Les activités agricoles, industrielles et de services se transforment et s’insèrent dans des réseaux à plusieurs échelles.</p><h2>1. Les espaces agricoles</h2><p>L’agriculture française est diverse : grandes cultures dans les bassins céréaliers, élevage dans les bocages et montagnes, viticulture et maraîchage. Mécanisation, spécialisation, coopératives et échanges internationaux transforment les exploitations. Circuits courts et filières exportatrices coexistent.</p><h2>2. Les espaces industriels</h2><p>L’industrie évolue avec l’automatisation, la recherche, la logistique et la formation. Les technopôles rapprochent entreprises, laboratoires et universités. Certaines anciennes régions industrielles se reconvertissent tout en conservant des savoir-faire.</p><h2>3. Les espaces de services</h2><p>Commerce, santé, éducation, tourisme, finance, transport et numérique sont des services. Ils se concentrent notamment dans les métropoles, les villes et les zones touristiques. Le tourisme peut être saisonnier et exercer une pression sur les milieux.</p><h2>4. Des territoires connectés</h2><p>Ports, aéroports, routes, voies ferrées, réseaux numériques, main-d’œuvre et marchés influencent la localisation des activités. La mondialisation relie les espaces productifs à des chaînes internationales : conception, fabrication et vente peuvent avoir lieu dans des pays différents.</p><aside class=\"lesson-callout\">Pour analyser un espace productif, localise-le, nomme l’activité, cite un aménagement ou un acteur et explique ses connexions.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Qu’est-ce qu’un espace productif ?","options":["Un territoire organisé pour produire des richesses","Un espace exclusivement naturel","Une zone sans activité"],"correct":0,"explanation":"Un espace productif regroupe des activités et aménagements qui produisent biens ou services."},{"text":"Quel exemple est une activité agricole ?","options":["La viticulture","La banque","La construction aéronautique"],"correct":0,"explanation":"La viticulture est une activité agricole spécialisée dans la culture de la vigne."},{"text":"Pourquoi une industrie s’installe-t-elle près d’un laboratoire ?","options":["Pour bénéficier de la recherche et des compétences","Pour éviter l’innovation","Pour supprimer les échanges"],"correct":0,"explanation":"La proximité des laboratoires et formations facilite l’innovation et le recrutement."},{"text":"Quel secteur appartient aux services ?","options":["Le tourisme","La culture céréalière","L’extraction minière"],"correct":0,"explanation":"Le tourisme mobilise hébergement, transport, restauration et loisirs."},{"text":"Quel facteur favorise une entreprise exportatrice ?","options":["L’accès aux réseaux de transport","L’absence de connexion","L’éloignement des marchés"],"correct":0,"explanation":"Les infrastructures facilitent l’approvisionnement et l’expédition des produits."},{"text":"Que signifie l’insertion dans la mondialisation ?","options":["Être relié aux réseaux et marchés internationaux","Ne commercer qu’avec son quartier","Ne dépendre d’aucun échange"],"correct":0,"explanation":"Les entreprises et territoires échangent, investissent et vendent à différentes échelles."}]},{"id":"espaces-faible-densite","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Géographie · Dynamiques territoriales","title":"Les espaces de faible densité","heading":"Campagnes et montagnes,<br><span>des territoires contrastés.</span>","description":"Comprendre la diversité des espaces peu peuplés, leurs ressources, contraintes et dynamiques.","objectives":"Définir densité, identifier contraintes et ressources et expliquer les politiques d’attractivité.","icon":"⌂","body":"<p><b>Thème 1 · Géographie.</b> Les espaces de faible densité comptent peu d’habitants par km². Ils ne sont ni vides ni uniformes : campagnes, montagnes et espaces ruraux ont des trajectoires différentes.</p><h2>1. Définir et localiser</h2><p>La densité rapporte le nombre d’habitants à une superficie. De nombreux espaces ruraux, massifs montagneux et zones éloignées des métropoles ont une faible densité. Le seuil de 30 habitants par km² est parfois utilisé dans certaines analyses, mais n’est pas une frontière universelle.</p><h2>2. Des contraintes variables</h2><p>La distance aux emplois, services et transports peut compliquer le quotidien. Certains territoires connaissent vieillissement, fermeture de commerces ou éloignement des soins. Le relief et le climat peuvent compliquer les déplacements en montagne.</p><h2>3. Des ressources et des dynamiques</h2><p>Agriculture, forêts, paysages, patrimoine, énergies renouvelables et tourisme sont des ressources. Certaines communes attirent de nouveaux habitants ou visiteurs ; d’autres perdent de la population. Les trajectoires sont diverses.</p><h2>4. Améliorer l’accessibilité</h2><p>Les collectivités peuvent soutenir les services publics, maisons de santé, mobilités, couverture numérique et rénovation des centres-bourgs. Les choix doivent tenir compte des besoins, des coûts et des milieux.</p><aside class=\"lesson-callout\">Faible densité ne signifie ni absence d’activités, ni pauvreté, ni déclin inévitable. Croise densité, accessibilité, activités, population et ressources.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Comment calcule-t-on la densité ?","options":["Habitants divisés par la superficie","Superficie divisée par les routes","Naissances divisées par les écoles"],"correct":0,"explanation":"La densité rapporte le nombre d’habitants à une superficie, souvent en habitants par km²."},{"text":"Un espace de faible densité est-il vide ?","options":["Oui, personne n’y vit","Non, il est habité mais peu peuplé par km²","Oui, il n’a aucune activité"],"correct":1,"explanation":"Faible densité signifie peu d’habitants par unité de surface, pas absence d’habitants."},{"text":"Quelle ressource peut attirer des visiteurs ?","options":["Le patrimoine naturel et culturel","L’absence de services","La disparition des activités"],"correct":0,"explanation":"Paysages, patrimoine et activités de plein air peuvent favoriser le tourisme."},{"text":"Quel aménagement peut réduire l’isolement ?","options":["Une meilleure desserte et le numérique","La fermeture des routes","La suppression des services"],"correct":0,"explanation":"Transports et numérique améliorent l’accès aux services, emplois et échanges."},{"text":"Quelle affirmation est exacte ?","options":["Tous perdent des habitants","Les trajectoires sont diverses","Tous vivent du tourisme"],"correct":1,"explanation":"Certains gagnent des habitants ou de nouvelles activités, d’autres connaissent des difficultés."},{"text":"Pourquoi étudier un territoire à plusieurs échelles ?","options":["Pour comprendre ses liens régionaux et nationaux","Pour éviter de le localiser","Parce que la densité est partout identique"],"correct":0,"explanation":"Les dynamiques locales dépendent aussi des connexions régionales et nationales."}]},{"id":"amenagement-outremer-france-europe","grade":"3e","subject":"histoire-geographie","subjectName":"Histoire-géographie","domain":"Géographie · Aménagement et UE","title":"Aménagement, outre-mer et Union européenne","heading":"Aménager et coopérer,<br><span>de la commune à l’Europe.</span>","description":"Comprendre les acteurs de l’aménagement, les spécificités ultramarines et la place de la France dans l’UE.","objectives":"Identifier acteurs et objectifs de l’aménagement, caractériser les outre-mer et expliquer les coopérations européennes.","icon":"🇪🇺","body":"<p><b>Thèmes 2 et 3 · Géographie.</b> L’aménagement organise les espaces pour répondre aux besoins, réduire les inégalités et préserver l’environnement. La France agit à plusieurs échelles, de la commune à l’Union européenne.</p><h2>1. Pourquoi aménager ?</h2><p>Les territoires n’ont pas les mêmes emplois, services, transports ou connexions numériques. Les aménagements cherchent à améliorer l’accessibilité, soutenir les espaces fragiles et accompagner les mutations. Ils peuvent aussi provoquer débats sur les coûts, nuisances et impacts écologiques.</p><h2>2. Des acteurs multiples</h2><p>L’État conduit des politiques nationales ; régions, départements, communes et intercommunalités organisent de nombreux projets. L’Union européenne cofinance certains aménagements. Entreprises, associations et habitants participent également.</p><h2>3. Les territoires ultramarins</h2><p>Les territoires ultramarins français se situent dans les océans Atlantique, Indien et Pacifique et en Amérique du Sud. Guadeloupe, Martinique, Guyane, La Réunion et Mayotte sont des DROM. La Polynésie française et la Nouvelle-Calédonie ont des statuts différents. La Guyane est continentale, et non une île. Les outre-mer disposent d’atouts (biodiversité, ressources maritimes, position stratégique) et de contraintes variables (éloignement, insularité, risques naturels, inégalités d’accès aux services).</p><h2>4. La France et l’Union européenne</h2><p>L’Union européenne compte 27 États membres en 2026. Le marché unique facilite la circulation des marchandises, services, capitaux et personnes. L’euro est utilisé par 21 États membres en 2026. L’UE soutient l’agriculture, la recherche, les transports, la transition énergétique et le développement régional. La coopération transfrontalière organise des projets entre régions voisines de plusieurs pays.</p><h2>5. Des territoires connectés au monde</h2><p>Ports, aéroports, métropoles et corridors ferroviaires relient les territoires. La France métropolitaine possède des façades sur la Manche, l’Atlantique et la Méditerranée ; l’outre-mer donne au pays une présence dans plusieurs océans. Les territoires restent cependant inégalement connectés.</p><aside class=\"lesson-callout\">Pour analyser un aménagement : qui décide et finance ? Quel besoin ? Quels bénéficiaires ? Quels effets sur l’environnement ? Pour l’UE, distingue ses 27 membres de la zone euro.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme d’histoire-géographie du cycle 4, classe de 3e, applicable en 2026-2027. Ces synthèses ne remplacent pas l’étude de documents, de cartes et d’exemples menée en classe.</p><p><a href=\"https://www.education.gouv.fr/les-programmes-du-college-470408\" target=\"_blank\" rel=\"noopener\">Ministère : programmes du collège</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Éduscol : cycle 4</a> · <a href=\"https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources histoire-géographie</a></p></details>","questions":[{"text":"Quel est l’objectif de l’aménagement ?","options":["Organiser les espaces et réduire les inégalités","Concentrer tous les services dans une ville","Supprimer les transports"],"correct":0,"explanation":"L’aménagement vise l’accès aux services, la cohésion territoriale et la protection des milieux."},{"text":"Quel acteur peut cofinancer un projet régional ?","options":["L’Union européenne","Une commune uniquement","Un particulier obligatoirement"],"correct":0,"explanation":"L’UE cofinance des projets grâce à des fonds régionaux et de cohésion."},{"text":"Quel territoire ultramarin est situé en Amérique du Sud ?","options":["La Guyane","La Réunion","La Guadeloupe"],"correct":0,"explanation":"La Guyane se situe sur le continent sud-américain."},{"text":"Quel territoire est un DROM ?","options":["La Martinique","La Polynésie française","La Nouvelle-Calédonie"],"correct":0,"explanation":"La Martinique est un département et une région d’outre-mer ; les deux autres ont des statuts différents."},{"text":"Combien d’États membres compte l’UE en 2026 ?","options":["19","27","32"],"correct":1,"explanation":"L’Union européenne compte 27 États membres depuis le retrait du Royaume-Uni."},{"text":"Tous les membres de l’UE utilisent-ils l’euro ?","options":["Oui, tous","Non, certains conservent leur monnaie","Seuls les pays hors UE"],"correct":1,"explanation":"Plusieurs États membres n’ont pas adopté l’euro."}]}]);
})();
window.COLLEGE_COURSES.push(...[{"id":"calcul-litteral-equations","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Nombres et calculs","icon":"x²","title":"Calcul littéral et équations : développer, factoriser, résoudre","heading":"Calcul littéral et équations : développer, factoriser, résoudre","description":"Développer, factoriser, utiliser les identités remarquables et résoudre une équation.","objectives":"Développer, factoriser, utiliser les identités remarquables et résoudre une équation.","body":"<h2>Réduire et développer</h2><p>On regroupe les termes de même nature : 3x+5x-2=8x-2. Par distributivité, 3(x+4)=3x+12. Avec deux parenthèses : (x+2)(x+5)=x²+7x+10.</p><h2>Factoriser</h2><p>Transformer une somme en produit en repérant un facteur commun : 5x+15=5(x+3).</p><h2>Identités remarquables</h2><div class=\"lesson-formula\">(a+b)²=a²+2ab+b²<br>(a-b)²=a²-2ab+b²<br>(a-b)(a+b)=a²-b²</div><h2>Équations</h2><p>Effectuer la même opération sur les deux membres : 3x+5=17, donc 3x=12 puis x=4. Vérifier en remplaçant x dans l’égalité initiale.</p><aside class=\"lesson-callout\">Développer transforme un produit en somme ; factoriser fait l’inverse. Pour résoudre, on isole l’inconnue sans rompre l’égalité.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Réduis 4x+3x-2","options":["7x-2","7x-2x","12x-2"],"correct":0,"explanation":"4x et 3x sont de même nature : leur somme est 7x. Le terme constant reste séparé."},{"text":"Développe 5(x-3)","options":["5x-3","5x-15","5x+15"],"correct":1,"explanation":"On distribue 5 : 5×x + 5×(-3) = 5x-15."},{"text":"Factorise 6x+18","options":["6(x+3)","6(x+18)","3(6x+18)"],"correct":0,"explanation":"Le facteur commun est 6 : 6x+18=6(x+3)."},{"text":"Développe (x+4)²","options":["x²+16","x²+8x+16","x²+4x+16"],"correct":1,"explanation":"Avec (a+b)²=a²+2ab+b², on obtient x²+8x+16."},{"text":"Résous 2x+7=19","options":["x=13","x=6","x=12"],"correct":1,"explanation":"On soustrait 7 puis on divise par 2 : 2x=12, donc x=6."},{"text":"Factorise x²-25","options":["(x-5)²","(x-5)(x+5)","(x-25)(x+1)"],"correct":1,"explanation":"Identité a²-b²=(a-b)(a+b), avec a=x et b=5."}]},{"id":"fonctions-lineaires-affines","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Organisation et gestion de données","icon":"f(x)","title":"Fonctions linéaires et affines : lire et calculer","heading":"Fonctions linéaires et affines : lire et calculer","description":"Reconnaître les fonctions linéaires et affines, calculer images et antécédents et lire un graphique.","objectives":"Reconnaître les fonctions linéaires et affines, calculer images et antécédents et lire un graphique.","body":"<h2>Image et antécédent</h2><p>Une fonction f associe à x un unique nombre f(x). Si f(x)=3x+2, alors f(4)=14 : 14 est l’image de 4. Chercher un antécédent de 11 revient à résoudre 3x+2=11, donc x=3.</p><h2>Fonction linéaire</h2><p>f(x)=ax modélise une situation de proportionnalité. Sa représentation est une droite passant par l’origine ; a est le coefficient directeur.</p><h2>Fonction affine</h2><p>f(x)=ax+b. Sa représentation est une droite et b est l’ordonnée à l’origine. Si b est non nul, la situation n’est pas proportionnelle.</p><h2>Lire un graphique</h2><p>Pour lire une image, on part de l’abscisse x jusqu’à la droite puis on lit l’ordonnée. Pour un antécédent, on part de l’ordonnée.</p><aside class=\"lesson-callout\">Si f(2)=7, 7 est l’image de 2 et 2 est un antécédent de 7.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Si f(x)=2x+3, image de 4 ?","options":["11","14","9"],"correct":0,"explanation":"On remplace x par 4 : f(4)=2×4+3=8+3=11."},{"text":"Si f(x)=5x, image de -2 ?","options":["10","-10","3"],"correct":1,"explanation":"On remplace x par -2 : f(-2)=5×(-2)=-10."},{"text":"Pour f(x)=3x+1, antécédent de 10 ?","options":["3","9","27"],"correct":0,"explanation":"On résout 3x+1=10 : on soustrait 1 puis on divise par 3, donc x=3."},{"text":"Quelle expression est linéaire ?","options":["f(x)=4x","f(x)=4x+2","f(x)=x²"],"correct":0,"explanation":"Une fonction linéaire est de la forme f(x)=ax."},{"text":"La droite d’une fonction linéaire passe toujours…","options":["Par (0 ; 0)","Par (1 ; 0)","Par (0 ; 1)"],"correct":0,"explanation":"f(0)=a×0=0 : l’origine appartient à la droite."},{"text":"Dans f(x)=-2x+5, ordonnée à l’origine ?","options":["-2","5","3"],"correct":1,"explanation":"Dans ax+b, b est l’ordonnée à l’origine : ici 5."}]},{"id":"statistiques-probabilites","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Organisation et gestion de données","icon":"%","title":"Statistiques et probabilités : analyser des données","heading":"Statistiques et probabilités : analyser des données","description":"Calculer moyenne, médiane et étendue, puis déterminer des probabilités simples.","objectives":"Calculer moyenne, médiane et étendue, puis déterminer des probabilités simples.","body":"<h2>Effectif et fréquence</h2><p>L’effectif compte les valeurs. La fréquence est l’effectif d’une catégorie divisé par l’effectif total ; en pourcentage, on multiplie par 100.</p><h2>Moyenne</h2><p>On additionne les valeurs puis on divise par leur nombre. Avec des effectifs, on calcule une moyenne pondérée.</p><h2>Médiane et étendue</h2><p>On range la série. La médiane partage les valeurs en deux groupes de même effectif ; si l’effectif est pair, on moyenne les deux valeurs centrales. L’étendue vaut maximum moins minimum.</p><h2>Probabilités</h2><p>En équiprobabilité, P(A)=nombre d’issues favorables/nombre total d’issues. Une probabilité est comprise entre 0 et 1.</p><aside class=\"lesson-callout\">La moyenne utilise toutes les valeurs ; la médiane dépend de leur position.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Moyenne de 6, 8 et 10 ?","options":["8","24","9"],"correct":0,"explanation":"On additionne les trois valeurs puis on divise par 3 : 24/3=8."},{"text":"Médiane de 2, 4, 7, 9, 12 ?","options":["4","7","9"],"correct":1,"explanation":"Cinq valeurs sont rangées : la troisième, 7, est au centre."},{"text":"Étendue de 3, 5, 8, 11 ?","options":["8","11","14"],"correct":0,"explanation":"Étendue=maximum-minimum=11-3=8."},{"text":"Sur 25 élèves, 10 viennent à vélo. Fréquence ?","options":["10 %","25 %","40 %"],"correct":2,"explanation":"La fréquence est 10 divisé par 25, soit 0,4. En pourcentage, cela donne 40 %."},{"text":"Dé équilibré : probabilité d’obtenir 5 ?","options":["1/6","1/5","5/6"],"correct":0,"explanation":"Une issue favorable sur six issues équiprobables : 1/6."},{"text":"Dé équilibré : probabilité d’obtenir un nombre pair ?","options":["1/6","1/2","2/3"],"correct":1,"explanation":"Issues paires 2, 4 et 6 : 3/6=1/2."}]},{"id":"trigonometrie-triangle-rectangle","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Espace et géométrie","icon":"sin","title":"Trigonométrie : calculer un angle ou une longueur","heading":"Trigonométrie : calculer un angle ou une longueur","description":"Choisir sinus, cosinus ou tangente pour calculer une longueur ou un angle.","objectives":"Choisir sinus, cosinus ou tangente pour calculer une longueur ou un angle.","body":"<h2>Repérer les côtés</h2><p>L’hypoténuse est opposée à l’angle droit. Par rapport à l’angle aigu choisi, on distingue côté opposé et côté adjacent.</p><h2>Les trois relations</h2><div class=\"lesson-formula\">sin(angle)=opposé/hypoténuse<br>cos(angle)=adjacent/hypoténuse<br>tan(angle)=opposé/adjacent</div><h2>Calculer</h2><p>Si l’hypoténuse mesure 10 cm et l’angle 30°, le côté opposé vaut 10×sin(30°)=5 cm. Si opposé=3 et hypoténuse=6, l’angle vaut sin⁻¹(0,5)=30°. Régler la calculatrice en degrés.</p><aside class=\"lesson-callout\">Opposé et adjacent dépendent de l’angle choisi. La trigonométrie s’utilise dans un triangle rectangle.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Quel côté est opposé à l’angle droit ?","options":["Le côté adjacent","L’hypoténuse","Le côté opposé à l’angle aigu"],"correct":1,"explanation":"L’hypoténuse est le côté opposé à l’angle droit."},{"text":"Quelle relation utilise opposé et hypoténuse ?","options":["sinus","cosinus","tangente"],"correct":0,"explanation":"sin(angle)=côté opposé/hypoténuse."},{"text":"sin(30°)=0,5 et hypoténuse=8 cm. Côté opposé ?","options":["16 cm","4 cm","8,5 cm"],"correct":1,"explanation":"Opposé=hypoténuse×sinus=8×0,5=4 cm."},{"text":"Quelle relation utilise adjacent et hypoténuse ?","options":["tangente","sinus","cosinus"],"correct":2,"explanation":"cos(angle)=côté adjacent/hypoténuse."},{"text":"Opposé=3 et adjacent=4. Quel rapport ?","options":["tan(angle)=3/4","sin(angle)=3/4","cos(angle)=3/4"],"correct":0,"explanation":"La tangente est opposé/adjacent : 3/4."},{"text":"Pour sin(30°), quel mode choisir ?","options":["Radians","Degrés","Pourcentage"],"correct":1,"explanation":"L’angle est en degrés : régler la calculatrice en mode DEG."}]},{"id":"transformations-geometriques","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Espace et géométrie","icon":"↻","title":"Transformations géométriques : homothétie et rotations","heading":"Transformations géométriques : homothétie et rotations","description":"Reconnaître translations, rotations, symétries et homothéties et utiliser leurs propriétés.","objectives":"Reconnaître translations, rotations, symétries et homothéties et utiliser leurs propriétés.","body":"<h2>Translation et rotation</h2><p>Une translation déplace tous les points du même vecteur. Une rotation tourne autour d’un centre selon un angle et un sens donnés.</p><h2>Symétries</h2><p>La symétrie axiale est un reflet par rapport à une droite ; la symétrie centrale est un demi-tour autour d’un point. Elles conservent longueurs et angles.</p><h2>Homothétie</h2><p>De centre O et de rapport k, elle envoie M sur M' aligné avec O et M, avec OM'=|k|×OM. Si k est négatif, l’image est de l’autre côté du centre.</p><h2>Agrandir et réduire</h2><p>Si |k|&gt;1, c’est un agrandissement ; entre 0 et 1, une réduction. Les longueurs sont multipliées par |k| et les aires par k².</p><aside class=\"lesson-callout\">Une homothétie conserve les angles mais pas les longueurs. Translation, rotation et symétries conservent les longueurs.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Une translation déplace chaque point…","options":["Du même vecteur","Autour d’un centre","En changeant sa taille"],"correct":0,"explanation":"Tous les points subissent le même déplacement défini par le vecteur."},{"text":"Une rotation est définie par…","options":["Un axe et une distance","Un centre, un angle et un sens","Un rapport uniquement"],"correct":1,"explanation":"Une rotation tourne autour d’un centre avec un angle et un sens donnés."},{"text":"Quel reflet est défini par une droite ?","options":["Symétrie axiale","Symétrie centrale","Translation"],"correct":0,"explanation":"La symétrie axiale est le reflet par rapport à un axe."},{"text":"Une homothétie de rapport 3 est…","options":["Une réduction","Un agrandissement","Une rotation"],"correct":1,"explanation":"La valeur absolue du rapport est supérieure à 1 : les longueurs triplent."},{"text":"Une homothétie de rapport 2 multiplie l’aire par…","options":["2","4","8"],"correct":1,"explanation":"Les aires sont multipliées par k² : 2²=4."},{"text":"Rapport d’homothétie -0,5 : facteur des longueurs ?","options":["-0,5","0,5","-1"],"correct":1,"explanation":"Une longueur est multipliée par |k|=0,5 ; le signe indique le côté du centre."}]},{"id":"volumes-sections-solides","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Grandeurs et mesures, espace et géométrie","icon":"▱","title":"Volumes et sections : calculer dans l’espace","heading":"Volumes et sections : calculer dans l’espace","description":"Calculer les volumes de solides usuels, comprendre les sections et les effets d’un agrandissement.","objectives":"Calculer les volumes de solides usuels, comprendre les sections et les effets d’un agrandissement.","body":"<h2>Prisme et cylindre</h2><p>Volume d’un prisme droit : aire de base × hauteur. Pour un cylindre : V=πr²h.</p><h2>Pyramide et cône</h2><p>Volume d’une pyramide : (aire de base × hauteur)/3. Pour un cône : V=πr²h/3.</p><h2>Boule</h2><p>V=(4/3)πr³. Le rayon est la moitié du diamètre.</p><h2>Sections et agrandissement</h2><p>Une section est la figure obtenue lorsqu’un plan coupe un solide. Un plan parallèle aux bases d’un cylindre donne un disque de même rayon. Si les longueurs sont multipliées par k, les aires le sont par k² et les volumes par k³.</p><aside class=\"lesson-callout\">Garde les unités cohérentes : cm³ pour un volume calculé en centimètres, m³ en mètres.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Prisme : base 12 cm² et hauteur 5 cm. Volume ?","options":["17 cm³","60 cm³","30 cm³"],"correct":1,"explanation":"V=aire de base×hauteur=12×5=60 cm³."},{"text":"Cylindre : rayon 2 cm et hauteur 3 cm. Volume ?","options":["6π cm³","12π cm³","24π cm³"],"correct":1,"explanation":"On applique V=πr²h : π×2²×3=12π cm³."},{"text":"Formule du volume d’une pyramide ?","options":["Aire base×hauteur","(Aire base×hauteur)/3","Aire base+hauteur"],"correct":1,"explanation":"Le volume d’une pyramide est le tiers du prisme de même base et hauteur."},{"text":"Rayon d’une boule de diamètre 10 cm ?","options":["10 cm","20 cm","5 cm"],"correct":2,"explanation":"Le rayon vaut la moitié du diamètre : 10/2=5 cm."},{"text":"Longueurs multipliées par 3. Volumes multipliés par…","options":["3","9","27"],"correct":2,"explanation":"Les volumes sont multipliés par le cube du rapport : 3³=27."},{"text":"Section d’un cylindre parallèle aux bases ?","options":["Un disque","Un rectangle","Un triangle"],"correct":0,"explanation":"La section est un disque de même rayon que les bases."}]},{"id":"algorithmique-python","grade":"3e","subject":"mathematiques","subjectName":"Mathématiques","domain":"Algorithmique et programmation","icon":"{ }","title":"Algorithmique et programmation : construire un programme","heading":"Algorithmique et programmation : construire un programme","description":"Lire un algorithme, utiliser variables, conditions et boucles et suivre un programme simple en Python.","objectives":"Lire un algorithme, utiliser variables, conditions et boucles et suivre un programme simple en Python.","body":"<h2>Algorithme et variables</h2><p>Un algorithme est une suite finie d’instructions. Une variable stocke une valeur : en Python, x=4 affecte 4 à x ; x=x+1 augmente sa valeur de 1.</p><h2>Conditions</h2><p>if x&gt;0: exécute un bloc si x est positif ; else: décrit le cas contraire. L’indentation délimite les blocs.</p><h2>Boucles</h2><p>for répète un nombre déterminé de fois. while répète tant qu’une condition est vraie ; il faut prévoir qu’elle puisse devenir fausse.</p><h2>Suivre un programme</h2><p>On exécute les instructions dans l’ordre et on note les valeurs successives des variables dans un tableau de suivi. range(4) produit 0, 1, 2 et 3.</p><aside class=\"lesson-callout\">En Python, la borne finale de range n’est pas incluse.</aside><details class=\"lesson-sources\"><summary>Références du programme</summary><p>Programme de mathématiques du cycle 4, applicable en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2020/Special1/MENE2003091A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Que fait x = 7 ?","options":["Compare x à 7","Affecte 7 à x","Ajoute 7 à x"],"correct":1,"explanation":"Le signe = réalise une affectation : x reçoit la valeur 7."},{"text":"x vaut 4. Après x=x+3, que vaut x ?","options":["4","7","12"],"correct":1,"explanation":"On ajoute 3 à l’ancienne valeur 4 : la nouvelle valeur est 7."},{"text":"Que signifie if x > 0 ?","options":["Répéter tant que x est positif","Exécuter si x est positif","Affecter 0 à x"],"correct":1,"explanation":"if introduit une condition : le bloc s’exécute si x>0."},{"text":"Combien de valeurs produit range(5) ?","options":["4","5","6"],"correct":1,"explanation":"range(5) produit 0,1,2,3,4, soit cinq valeurs."},{"text":"Quelle boucle répète tant qu’une condition est vraie ?","options":["if","while","return"],"correct":1,"explanation":"while exécute son bloc tant que la condition reste vraie."},{"text":"s=0 puis trois fois s=s+2. Valeur finale ?","options":["3","5","6"],"correct":2,"explanation":"On ajoute 2 trois fois : 0→2→4→6."}]}]);

  // Compléments de sciences de 3e : physique-chimie, SVT et technologie.
  window.COLLEGE_COURSES.push(...[{"id":"transformations-chimiques","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"Physique-chimie · Matière","icon":"⚗","title":"Transformations chimiques et conservation des atomes","heading":"Transformations chimiques et conservation des atomes","description":"Distinguer transformation physique et chimique, identifier réactifs et produits et comprendre la conservation des atomes.","objectives":"Distinguer transformation physique et chimique, identifier réactifs et produits et comprendre la conservation des atomes.","body":"<p><b>Sciences · 3e · Physique-chimie · Matière</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Un changement d'état est une transformation physique : l'eau liquide et la vapeur restent constituées de molécules H₂O. Dans une transformation chimique, des substances initiales disparaissent et de nouvelles substances apparaissent. Les substances consommées sont les réactifs ; celles formées sont les produits. On écrit un bilan avec les réactifs à gauche et les produits à droite : carbone + dioxygène → dioxyde de carbone. Une réaction réorganise les atomes : ils ne disparaissent pas et ne sont pas créés. Le nombre de chaque type d'atome doit être identique avant et après. Les molécules peuvent changer, mais les atomes sont conservés. Pour équilibrer une équation, on ajuste les coefficients devant les formules sans modifier les formules elles-mêmes. Une combustion nécessite un combustible et un comburant et peut libérer de l'énergie.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>Physique-chimie : programme du cycle 4 publié au BO n°31 de 2020, en vigueur en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5739/ressources-d-accompagnement-du-programme-de-physique-chimie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"La vaporisation de l'eau est…","options":["Une transformation chimique","Une transformation physique","Une combustion"],"correct":1,"explanation":"L'eau reste constituée de molécules H₂O : seul l'état physique change."},{"text":"Les substances consommées sont les…","options":["Produits","Réactifs","Solvants"],"correct":1,"explanation":"Les réactifs sont présents au départ et sont consommés au cours de la réaction."},{"text":"Dans carbone + dioxygène → dioxyde de carbone, le produit est…","options":["Le carbone","Le dioxygène","Le dioxyde de carbone"],"correct":2,"explanation":"Le produit est la substance formée, placée à droite de la flèche."},{"text":"Lors d'une réaction, les atomes…","options":["Sont détruits","Sont réorganisés et conservés","Disparaissent"],"correct":1,"explanation":"Les atomes se réarrangent pour former de nouvelles molécules ; chaque type est conservé."},{"text":"Quel indice peut signaler une transformation chimique ?","options":["La formation d'un gaz nouveau","Un objet déplacé","Un liquide transvasé"],"correct":0,"explanation":"La formation d'un gaz peut être un indice à confronter aux autres observations."},{"text":"Pourquoi équilibrer une équation chimique ?","options":["Conserver le nombre d'atomes de chaque élément","Agrandir les molécules","Changer les réactifs"],"correct":0,"explanation":"Les coefficients ajustent les quantités pour conserver chaque type d'atome avant et après."}]},{"id":"mouvements-forces","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"Physique-chimie · Mouvements et interactions","icon":"→","title":"Mouvements, vitesse et forces","heading":"Mouvements, vitesse et forces","description":"Décrire un mouvement, calculer une vitesse et comprendre les effets d'une force et le poids.","objectives":"Décrire un mouvement, calculer une vitesse et comprendre les effets d'une force et le poids.","body":"<p><b>Sciences · 3e · Physique-chimie · Mouvements et interactions</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Un mouvement se décrit par rapport à un référentiel : un passager assis est immobile par rapport au train mais en mouvement par rapport au quai. La trajectoire peut être rectiligne, circulaire ou curviligne. La vitesse moyenne se calcule par v=d/t. Une force peut modifier le mouvement ou déformer un objet ; on la représente par une flèche précisant point d'application, direction, sens et valeur. La masse se mesure en kilogrammes avec une balance ; le poids est une force gravitationnelle mesurée en newtons. Près de la Terre, P=m×g avec g≈9,8 N/kg. La masse reste identique sur la Lune, mais le poids y est plus faible car la gravité est différente. Les forces peuvent se compenser ou produire une modification du mouvement.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>Physique-chimie : programme du cycle 4 publié au BO n°31 de 2020, en vigueur en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5739/ressources-d-accompagnement-du-programme-de-physique-chimie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Pourquoi préciser un référentiel ?","options":["Le mouvement dépend de l'observateur choisi","La vitesse ne se calcule pas","Un objet n'a qu'une trajectoire"],"correct":0,"explanation":"Le même objet peut être immobile dans un référentiel et en mouvement dans un autre."},{"text":"30 km parcourus en 1,5 h : vitesse moyenne ?","options":["20 km/h","45 km/h","31,5 km/h"],"correct":0,"explanation":"La vitesse moyenne est la distance divisée par la durée : 30 ÷ 1,5 = 20 km/h."},{"text":"Un point d'une roue tourne autour de son axe selon une trajectoire…","options":["Rectiligne","Circulaire","Toujours immobile"],"correct":1,"explanation":"Par rapport au centre de la roue, le point décrit un cercle."},{"text":"Une force peut…","options":["Modifier le mouvement ou déformer un objet","Modifier la masse","Seulement chauffer"],"correct":0,"explanation":"Une force peut accélérer, ralentir, dévier ou déformer un objet."},{"text":"Quelle unité mesure le poids ?","options":["Kilogramme","Newton","Mètre"],"correct":1,"explanation":"Le poids est une force ; son unité est le newton (N)."},{"text":"Poids d'une masse de 2 kg avec g=10 N/kg ?","options":["2 N","5 N","20 N"],"correct":2,"explanation":"Le poids se calcule par P=m×g : 2 kg multipliés par 10 N/kg donnent 20 N."}]},{"id":"electricite-signaux","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"Physique-chimie · Énergie et signaux","icon":"⚡","title":"Électricité, énergie et signaux","heading":"Électricité, énergie et signaux","description":"Analyser un circuit, calculer puissance et énergie et comprendre les signaux lumineux et sonores.","objectives":"Analyser un circuit, calculer puissance et énergie et comprendre les signaux lumineux et sonores.","body":"<p><b>Sciences · 3e · Physique-chimie · Énergie et signaux</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Un circuit fermé permet au courant de circuler. En série, les dipôles sont sur une seule boucle ; en dérivation, plusieurs branches existent. L'intensité se mesure en ampères avec un ampèremètre branché en série. La tension se mesure en volts avec un voltmètre branché en dérivation. La puissance s'exprime en watts et se calcule par P=U×I ; l'énergie consommée vaut E=P×t. Un appareil convertit l'énergie électrique en lumière, chaleur, mouvement ou son. La lumière se propage dans le vide à environ 300 000 km/s ; le son nécessite un milieu matériel et se propage dans l'air à environ 340 m/s. La fréquence f indique le nombre de périodes par seconde et f=1/T. Un signal transporte une information d'une source vers un récepteur. Les expériences scolaires utilisent des alimentations adaptées, jamais le secteur directement.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>Physique-chimie : programme du cycle 4 publié au BO n°31 de 2020, en vigueur en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5739/ressources-d-accompagnement-du-programme-de-physique-chimie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Comment branche-t-on un ampèremètre ?","options":["En série","En dérivation","À la place du générateur"],"correct":0,"explanation":"L'ampèremètre mesure l'intensité qui traverse le dipôle ; il se branche en série."},{"text":"Quelle unité correspond à la tension ?","options":["Ampère","Volt","Watt"],"correct":1,"explanation":"La tension électrique se mesure en volts (V)."},{"text":"Un appareil fonctionne sous 12 V et 2 A. Puissance ?","options":["6 W","10 W","24 W"],"correct":2,"explanation":"La puissance électrique vaut tension multipliée par intensité : 12 V × 2 A = 24 W."},{"text":"Une lampe de 60 W fonctionne 3 h. Énergie ?","options":["20 Wh","180 Wh","180 W"],"correct":1,"explanation":"L'énergie consommée est la puissance multipliée par la durée : 60 W × 3 h = 180 Wh."},{"text":"Dans quel milieu le son ne se propage-t-il pas ?","options":["L'air","L'eau","Le vide"],"correct":2,"explanation":"Le son est une vibration mécanique qui nécessite un milieu matériel."},{"text":"Une période dure 0,01 s. Fréquence ?","options":["0,01 Hz","10 Hz","100 Hz"],"correct":2,"explanation":"La fréquence est l'inverse de la période : 1 seconde divisée par 0,01 seconde donne 100 Hz."}]},{"id":"tectonique-seismes-volcans","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"SVT · Planète Terre et environnement","icon":"🌋","title":"La Terre dynamique : plaques, séismes et volcans","heading":"La Terre dynamique : plaques, séismes et volcans","description":"Expliquer la dynamique de la lithosphère et relier les mouvements des plaques aux séismes et au volcanisme.","objectives":"Expliquer la dynamique de la lithosphère et relier les mouvements des plaques aux séismes et au volcanisme.","body":"<p><b>Sciences · 3e · SVT · Planète Terre et environnement</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>La lithosphère rigide est divisée en plaques qui se déplacent lentement sur des matériaux plus déformables du manteau supérieur. Aux dorsales, les plaques s'écartent et de la lithosphère océanique se forme. Dans certaines zones de convergence, une plaque plonge sous une autre : c'est la subduction. Une collision continentale peut former des chaînes de montagnes. Les contraintes accumulées dans les roches peuvent provoquer une rupture brutale : un séisme libère de l'énergie et produit des ondes sismiques. Le volcanisme est fréquent à certaines limites de plaques, mais tous les volcans ne se situent pas dans le même contexte. Un aléa naturel devient un risque lorsqu'il menace des populations ou des biens vulnérables. Cartographie, normes de construction, surveillance et préparation réduisent les conséquences ; elles n'empêchent pas l'aléa.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>SVT : programme du cycle 4 publié au BO n°31 de 2020, en vigueur en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5742/ressources-d-accompagnement-du-programme-de-sciences-de-la-vie-et-de-la-terre-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"La lithosphère est-elle immobile ?","options":["Oui","Non, elle est divisée en plaques mobiles","Elle est composée d'eau"],"correct":1,"explanation":"Les plaques lithosphériques se déplacent lentement les unes par rapport aux autres."},{"text":"Que se passe-t-il au niveau d'une dorsale ?","options":["Les plaques s'écartent et de la lithosphère se forme","Les continents disparaissent","Une plaque plonge toujours"],"correct":0,"explanation":"À une dorsale, l'écartement permet la formation de lithosphère océanique."},{"text":"Le plongement d'une plaque sous une autre s'appelle…","options":["Érosion","Subduction","Sédimentation"],"correct":1,"explanation":"La subduction est une forme de convergence où une plaque plonge sous une autre."},{"text":"Qu'est-ce qui produit les ondes sismiques ?","options":["La rupture brutale de roches sous contrainte","La photosynthèse","La rotation quotidienne"],"correct":0,"explanation":"La rupture libère brusquement de l'énergie qui se propage sous forme d'ondes sismiques."},{"text":"Quand un aléa devient-il un risque ?","options":["Dès qu'il existe","Lorsqu'il menace des enjeux exposés et vulnérables","Seulement après une éruption"],"correct":1,"explanation":"Le risque dépend de l'aléa, de l'exposition et de la vulnérabilité des populations et des biens."},{"text":"Quelle mesure réduit la vulnérabilité face aux séismes ?","options":["Ignorer les consignes","Construire selon des normes parasismiques","Supprimer les stations de mesure"],"correct":1,"explanation":"Les normes parasismiques améliorent la résistance des bâtiments et réduisent les dommages."}]},{"id":"genetique-evolution","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"SVT · Vivant et évolution","icon":"🧬","title":"Génétique, hérédité et évolution","heading":"Génétique, hérédité et évolution","description":"Relier ADN, chromosomes, gènes et allèles et comprendre la diversité et la sélection naturelle.","objectives":"Relier ADN, chromosomes, gènes et allèles et comprendre la diversité et la sélection naturelle.","body":"<p><b>Sciences · 3e · SVT · Vivant et évolution</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Dans le noyau de nombreuses cellules, l'information génétique est portée par l'ADN organisé en chromosomes. Un gène est une portion d'ADN ; un même gène peut exister sous différentes versions appelées allèles. Les caractères observables résultent souvent de plusieurs gènes et de l'environnement. Lors de la reproduction sexuée, chaque parent transmet une partie de son information génétique ; la fécondation réunit les informations des deux gamètes. Une mutation modifie la séquence de l'ADN et peut créer un nouvel allèle. La biodiversité se décrit aux niveaux des écosystèmes, des espèces et de la diversité génétique. Dans une population, certains caractères héréditaires peuvent procurer un avantage de survie ou de reproduction. Les individus qui les portent laissent en moyenne davantage de descendants : la fréquence de certains allèles peut augmenter au fil des générations. C'est la sélection naturelle ; elle n'anticipe pas les besoins.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>SVT : programme du cycle 4 publié au BO n°31 de 2020, en vigueur en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5742/ressources-d-accompagnement-du-programme-de-sciences-de-la-vie-et-de-la-terre-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Quelle molécule porte l'information génétique ?","options":["ADN","Amidon","Eau"],"correct":0,"explanation":"L'ADN porte l'information génétique dans les cellules."},{"text":"Un gène est…","options":["Une cellule entière","Une portion d'ADN","Un organe"],"correct":1,"explanation":"Un gène est une portion d'ADN qui contribue à un caractère ou à un produit fonctionnel."},{"text":"Différentes versions d'un même gène : ce sont des…","options":["Allèles","Organes","Espèces"],"correct":0,"explanation":"Les allèles sont les différentes versions possibles d'un même gène."},{"text":"La fécondation…","options":["Réunit les informations des deux gamètes","Efface les chromosomes","Produit toujours un clone"],"correct":0,"explanation":"La fécondation réunit les informations des deux gamètes et combine leurs informations génétiques."},{"text":"Quel phénomène peut créer de nouveaux allèles ?","options":["Les mutations","La digestion","La respiration"],"correct":0,"explanation":"Une mutation modifie la séquence d'ADN et peut faire apparaître un nouvel allèle."},{"text":"L'évolution biologique concerne principalement…","options":["Les populations au fil des générations","Un individu en une journée","Les roches uniquement"],"correct":0,"explanation":"L'évolution correspond aux changements héréditaires des populations au fil des générations."}]},{"id":"systeme-nerveux-effort","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"SVT · Corps humain et santé","icon":"🧠","title":"Système nerveux, effort physique et santé","heading":"Système nerveux, effort physique et santé","description":"Comprendre la communication nerveuse et les adaptations de l'organisme pendant l'effort.","objectives":"Comprendre la communication nerveuse et les adaptations de l'organisme pendant l'effort.","body":"<p><b>Sciences · 3e · SVT · Corps humain et santé</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Les organes sensoriels détectent des informations du milieu. Des messages nerveux circulent dans les nerfs vers les centres nerveux, notamment le cerveau et la moelle épinière. Une réponse motrice est ensuite transmise aux muscles. Le cerveau traite les informations et participe à la commande des mouvements volontaires ; certains réflexes sont rapides et mettent en jeu la moelle épinière. Lors d'un effort, les muscles consomment davantage de dioxygène et de nutriments. La fréquence cardiaque et la ventilation augmentent pour apporter les ressources et éliminer davantage de dioxyde de carbone. Une activité physique régulière, le sommeil, une alimentation équilibrée et l'absence de tabac contribuent à la santé. Le cours existant sur l'immunité et la vaccination complète cette partie sur le corps humain et la santé.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>SVT : programme du cycle 4 publié au BO n°31 de 2020, en vigueur en 3e en 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5742/ressources-d-accompagnement-du-programme-de-sciences-de-la-vie-et-de-la-terre-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Quel organe traite de nombreuses informations sensorielles ?","options":["Le cerveau","Le foie","L'estomac"],"correct":0,"explanation":"Le cerveau reçoit et traite de nombreuses informations sensorielles et participe aux réponses."},{"text":"Par quelles structures les messages nerveux circulent-ils ?","options":["Les nerfs","Les os uniquement","Les vaisseaux lymphatiques"],"correct":0,"explanation":"Les nerfs contiennent des fibres nerveuses qui transmettent les messages."},{"text":"Pendant un effort, la fréquence cardiaque augmente pour…","options":["Apporter davantage de sang aux muscles","Arrêter la respiration","Diminuer l'apport en dioxygène"],"correct":0,"explanation":"Le débit sanguin augmente pour apporter davantage de dioxygène et de nutriments aux muscles actifs."},{"text":"Quel gaz les muscles consomment-ils davantage lors d'un effort aérobie ?","options":["Dioxygène","Dioxyde de carbone","Azote"],"correct":0,"explanation":"Les cellules musculaires utilisent le dioxygène pour la respiration cellulaire."},{"text":"Quel ensemble contribue à préserver la santé ?","options":["Sommeil, activité physique et alimentation équilibrée","Privation de sommeil et sédentarité","Tabac et absence d'activité"],"correct":0,"explanation":"Ces habitudes contribuent au bon fonctionnement de l'organisme et à la prévention de maladies."},{"text":"Un réflexe est généralement…","options":["Une réponse rapide et involontaire","Une décision consciente toujours lente","Une réaction sans système nerveux"],"correct":0,"explanation":"Un réflexe est une réponse rapide et involontaire qui met en jeu un circuit nerveux."}]},{"id":"analyser-systemes-techniques","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"Technologie · Usages et interactions","icon":"⚙","title":"Analyser un objet et un système technique","heading":"Analyser un objet et un système technique","description":"Identifier le besoin, les fonctions, les contraintes et les interactions d'un objet technique.","objectives":"Identifier le besoin, les fonctions, les contraintes et les interactions d'un objet technique.","body":"<p><b>Sciences · 3e · Technologie · Usages et interactions</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Un objet technique est conçu pour répondre à un besoin. La fonction d'usage exprime le service rendu : éclairer, transporter, communiquer ou mesurer. Pour assurer cette fonction, l'objet mobilise plusieurs fonctions techniques. Les choix de conception tiennent compte de contraintes : sécurité, coût, dimensions, matériaux, ergonomie, environnement et performances. Un cahier des charges précise les critères attendus. Un système échange avec son environnement : énergie, matière, informations et actions de l'utilisateur. Plusieurs solutions techniques peuvent répondre au même besoin ; on les compare selon des critères et des compromis. L'analyse porte aussi sur les usages, les risques et les effets environnementaux pendant le cycle de vie.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>Technologie : programme du cycle 4 publié au BO n°9 de 2024, applicable en 3e dès 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2024/Hebdo9/MENE2402802A\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5745/ressources-d-accompagnement-du-programme-de-technologie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"La fonction d'usage décrit…","options":["Le service rendu à l'utilisateur","La couleur du plastique","Le nom du concepteur"],"correct":0,"explanation":"La fonction d'usage exprime le besoin auquel l'objet apporte une réponse."},{"text":"Quel document formalise les besoins et contraintes ?","options":["Le cahier des charges","Le ticket de caisse","Le mode veille"],"correct":0,"explanation":"Le cahier des charges décrit les fonctions attendues, les critères et les contraintes."},{"text":"Une fonction technique correspond…","options":["À une opération nécessaire pour assurer le service","À une publicité","À une marque commerciale"],"correct":0,"explanation":"Les fonctions techniques sont les opérations permettant de réaliser la fonction d'usage."},{"text":"Quel élément est une contrainte de conception ?","options":["La sécurité des utilisateurs","Le hasard","Une préférence sans lien avec le besoin"],"correct":0,"explanation":"La sécurité est une contrainte essentielle qui influence les choix de conception."},{"text":"Pourquoi étudier les interactions d'un système ?","options":["Pour identifier ses échanges avec l'utilisateur et l'environnement","Pour ignorer son contexte","Pour connaître seulement son prix"],"correct":0,"explanation":"Un système interagit avec les utilisateurs et son environnement par des flux et des actions."},{"text":"Deux solutions peuvent-elles assurer la même fonction ?","options":["Oui","Non, une fonction n'a qu'une solution","Seulement si elles ont la même forme"],"correct":0,"explanation":"Plusieurs solutions techniques peuvent répondre au même besoin avec des compromis différents."}]},{"id":"energie-materiaux-programmation","grade":"3e","subject":"sciences","subjectName":"Sciences","domain":"Technologie · Énergie et information","icon":"♻","title":"Énergie, matériaux et programmation des systèmes","heading":"Énergie, matériaux et programmation des systèmes","description":"Comprendre les chaînes d'énergie et d'information, les matériaux et le cycle de vie des objets.","objectives":"Comprendre les chaînes d'énergie et d'information, les matériaux et le cycle de vie des objets.","body":"<p><b>Sciences · 3e · Technologie · Énergie et information</b> — Cette fiche synthétise les notions et méthodes à maîtriser. Les exemples servent à comprendre les modèles et à raisonner à partir de données.</p><h2>Repères et notions essentielles</h2><p>Un système technique reçoit une énergie, la distribue et la convertit pour produire une action. Un moteur convertit par exemple l'énergie électrique en énergie mécanique. Des capteurs acquièrent des données ; une unité de traitement les analyse et commande des actionneurs. Les matériaux sont choisis selon leurs propriétés : masse, résistance, conductivité, coût, disponibilité et recyclabilité. L'analyse du cycle de vie prend en compte l'extraction, la fabrication, le transport, l'utilisation et la fin de vie. Réparer, réemployer et recycler peuvent réduire certains impacts. Un système automatisé peut appliquer un algorithme : si une température dépasse un seuil, alors activer un ventilateur. On teste plusieurs valeurs d'entrée, on compare les résultats attendus et obtenus et on corrige les erreurs. Les données doivent être pertinentes et protégées.</p><aside class=\"lesson-callout\">Pour réussir, justifie tes réponses à partir d'une observation, d'une mesure, d'un schéma ou d'un modèle. Distingue ce que les données montrent de ce que tu en déduis.</aside><details class=\"lesson-sources\"><summary>Références officielles</summary><p>Technologie : programme du cycle 4 publié au BO n°9 de 2024, applicable en 3e dès 2026-2027.</p><p><a href=\"https://www.education.gouv.fr/bo/2024/Hebdo9/MENE2402802A\" target=\"_blank\" rel=\"noopener\">Programme officiel</a> · <a href=\"https://eduscol.education.gouv.fr/5745/ressources-d-accompagnement-du-programme-de-technologie-au-cycle-4\" target=\"_blank\" rel=\"noopener\">Ressources Éduscol</a></p></details>","questions":[{"text":"Quel est le rôle d'un capteur ?","options":["Acquérir une information","Fournir toujours l'énergie au moteur","Remplacer les actionneurs"],"correct":0,"explanation":"Un capteur mesure ou détecte une grandeur et fournit une information au système."},{"text":"Quel composant convertit souvent l'électricité en mouvement ?","options":["Un moteur","Un bouton décoratif","Un boîtier vide"],"correct":0,"explanation":"Un moteur électrique convertit l'énergie électrique en énergie mécanique."},{"text":"Quelle fonction appartient à la chaîne d'énergie ?","options":["Convertir","Mesurer une température","Afficher une consigne uniquement"],"correct":0,"explanation":"La chaîne d'énergie comporte notamment alimenter, distribuer, convertir et transmettre."},{"text":"Que prend en compte une analyse du cycle de vie ?","options":["Fabrication, transport, usage et fin de vie","Uniquement la couleur","Seulement le jour de l'achat"],"correct":0,"explanation":"L'analyse étudie les étapes de l'extraction des matières à la fin de vie."},{"text":"Dans « si la température dépasse 25 °C », que représente cette phrase ?","options":["Une condition à tester","Un actionneur","Une source d'énergie"],"correct":0,"explanation":"La condition est le test logique qui détermine si l'action doit être déclenchée."},{"text":"Pourquoi tester un programme avec plusieurs entrées ?","options":["Pour vérifier les cas et repérer les erreurs","Pour éviter de le comprendre","Pour changer les composants au hasard"],"correct":0,"explanation":"Des tests variés vérifient les conditions et les actions dans les situations prévues."}]}]);

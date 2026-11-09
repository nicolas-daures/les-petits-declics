# Journal des améliorations

## 28 octobre 2026 — Accueil collège et première fiche de 6e

- Lecture de la dernière version publiée et maintien de son identité, de son adresse et de son accès privé.
- Accueil recentré sur le collège : classes 6e, 5e, 4e, 3e ; filtre par matière ; états vides explicites pour les sélections encore sans cours.
- Présentation plus sobre : palette ardoise et sauge, cartes compactes, retrait des illustrations enfantines sur l’accueil.
- Les trois activités antérieures restent dans « Revoir les bases », avec les mêmes clés de stockage des progrès.
- Première fiche : Mathématiques, 6e, « Fractions : du partage au quotient ». Cours original, représentations en bandes, quatre questions et corrections explicatives, reprise après rechargement.
- Nouveau stockage indépendant : `petits-declics-college-v1`. Route : `#college/6e/mathematiques/fractions`.
- Vérifications : syntaxe JS, six tests existants du moteur de multiplication ; filtres, correction d’une erreur, bilan 3/4, sauvegarde/rechargement dans le navigateur ; présentation bureau et mobile.

### Références officielles consultées le 28 octobre 2026

- Programme cycle 3, BO n°16 du 17 avril 2025 : https://www.education.gouv.fr/bo/2025/Hebdo16/MENE2504620A
- Éduscol, ressources cycle 3 et sens quotient en 6e : https://eduscol.education.gouv.fr/5712/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-3
- Attention aux programmes 2026-2027 : le nouveau cycle 4 de mathématiques/français s’applique en 5e en 2026, en 4e en 2027, en 3e en 2028. Vérifier chaque classe au moment d’ajouter un contenu : https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A

## 29 octobre 2026 — Premier cours de français de 6e

- Ajout du cours « Accorder le verbe avec son sujet », route `#college/6e/francais/accord-sujet-verbe` : repérage du verbe, sujet complet, nom noyau, sujet éloigné, inversion et sujets coordonnés. Six exercices au présent avec corrections originales.
- Registre commun `dist/courses.js` : données, cours et questions. `college.js` filtre ce registre et utilise un rendu commun ; plus de condition spécifique pour chaque cours.
- Progression indépendante par identifiant dans `petits-declics-college-v1.courses`. Les anciennes réponses `fractions` sont importées et leur champ historique reste écrit pour compatibilité. Les autres stockages temps/anglais/multiplications ne changent pas.
- Références officielles vérifiées le 29 octobre 2026 : programme de français, BO du 17 avril 2025, notamment « Identifier le groupe sujet et raisonner sur l’accord sujet/verbe » (6e) : https://www.education.gouv.fr/sites/default/files/programme-de-fran-ais-pour-le-cycle-3-439824.pdf ; banque Éduscol : https://eduscol.education.gouv.fr/6525/banque-de-ressources-pour-travailler-les-fondamentaux-au-college
- Vérifications : huit tests Node (dont migration des anciennes réponses aux fractions et filtrage français), syntaxe JS, parcours complet avec une erreur et bilan 5/6, bilan conservé après rechargement, ancienne fiche fractions accessible ; affichage bureau et téléphone de 360 pixels sans débordement horizontal.

## 30 octobre 2026 — Premier cours de mathématiques de 5e

- Nouvelle fiche « Proportionnalité : reconnaître et calculer », route `#college/5e/mathematiques/proportionnalite` : coefficient, vérification d’un tableau, retour à l’unité, linéarité et contre-exemple avec frais fixes.
- Six exercices originaux avec corrections explicatives. Progression isolée sous l’identifiant `proportionnalite` dans le stockage collège existant ; aucune modification des identifiants ni des réponses antérieures.
- Tableau HTML avec légende, en-têtes de lignes et unités. Affichage adapté au téléphone, sans nouvelle dépendance ni outil de suivi.
- Références vérifiées le 30 octobre 2026 : programme officiel, BO du 5 mars 2026, annexe 2, rubrique Cinquième / Proportionnalité, applicable depuis la rentrée 2026-2027 : https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A ; accompagnement : https://eduscol.education.gouv.fr/5736/ressources-d-accompagnement-du-programme-de-mathematiques-au-cycle-4
- Vérifications : neuf tests Node, dont filtrage 5e et conservation distincte des réponses de 6e ; syntaxe du registre ; parcours des six questions avec une erreur volontaire, bilan 5/6 conservé après rechargement, remise à zéro limitée à la séance et rendu bureau/mobile (360 pixels) sans débordement horizontal.

## 31 octobre 2026 — Premier cours d’anglais de 6e

- Nouvelle fiche « Présent simple : parler de ses habitudes », route `#college/6e/anglais/present-simple-habitudes` : lecture d’un portrait fictif situé à York, repères de vocabulaire, base verbale, troisième personne (-s, -es, -ies), négation et premières questions avec do/does.
- Niveau annoncé : 6e, A1 vers A1+ ; les questions sont identifiées comme l’étape vers A1+. Six exercices originaux, dont une question de compréhension, avec corrections explicatives. Les passages anglais portent `lang="en-GB"` pour les lecteurs d’écran.
- Progression isolée sous l’identifiant stable `present-simple-habitudes` dans le registre existant. Les clés de stockage et les routes des anciennes activités restent inchangées ; aucun nouveau service ni outil de suivi.
- Références officielles vérifiées le 31 octobre 2026 : BO n°22 du 29 mai 2025, applicable en 6e depuis la rentrée 2025-2026 : https://www.education.gouv.fr/bo/2025/Hebdo22/MENE2504621A ; annexe 3, axe 2 (page 6), grammaire et phrase simple (pages 12–13) : https://www.education.gouv.fr/sites/default/files/annexe-3-programme-d-anglais-pour-les-classes-de-coll-ge-440358.pdf ; accompagnement Éduscol actualisé en septembre 2026 : https://eduscol.education.gouv.fr/4758/ressources-d-accompagnement-pour-les-langues-vivantes-etrangeres-et-regionales-au-college
- Vérifications : onze tests Node, dont filtrage anglais avec reprise d’une séance et remise à zéro limitée au cours ; parcours des six exercices avec une erreur volontaire, bilan 5/6 conservé après rechargement ; reprise à 0/6 ; rendu téléphone dans une fenêtre de 360 pixels sans débordement horizontal. Syntaxe du registre et intégrité des changements vérifiées avant publication.

## 1er novembre 2026 — Première fiche de 4e : Pythagore

- Ajout de « Pythagore : calculer une longueur », route `#college/4e/mathematiques/pythagore-longueurs`. Angle droit connu, hypoténuse, égalité des carrés, calcul d’un côté, racine carrée, diagonale et arrondi. Six exercices originaux avec corrections explicatives.
- Schéma SVG adaptatif avec angle droit codé, titre, description textuelle et légende. La fiche distingue explicitement le théorème direct de sa réciproque, qui reste une extension future.
- Progression indépendante sous l’identifiant stable `pythagore-longueurs`. Aucun changement des clés de stockage, des routes antérieures ni des activités des bases.
- Programme vérifié le 1er novembre 2026 : les attendus 4e restent applicables en 2026-2027 (programme de 2020). Éduscol : https://eduscol.education.gouv.fr/6910/reperes-annuels-de-progression-et-attendus-de-fin-d-annee-du-cp-la-troisieme ; attendus, racines carrées et géométrie, pages 3 et 9–10 : https://eduscol.education.gouv.fr/sites/default/files/document/16-maths-4e-attendus-eduscol1114746pdf-74682.pdf ; calendrier officiel, nouveau programme en 4e à la rentrée 2027 : https://www.education.gouv.fr/bo/2026/Hebdo10/MENE2602912A
- Vérifications : treize tests Node réussis, dont filtrage de 4e et remise à zéro indépendante ; parcours des six questions avec une erreur volontaire, bilan 5/6 conservé après rechargement et reprise à 0/6 ; affichage dans une fenêtre de 360 pixels sans débordement horizontal. Syntaxe du registre et intégrité du diff vérifiées.

## 2 novembre 2026 — Première fiche de 3e et ouverture de la géographie

- Ajout de « Aires urbaines : espaces et mobilités », route `#college/3e/histoire-geographie/aires-urbaines-mobilites`. Centre, banlieue, couronne périurbaine, périurbanisation, mobilités pendulaires et justification à partir d’un document.
- Schéma SVG accessible et tableau à en-têtes explicites. Le document de Clairville est entièrement fictif et annoncé comme tel ; les exercices distinguent observation et généralisation. Six questions avec corrections explicatives et progression indépendante sous l’identifiant `aires-urbaines-mobilites`. Les anciens identifiants et stockages sont conservés.
- Programme vérifié le 2 novembre 2026 : géographie de 3e, thème 1, programme de 2020 encore applicable en 2026-2027. Ministère : https://www.education.gouv.fr/les-programmes-du-college-470408 ; programmes en application : https://eduscol.education.gouv.fr/4362/enseigner-au-cycle-4 ; ressources Éduscol : https://eduscol.education.gouv.fr/5730/ressources-d-accompagnement-du-programme-d-histoire-geographie-au-cycle-4 ; fiche d’accompagnement du thème : https://eduscol.education.gouv.fr/sites/default/files/document/c4geo3th1dynamiquesterritorialesfrance558052pdf-78255.pdf
- Vérifications : quinze tests Node réussis, dont filtrage de la nouvelle matière en 3e et remise à zéro indépendante ; six corrections parcourues, erreur volontaire et bilan 5/6 conservé après rechargement, reprise à 0/6 ; cours et tableau sans débordement dans une fenêtre de 360 pixels. Syntaxe JS et diff vérifiés.
- Limite pédagogique explicite : introduction aux notions, à compléter par une étude de cas réelle, des repères nationaux et les liens avec la mondialisation.

## 3 novembre 2026 — Ouverture des sciences en 5e : masse et volume

- Ajout de « Masse et volume : mesurer sans confondre », route `#college/5e/sciences/masse-volume-mesures`. Instruments, unités, tare, soustraction de masses, lecture d’une éprouvette et déplacement d’eau pour un solide insoluble complètement immergé.
- Schéma SVG accessible du ménisque, avec graduations espacées régulièrement et légende. Six exercices originaux avec corrections explicatives ; les conditions du déplacement d’eau sont explicitées. Progression indépendante sous l’identifiant `masse-volume-mesures` ; aucun changement des identifiants ni des stockages antérieurs.
- Références officielles vérifiées le 3 novembre 2026 : physique-chimie cycle 4, programme de 2020 encore en vigueur en 2026-2027. BO : https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm ; programme en vigueur et ressources Éduscol : https://eduscol.education.gouv.fr/5739/ressources-d-accompagnement-du-programme-de-physique-chimie-au-cycle-4 ; exemple de progression, distinction masse/volume dès la 5e : https://eduscol.education.gouv.fr/sites/default/files/document/ra16c4phchmatiereprogression680433pdf-78105.pdf
- Vérifications : dix-sept tests Node réussis, dont filtre sciences de 5e et reprise/remise à zéro indépendantes ; six corrections parcourues avec une erreur volontaire, bilan 5/6 conservé après rechargement et reprise à 0/6 ; rendu et schéma contrôlés à 360 pixels sans débordement horizontal. Syntaxe du registre et diff vérifiés.
- Limite explicite : introduction de 5e dans une progression de cycle ; la relation de calcul de masse volumique reste à développer.

## 3 novembre 2026 — Préparation Cloudflare, confidentialité et SEO

- Sources éditables déplacées dans src/ ; génération Node sans dépendance vers dist/. Les futurs ajouts doivent modifier src/courses.js, puis exécuter npm run build. Instructions de maintenance dans AGENTS.md.
- Sept vraies pages de cours pré-rendues dans /cours/... avec leçon et corrections lisibles sans JavaScript. Anciens favoris #college/... redirigés côté navigateur ; clés de progression et anciens cours préservés.
- Pages mentions légales, confidentialité adaptée aux élèves, CGU et Mes progrès, liées depuis le pied de page. Aucun renseignement personnel, contact ou domaine inventé : configuration site-config.json, génération publique refusée si incomplète ; la version actuelle reste privée et non indexable.
- Polices DM Sans et Nunito locales via Fontsource 5.3.0, licences OFL conservées. Image de partage locale, canonical et métadonnées propres aux cours en mode public, sitemap, robots, 404, en-têtes de sécurité et cache, redirections configurables.
- Export/import local des trois univers avec validation du fichier, confirmation avant remplacement, conservation des univers absents et tentative de restauration en cas d’échec d’écriture. Effacement local explicite. Le stockage collège conserve aussi les cours inconnus lors d’une sauvegarde.
- Documentation de déploiement et migration : docs/CLOUDFLARE.md, avec les références CNIL, LCEN, Google et Cloudflare consultées le 3 novembre 2026.
- Vérifications : 23 tests Node réussis (sauvegarde aller-retour, import partiel/invalide, erreur de quota, routes historiques, rendu HTML et variantes publique/privée), syntaxe ; parcours navigateur ancien favori → vraie URL, exercice et reprise après rechargement ; page Mes progrès accessible.
- Limites : domaine et compte Cloudflare non fournis, coordonnées éditoriales et paramètres techniques à compléter. Le contrôle complet du téléchargement/import en navigateur a rencontré une interruption de l’environnement ; les opérations de données sont couvertes par les tests Node. Les cookies et en-têtes réels du futur déploiement Cloudflare restent à contrôler.


## 9 novembre 2026 — Première fiche de SVT : nutrition des végétaux

- Ajout en 5e de « Nutrition des végétaux : de la racine à la feuille », route `#college/5e/sciences/nutrition-vegetaux` : prélèvements d’eau et de sels minéraux, sève brute, échanges gazeux, photosynthèse, matière organique, sève élaborée et distinction entre photosynthèse et respiration.
- Six exercices corrigés pour vérifier les besoins de la plante, les échanges et les transports. Schéma SVG accessible avec description et légende, adapté aux petits écrans.
- Programme de SVT du cycle 4 de 2020 et ressources Éduscol consultés le 9 novembre 2026. La fiche est présentée comme une introduction de 5e, sans prétendre imposer une progression annuelle nationale.
- Vérifications locales non exécutées dans cet environnement : `npm run build`, `npm run check` et `npm test` restent à lancer sur la PR ; les sources générées dans `dist/` doivent être actualisées par le script du projet avant publication.

## Prochaines priorités

1. Diversifier les sciences avec une première fiche de SVT, en vérifiant le programme applicable à la classe retenue.
2. Compléter la géographie par une étude de cas réelle sourcée et des repères sur les principales aires urbaines françaises ; ne pas présenter Clairville comme une étude de cas réelle ni l’introduction actuelle comme tout le chapitre.
3. Introduire une activité de réécriture en français pour compléter les choix multiples, avec une correction argumentée.
4. Conserver l’enrichissement par petites fiches complètes et les identifiants stables. Ne pas présenter le catalogue actuel comme couvrant tous les programmes.
5. Garder la direction visuelle actuelle et la compatibilité des liens et des clés de progression.

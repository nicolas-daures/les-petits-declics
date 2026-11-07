# Les petits déclics

Site de révision en français pour les collégiens de 6e à 3e, sans publicité ni compte élève applicatif. Cours, exemples et exercices corrigés ; anciennes activités temps, vocabulaire anglais et multiplication conservées.

## Lancer et générer

Node.js 20 minimum (22 recommandé). Aucune dépendance npm externe.

    npm ci
    npm run build
    npm run dev
    npm run check
    npm test

npm run dev sert dist/ sur http://localhost:5173. Relancer npm run build après une modification, puis recharger la page. On peut aussi servir dist/ avec un autre serveur HTTP statique. Les ressources utilisent des chemins à la racine du domaine.

## Organisation

- src/ : HTML, CSS, JavaScript et polices locales avec licences OFL.
- src/courses.js : registre des cours et des exercices.
- src/college.js : catalogue, rendu commun et progression par cours.
- scripts/build.mjs : pages HTML pré-rendues, pages de service, SEO et configuration Cloudflare.
- scripts/content.mjs : textes des mentions légales, confidentialité, CGU et Mes progrès.
- site-config.json : mode privé/public, domaine et informations éditoriales.
- dist/ : résultat généré, conservé dans le dépôt pour l’hébergement Sites.
- tests/ : progression, migration et génération.
- AMELIORATIONS.md : journal des ajouts et prochaines priorités.
- docs/CLOUDFLARE.md : configuration et migration vers Cloudflare Pages.

Toujours modifier les sources puis régénérer dist/. Ajouter un cours dans src/courses.js lui donne aussi une page HTML propre au prochain build.

## Publication Cloudflare

Lire docs/CLOUDFLARE.md et renseigner site-config.json.
Le projet est volontairement en mode privé, non indexable : les coordonnées de l’éditeur et le futur domaine n’ont pas été fournis.

    npm run check:release
    npm run build:public

Le contrôle liste les renseignements manquants avant toute génération publique.
Cloudflare Pages : framework None, commande npm run build:public, sortie dist/.
Le contrôle vérifie la complétude, pas la véracité juridique des renseignements ni les réglages du compte.

Les cours ont des URL /cours/classe/matiere/identifiant/. Les favoris #college/... continuent de fonctionner.
Sitemap, canonical, métadonnées de partage et redirections utilisent le domaine public configuré.
La protection privée de ChatGPT Sites ne se transfère pas à Cloudflare : configurer séparément Access si nécessaire.

## Progrès

Les trois clés restent petit-tour-v1, petits-declics-maths-v1 et petits-declics-college-v1.
Mes progrès permet l’export/import JSON local et l’effacement explicite.
Les univers absents d’un fichier importé restent inchangés. Les réponses des anciens cours sont conservées.
Avant de changer de domaine, exporter la sauvegarde depuis l’ancien domaine puis l’importer sur le nouveau.

Aucune synchronisation entre appareils ni sauvegarde serveur n’est assurée.
Les voix dépendent du navigateur ; certaines peuvent utiliser le service distant du fournisseur.
Les polices sont locales, sans requête Google Fonts.

## Héritage et contenus

Les univers temps et anglais conservent les cartes, quiz, ordre et synthèse vocale.
Le moteur de multiplication conserve le suivi par calcul, les révisions pondérées et le défi facultatif.
Les cours du collège couvrent des notions ciblées : fractions, accord sujet-verbe, présent simple, proportionnalité, Pythagore, aires urbaines, masse et volume.
Le catalogue ne couvre pas tous les programmes. Les niveaux et références officielles figurent dans les cours et le journal.

Aucune licence générale de redistribution du projet n’est ajoutée : choisir explicitement une licence avant une diffusion qui doit l’autoriser.
Les polices conservent leur licence propre dans src/fonts/.

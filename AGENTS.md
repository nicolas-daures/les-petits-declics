# Les petits déclics — instructions de maintenance

- Lire AMELIORATIONS.md avant tout ajout pour éviter les doublons.
- Les sources éditables sont dans src/. dist/ est généré et suivi pour Sites : ne pas y éditer le contenu à la main.
- Ajouter les cours dans src/courses.js et préserver leurs identifiants. src/college.js est le rendu commun, utilisé aussi au build pour le HTML lisible sans JavaScript.
- Après une modification : npm run build, npm run check, npm test. Inclure les sources et dist/ correspondants dans la même publication.
- Préserver les anciennes routes #college/... et les trois clés de stockage. Vérifier les vraies pages /cours/... et la reprise des réponses.
- Conserver les pages de confidentialité, mentions légales, CGU, Mes progrès, les polices locales et leurs licences.
- site-config.json reste en mode private tant que l’éditeur n’a pas renseigné et validé sa configuration publique. Ne pas inventer son identité, son contact, son domaine ni les conditions de journalisation de son compte Cloudflare.
- Pour une ouverture publique, exécuter npm run check:release puis npm run build:public. Le contrôle est un contrôle de complétude, pas une certification juridique.
- Ne pas modifier les partages du Site ni créer de nouvelle automatisation pour livrer une évolution.

# Publier Les petits déclics sur Cloudflare Pages

## Sources et génération

Node.js 20 ou plus récent. Aucune dépendance npm externe pour le build ou les tests.

- npm ci
- npm run build : génère la version selon site-config.json (privée par défaut).
- npm run check : contrôle de syntaxe.
- npm test : tests de progression, migration et génération.
- npm run check:release : liste ce qui manque pour une version publique.
- npm run build:public : contrôle puis génération publique dans dist/.

src/ contient les sources ; scripts/content.mjs contient les pages d’information.
Les fichiers de dist/ sont générés. Les modifications quotidiennes doivent se faire dans src/, puis le build doit être relancé.
Les tests historiques lisent dist/ : exécuter le build avant les tests.

## Informations à renseigner dans site-config.json

Ne publiez pas vos informations personnelles dans un dépôt GitHub public si vous choisissez la voie non professionnelle anonyme.

- publicUrl : origine HTTPS finale. L’adresse de départ choisie est https://les-petits-declics.pages.dev ; elle devra être confirmée lors de la création du projet Pages, car le nom peut déjà être pris.
- editor.status : non-professionnel-anonyme, non-professionnel ou professionnel.
- editor.contactEmail : adresse de contact relative au site et à la confidentialité.
- Pour un éditeur non professionnel anonyme : identityProvidedToHost=true uniquement après transmission effective des éléments d’identité à l’hébergeur. Le contact publié peut être une adresse dédiée au site.
- Pour un éditeur identifié : publicName, address, phone, publicationDirector.
- Pour une activité professionnelle : registration doit contenir les mentions d’immatriculation et fiscales applicables ; compléter les pages si votre activité impose d’autres mentions.
- hosting : vérifier et compléter les coordonnées de l’entité contractuelle qui vous héberge. Le nom Cloudflare, Inc. est une proposition de configuration, pas une vérification du contrat de votre compte.
- hosting.technicalDataRetention : durée ou critères de conservation réellement applicables aux données techniques (selon les services Cloudflare activés).
- hosting.processingAndTransfers : destinataires, lieux de traitement, garanties de transfert applicables ; s’appuyer sur le contrat et les informations du prestataire.
- hosting.reviewed=true après vérification de ces informations et des services réellement activés.
- redirectHosts : anciens noms d’hôtes à rediriger (par exemple le sous-domaine du projet pages.dev). Ne pas mettre le domaine principal dans cette liste.
- updated : date des textes d’information au format AAAA-MM-JJ.
- mode=public après renseignement des éléments précédents.

Le contrôle de publication empêche une génération publique incomplète. Il ne vérifie pas la véracité des informations ni ne remplace une revue juridique de votre situation.

Les sauvegardes et la synthèse vocale sont expliquées dans la confidentialité. Aucun outil d’audience, formulaire serveur, achat, compte élève ou publicité n’est ajouté.
Si vous activez Web Analytics, Zaraz, Turnstile, Access ou un autre service, réexaminer les traitements, les cookies, la notice et, le cas échéant, le consentement. Pour un traitement fondé sur le consentement de mineurs de moins de 15 ans, vérifier les règles spécifiques de consentement conjoint enfant/parent.
Les polices ne contactent plus Google ; leurs licences OFL sont dans src/fonts/.

## Paramètres Cloudflare Pages

- Framework : None.
- Répertoire racine : racine du projet.
- Commande de build pour la version publique : npm run build:public.
- Répertoire de sortie : dist.
- Version de Node : 22 recommandée, 20 minimum.
- Domaine par défaut : créer le projet Pages avec le nom `les-petits-declics` si disponible ; Cloudflare attribuera alors https://les-petits-declics.pages.dev. Vérifier l’adresse réellement attribuée avant de la considérer comme active.
- Enregistrer les paramètres puis vérifier la première publication.

## Déploiement GitHub : production uniquement depuis main

Pour reproduire le workflow du dépôt little-moments et éviter qu'une branche de travail ou une Pull Request ne publie le site :

1. Relier ce dépôt GitHub à un projet Cloudflare Pages distinct.
2. Dans **Settings → Builds & deployments → Branch control**, définir `main` comme **Production branch**.
3. Désactiver les **Preview deployments** pour les branches non-production.
4. Conserver le workflow GitHub Actions `.github/workflows/ci.yml` : il exécute build, contrôles et tests sur les pushes et les Pull Requests, sans déployer.
5. Vérifier qu'aucun autre workflow GitHub Actions ne lance Wrangler ou un déploiement Cloudflare.

Ainsi, les PR et branches servent aux vérifications uniquement ; un push ou une fusion sur `main` déclenche le déploiement de production Cloudflare Pages. Ne pas activer de déploiement depuis une branche de fonctionnalité. Ces réglages se font dans le tableau de bord Cloudflare et ne peuvent pas être imposés par un commit dans ce dépôt.

Pour un aperçu privé : npm run build avec mode=private. robots.txt et les balises noindex évitent l’indexation, mais ne constituent jamais une protection d’accès.

L’authentification privée de ChatGPT Sites n’est pas exportée vers Cloudflare Pages.
Si l’accès doit rester privé, configurer Cloudflare Access sur la production ET les aperçus ; vérifier aussi le domaine pages.dev. Le simple bouton « Enable access policy » des aperçus ne protège pas automatiquement le domaine de production ou le domaine personnalisé.
Conserver la protection actuelle de Sites jusqu’à ce choix explicite.

\_headers configure CSP, protection contre l’intégration externe, types MIME, referrer, permissions et cache. Les scripts sont locaux ; les styles en ligne sont encore nécessaires pour les visualisations existantes.
\_redirects est généré à partir de redirectHosts. L’application doit être hébergée à la racine du domaine, pas dans un sous-répertoire.
404.html évite le fallback implicite de toutes les URL inconnues vers l’accueil.
Le cache des fichiers applicatifs doit être revalidé ; ne pas activer une règle « immutable » longue durée pour les fichiers JS/CSS non versionnés.

## SEO et adresses

Chaque cours dispose de son HTML dans /cours/classe/matiere/identifiant/.
Titre et description sont spécifiques à chaque cours. Les leçons et les corrections sans JavaScript restent lisibles.
Les anciens favoris #college/... sont reconnus et dirigés côté navigateur vers la vraie page.
La version publique génère canonical, Open Graph, image de partage locale, robots.txt et sitemap.xml avec le domaine configuré.
La version privée est non indexable, sans fausse URL canonique ni sitemap contenant un domaine d’exemple.
Après publication publique, soumettre /sitemap.xml dans Google Search Console.
Le contenu des programmes n’est pas présenté comme exhaustif ni comme un service officiel de l’Éducation nationale.

## Migration des progrès

Sur l’ancien domaine, ouvrir Mes progrès et télécharger la sauvegarde JSON.
Sur le nouveau domaine, ouvrir Mes progrès, choisir le fichier puis vérifier la liste des univers avant de confirmer le remplacement.
Les univers absents du fichier restent inchangés. Le fichier est lu localement et n’est pas envoyé au serveur.
Garder le fichier pendant la migration. Une sauvegarde n’est pas une synchronisation automatique.
L’effacement se limite aux trois clés du site ; les autres données du navigateur ne sont pas effacées.
Sur un appareil partagé, utiliser un profil de navigateur par élève.

## Contrôles sur le domaine réel

Vérifier HTTPS, redirections, réponse 404, en-têtes, absence de requêtes Google Fonts, cookies réellement déposés, téléchargements JSON et reprise des progrès.
Tester sur téléphone et ordinateur : cours, multiplication, voix, accès aux informations et import/export.
Confirmer que production, aperçus et domaine pages.dev ont la visibilité souhaitée.
Ces contrôles n’ont pas encore été effectués sur votre futur compte/domaine Cloudflare, qui n’a pas été fourni.

## Références vérifiées le 3 novembre 2026

- CNIL : https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi
- Information des personnes : https://www.cnil.fr/fr/informer-les-personnes
- Mineurs : https://www.cnil.fr/fr/enjeux-numeriques/les-droits-numeriques-des-mineurs
- LCEN, article 1-1 : https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000801164/LEGISCTA000006117684/
- Cloudflare Pages : https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- En-têtes : https://developers.cloudflare.com/pages/configuration/headers/
- Aperçus et Access : https://developers.cloudflare.com/pages/configuration/preview-deployments/
- SEO JavaScript : https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

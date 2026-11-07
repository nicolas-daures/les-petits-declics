# Mettre le projet sur GitHub

Cette archive contient les sources de la dernière version disponible du Site au 7 novembre 2026, ainsi que ce guide d’export.

## Créer le dépôt

1. Décompresser l’archive et ouvrir le dossier `les-petits-declics` (celui qui contient `package.json`).
2. Sur https://github.com/new, créer un dépôt nommé `les-petits-declics` dans votre compte personnel.
3. Choisir Private pour commencer si souhaité. Ne pas initialiser le dépôt avec un README, une licence ou un .gitignore : ces fichiers sont déjà fournis, sauf la licence générale que vous pourrez choisir séparément.
4. Ouvrir un terminal dans le dossier décompressé. Git doit être installé et l’authentification GitHub configurée.
5. Exécuter les commandes suivantes en remplaçant VOTRE-PSEUDO par votre identifiant GitHub :

```sh
git init -b main
git add .
git commit -m "Initialisation des Petits Déclics"
git remote add origin https://github.com/VOTRE-PSEUDO/les-petits-declics.git
git push -u origin main
```

Git peut demander la configuration de votre identité pour le premier commit. Dans ce cas, utilisez `git config user.name "Votre nom"` et `git config user.email "Votre adresse de commit"`, puis relancez le commit. Une adresse GitHub noreply peut être utilisée si vous souhaitez préserver votre adresse personnelle.

## Vérifier le projet

Node.js 22 recommandé. Dans le dossier du projet :

```sh
npm ci
npm run build
npm run check
npm test
npm run dev
```

Ouvrir http://localhost:5173. Le serveur se termine avec Ctrl+C.

Modifier les fichiers dans `src/`, puis relancer `npm run build`. Le dossier `dist/` contient la sortie générée et reste présent pour faciliter l’export existant. Le workflow `.github/workflows/ci.yml` exécute les vérifications à chaque push ou pull request.

## Envoyer une mise à jour

```sh
npm run build
npm run check
npm test
git add .
git commit -m "Décrire les modifications"
git push
```

## Héberger ensuite sur Cloudflare

Lire `CLOUDFLARE.md` dans ce dossier et compléter `site-config.json` avant de générer une version publique.
Le dépôt GitHub peut rester privé avec un site public : ce sont deux réglages distincts. Publier les sources sur GitHub n’héberge pas automatiquement le site.
La version exportée reste configurée en mode privé, non indexable ; cela ne constitue pas un contrôle d’accès à un futur hébergement.

Documentation officielle :
https://docs.github.com/fr/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

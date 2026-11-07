export const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function informationPages(config, isPublic) {
  const e = config.editor,
    h = config.hosting;
  const contact = e.contactEmail
    ? '<a href="mailto:' +
      esc(e.contactEmail) +
      '">' +
      esc(e.contactEmail) +
      "</a>"
    : "Le contact éditorial sera renseigné avant l’ouverture publique.";
  const notice = isPublic
    ? ""
    : '<p class="notice">Version privée de préparation. Les coordonnées éditoriales et les paramètres de l’hébergement public doivent être complétés avant une ouverture au public. L’accès de cette version est géré par ChatGPT Sites.</p>';
  const links =
    '<p>Références : <a href="https://www.cnil.fr/fr/informer-les-personnes" rel="noopener">CNIL — information des personnes</a> · <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi" rel="noopener">Cookies et autres traceurs</a>.</p>';
  const editor =
    e.status === "non-professionnel-anonyme"
      ? "<p>Site édité à titre non professionnel. L’éditeur a communiqué ses éléments d’identification à l’hébergeur et utilise la faculté d’anonymat prévue par l’article 1-1, II de la LCEN.</p>"
      : "<p>Éditeur : " +
        esc(e.publicName) +
        "<br>Adresse : " +
        esc(e.address) +
        "<br>Téléphone : " +
        esc(e.phone) +
        "<br>Directeur de la publication : " +
        esc(e.publicationDirector) +
        (e.registration
          ? "<br>Informations d’immatriculation : " + esc(e.registration)
          : "") +
        "</p>";
  return [
    {
      slug: "mentions-legales",
      title: "Mentions légales",
      description:
        "Édition, hébergement et droits relatifs aux contenus des Petits déclics.",
      body:
        notice +
        "<h2>Édition et contact</h2>" +
        (isPublic
          ? editor
          : "<p>Les renseignements de l’éditeur ne sont pas encore activés pour une publication publique.</p>") +
        "<p>Contact : " +
        contact +
        "</p><h2>Hébergement</h2>" +
        (isPublic
          ? "<p>" +
            esc(h.name) +
            "<br>" +
            esc(h.address) +
            "<br>Téléphone : " +
            esc(h.phone) +
            '</p><p><a href="' +
            esc(h.privacyUrl) +
            '">Politique de confidentialité de l’hébergeur</a></p>'
          : "<p>Cette version est hébergée dans l’environnement privé ChatGPT Sites. Le futur hébergement Cloudflare et ses coordonnées seront indiqués lors de la génération publique.</p>") +
        '<h2>Contenus et propriété intellectuelle</h2><p>Les cours, exemples, exercices et schémas du site sont des supports pédagogiques originaux. Les références aux programmes officiels identifient les sources du cadrage pédagogique ; elles ne constituent pas une affiliation au ministère.</p><p>L’usage personnel pour apprendre et les utilisations autorisées par la loi restent possibles. Aucune licence générale de redistribution du code ou des contenus n’est accordée ici. Pour une autre réutilisation, contacter l’éditeur.</p><p>Les polices DM Sans et Nunito sont hébergées localement sous licence SIL Open Font License 1.1. <a href="/fonts/dm-sans-LICENSE.txt">Licence DM Sans</a> · <a href="/fonts/nunito-LICENSE.txt">Licence Nunito</a>.</p><h2>Signaler une erreur</h2><p>Pour demander une correction de contenu ou signaler un problème d’accessibilité, utiliser le contact ci-dessus.</p>',
    },
    {
      slug: "confidentialite",
      title: "Confidentialité",
      description:
        "Comprendre les progrès enregistrés sur votre appareil, leur transfert et leur effacement.",
      body:
        notice +
        '<p class="notice"><b>Pour les élèves :</b> le site n’a pas besoin de ton nom, de ton âge ni de ton adresse pour les activités. Tes réponses et tes progrès sont gardés dans ce navigateur. Si tu changes d’appareil ou d’adresse de site, utilise la sauvegarde pour les retrouver.</p><h2>Progrès et préférences sur l’appareil</h2><p>Le code applicatif ne crée aucun compte élève et n’envoie pas les réponses vers une base de données. Il utilise le stockage local du navigateur pour mémoriser les préférences de langue et de classe, les étoiles, les tentatives de multiplication et les réponses aux exercices.</p><ul><li><code>petit-tour-v1</code> : temps, vocabulaire anglais et préférences ;</li><li><code>petits-declics-maths-v1</code> : progression des multiplications ;</li><li><code>petits-declics-college-v1</code> : classe, matière et réponses par cours.</li></ul><p>Ces informations persistent sans expiration programmée jusqu’à leur effacement par vous, par le navigateur ou par le système. Elles sont séparées pour chaque navigateur et chaque origine web. Sur un appareil partagé, les personnes utilisant le même profil de navigateur peuvent retrouver cette progression.</p><p>Le stockage est limité à la continuité des activités demandées et à leurs préférences, sans publicité ni suivi entre sites. Aucun traceur publicitaire ni outil de mesure d’audience n’est inclus par l’application. Ce fonctionnement ne nécessite pas de bandeau de consentement publicitaire. Les éventuels services ajoutés par l’hébergeur doivent être examinés séparément.</p><h2>Sauvegarder, importer et effacer</h2><p><a href="/mes-progres/">La page Mes progrès</a> permet de télécharger une sauvegarde JSON, de contrôler puis remplacer les progressions présentes dans un fichier et d’effacer les trois stockages de l’application. Le fichier reste sur votre appareil et n’est pas téléversé. Sa restauration est une action manuelle ; elle ne synchronise pas les appareils.</p><h2>Voix et polices</h2><p>Les polices sont servies avec le site. Les fonctions d’écoute utilisent la synthèse vocale du navigateur, après une action sur un bouton. Selon la voix choisie par le navigateur, un service distant du fournisseur peut être utilisé. Seul le texte pédagogique à lire est transmis à ce mécanisme. Le site ne demande pas l’accès au microphone.</p><h2>Données techniques d’hébergement</h2>' +
        (isPublic
          ? "<p>Le responsable des traitements liés au site est " +
            (e.status === "non-professionnel-anonyme"
              ? "son éditeur non professionnel, joignable au contact ci-dessous"
              : esc(e.publicName)) +
            ". L’hébergement et la sécurité impliquent le traitement de données de connexion, notamment l’adresse IP, la date, l’URL demandée et des informations du navigateur, pour acheminer les pages et prévenir les abus. La base légale retenue pour ces finalités est l’intérêt légitime au fonctionnement et à la sécurité du service.</p><p>Prestataire : " +
            esc(h.name) +
            ". Conservation : " +
            esc(h.technicalDataRetention) +
            "</p><p>Destinataires, lieux de traitement et transferts : " +
            esc(h.processingAndTransfers) +
            '</p><p><a href="' +
            esc(h.privacyUrl) +
            '">Informations complémentaires de l’hébergeur</a>.</p>'
          : "<p>L’accès privé peut utiliser l’authentification et les traitements techniques de la plateforme ChatGPT Sites, indépendamment du code pédagogique. Pour le futur hébergement Cloudflare, les durées, destinataires et conditions de transfert seront précisés selon les services effectivement configurés. Ces paramètres ne sont pas encore validés pour une ouverture publique.</p>") +
        "<h2>Contact et droits</h2><p>Contact confidentialité : " +
        contact +
        '</p><p>Si vous nous écrivez, votre message et vos coordonnées servent à répondre à la demande, sur la base de l’intérêt légitime à traiter les demandes relatives au service. Les échanges sont conservés jusqu’à 12 mois après leur clôture, sauf obligation ou litige justifiant une autre durée. N’envoyez pas d’informations sensibles ou de données inutiles sur un enfant.</p><p>Selon les traitements concernés, vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou vous opposer au traitement. Les progrès exclusivement locaux s’effacent directement depuis Mes progrès. Vous pouvez aussi adresser une réclamation à la <a href="https://www.cnil.fr/fr/adresser-une-plainte">CNIL</a>.</p>' +
        links,
    },
    {
      slug: "conditions-utilisation",
      title: "Conditions d’utilisation",
      description:
        "Gratuité, utilisation des activités, sauvegarde des progrès et limites des supports pédagogiques.",
      body:
        notice +
        '<h2>Un service gratuit pour réviser</h2><p>Les petits déclics propose des cours et exercices en français pour le collège, ainsi que des activités de révision des bases. L’application ne comporte ni achat, ni abonnement, ni publicité. Les activités sont accessibles sans compte élève dans le code applicatif ; l’hébergeur peut protéger une version privée par connexion.</p><h2>Utiliser les activités</h2><p>Choisissez une classe et une matière, consultez les exemples puis les corrections. Une séance terminée indique que les questions ont été parcourues, pas qu’une compétence est définitivement acquise. Le catalogue s’enrichit progressivement et ne couvre pas l’intégralité des programmes.</p><h2>Des supports complémentaires</h2><p>Les fiches sont des aides à la révision. Elles ne remplacent pas l’enseignement, les consignes des professeurs ou les programmes officiels. Une erreur peut subsister : elle peut être signalée au contact des mentions légales. Aucun résultat scolaire ou examen n’est garanti.</p><h2>Progrès, appareils partagés et migration</h2><p>Les progrès sont enregistrés dans le navigateur, sans synchronisation ni sauvegarde serveur. Leur effacement ou le changement de navigateur ou de domaine peut les rendre indisponibles. Exportez-les avant une migration. Importer un fichier remplace uniquement les univers qu’il contient, après confirmation ; les autres restent conservés.</p><h2>Disponibilité et usage respectueux</h2><p>Le site peut évoluer ou être momentanément indisponible. Ne cherchez pas à perturber son fonctionnement. Les règles de propriété intellectuelle figurent dans les <a href="/mentions-legales/">mentions légales</a> ; les modalités de données figurent dans la <a href="/confidentialite/">confidentialité</a>.</p>',
    },
    {
      slug: "mes-progres",
      title: "Mes progrès",
      description:
        "Sauvegarder, transférer et effacer les progrès enregistrés sur ce navigateur.",
      body: '<p>Les progrès restent dans ce navigateur. Pour changer de domaine ou d’appareil, télécharge une sauvegarde ici, puis importe-la sur le nouveau site.</p><p>Sur un appareil partagé, utilise ton propre profil de navigateur. Garde ton fichier de sauvegarde dans un endroit sûr.</p><div class="actions"><button class="primary" id="export-progress">Télécharger ma sauvegarde</button></div><h2>Importer une sauvegarde</h2><label for="import-file">Fichier de sauvegarde JSON</label><input id="import-file" type="file" accept=".json,application/json"><p id="backup-preview" class="backup-preview" role="status"></p><button class="secondary" id="confirm-import" disabled>Remplacer les progrès indiqués</button><p>Avant tout remplacement, tu peux télécharger la sauvegarde actuelle. Les univers absents du fichier importé restent inchangés. Le fichier est lu sur cet appareil, sans envoi au serveur.</p><h2>Effacer les progrès de ce navigateur</h2><label><input type="checkbox" id="confirm-clear"> Je comprends que les progrès locaux seront effacés.</label><button class="secondary" id="clear-progress" disabled>Effacer mes progrès locaux</button><p id="backup-status" role="status" tabindex="-1"></p><noscript><p>Active JavaScript pour exporter, importer ou effacer les progrès.</p></noscript>',
    },
  ];
}

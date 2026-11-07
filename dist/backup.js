(function () {
  "use strict";
  const api = window.DeclicProgress,
    $ = (s) => document.querySelector(s);
  const status = (message) => {
    $("#backup-status").textContent = message;
    $("#backup-status").focus();
  };
  let pending = null;
  $("#export-progress").onclick = () => {
    try {
      const text = api.exportText(localStorage);
      if (!Object.keys(JSON.parse(text).data).length) {
        status("Aucun progrès enregistré dans ce navigateur.");
        return;
      }
      const url = URL.createObjectURL(
        new Blob([text], { type: "application/json" }),
      );
      const a = document.createElement("a");
      a.href = url;
      a.download =
        "petits-declics-progres-" +
        new Date().toISOString().slice(0, 10) +
        ".json";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      status(
        "Sauvegarde téléchargée. Garde ce fichier pour le réimporter sur un autre domaine ou appareil.",
      );
    } catch {
      status(
        "Sauvegarde impossible : le stockage est indisponible ou contient des données illisibles. Aucun progrès n’a été modifié.",
      );
    }
  };
  let selection = 0;
  $("#import-file").onchange = async (event) => {
    const current = ++selection;
    pending = null;
    $("#confirm-import").disabled = true;
    $("#backup-preview").textContent = "";
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (file.size > 500000) throw Error("Le fichier dépasse 500 Ko.");
      const data = api.parse(await file.text());
      if (current !== selection) return;
      pending = data;
      $("#backup-preview").textContent =
        "Sauvegarde valide. Les progrès suivants seront remplacés après confirmation :\n" +
        Object.keys(data)
          .map((k) => "• " + api.names[k])
          .join("\n") +
        "\nLes autres univers resteront inchangés.";
      $("#confirm-import").disabled = false;
    } catch (error) {
      if (current === selection) {
        pending = null;
        $("#backup-preview").textContent = error.message;
      }
    }
  };
  $("#confirm-import").onclick = () => {
    if (!pending) return;
    try {
      api.restore(localStorage, pending);
      pending = null;
      $("#confirm-import").disabled = true;
      $("#import-file").value = "";
      $("#backup-preview").textContent = "";
      status(
        "Import terminé. Les progrès seront repris à la prochaine ouverture des activités.",
      );
    } catch (error) {
      status(error.message);
    }
  };
  $("#confirm-clear").onchange = (e) => {
    $("#clear-progress").disabled = !e.target.checked;
  };
  $("#clear-progress").onclick = () => {
    if (!$("#confirm-clear").checked) return;
    try {
      for (const key of api.keys) localStorage.removeItem(key);
      $("#confirm-clear").checked = false;
      $("#clear-progress").disabled = true;
      status(
        "Les progrès de cette application ont été effacés de ce navigateur. Les fichiers déjà téléchargés restent sur ton appareil.",
      );
    } catch {
      status(
        "Le stockage ne permet pas de terminer l’effacement. Vérifie les réglages de ton navigateur.",
      );
    }
  };
})();

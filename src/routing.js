(function () {
  "use strict";
  const path = location.pathname.replace(/\/+$/, "");
  if (location.hash.startsWith("#college/")) {
    const parts = location.hash.slice(9).split("/");
    if (parts.length === 3 && parts.every((p) => /^[a-z0-9-]+$/.test(p))) {
      location.replace("/cours/" + parts.join("/") + "/");
    }
  }
  window.DeclicRoutes = {
    parts() {
      if (/^#(college|accueil|temps|anglais|nombres)(\/|$)/.test(location.hash))
        return location.hash.slice(1).split("/");
      if (path.startsWith("/cours/"))
        return ["college", ...path.slice(7).split("/")];
      return ["accueil"];
    },
  };
})();

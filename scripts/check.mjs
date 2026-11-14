import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";

for (const file of await readdir("src")) {
  if (file.endsWith(".js")) execFileSync(process.execPath, ["--check", "src/" + file]);
}
for (const file of await readdir("scripts")) {
  if (file.endsWith(".mjs")) execFileSync(process.execPath, ["--check", "scripts/" + file]);
}

const manifest = JSON.parse(await readFile("src/manifest.webmanifest", "utf8"));
if (manifest.display !== "standalone" || manifest.start_url !== "/" || manifest.scope !== "/") {
  throw new Error("PWA manifest must declare a root-scoped standalone application.");
}
if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) {
  throw new Error("PWA manifest must declare at least one app icon.");
}
for (const icon of manifest.icons) {
  const path = icon.src.replace(/^\//, "");
  await readFile("src/" + path);
}
const html = await readFile("src/index.html", "utf8");
if (!html.includes('rel="manifest" href="/manifest.webmanifest"')) {
  throw new Error("The home page must link the PWA manifest.");
}
if (!html.includes('<script src="/pwa.js"></script>')) {
  throw new Error("The home page must register the PWA service worker.");
}
await readFile("src/pwa.js", "utf8");
await readFile("src/service-worker.js", "utf8");
console.log("Syntaxe des sources et scripts : OK");
console.log("PWA manifest, icon and service worker registration: OK");

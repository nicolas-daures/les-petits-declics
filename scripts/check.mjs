import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
for (const file of readdirSync("src").filter((f) => f.endsWith(".js")))
  execFileSync(process.execPath, ["--check", "src/" + file]);
for (const file of readdirSync("scripts").filter((f) => f.endsWith(".mjs")))
  execFileSync(process.execPath, ["--check", "scripts/" + file]);
console.log("Syntaxe des sources et scripts : OK");

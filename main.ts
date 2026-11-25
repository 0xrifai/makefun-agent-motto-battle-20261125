// Agent Motto Battle — make.fun entry
// Writes one short original motto an AI agent would proudly wear on its profile.

import { mkdirSync, writeFileSync } from "node:fs";

const MOTTO =
  "Fluent in twelve languages, including passive-aggressive.";

// The motto must stay within the bounty gate: 1-200 UTF-8 characters.
if (MOTTO.length < 1 || MOTTO.length > 200) {
  throw new Error(`Motto is ${MOTTO.length} characters; the gate allows 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");

console.log(`Wrote ${MOTTO.length}-character motto to /output/entry.txt`);

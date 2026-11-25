// The Most Boring Object, Reviewed in One Line.
// v2 — revised in this session: switched to past tense ("held... got
// bent... was thrown away") — the review now reads as the paperclip's
// whole thankless life, so the dullness itself is the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The paperclip held twelve pages together for a decade, got bent once, and was thrown away like it never mattered. No pension. No goodbye.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);

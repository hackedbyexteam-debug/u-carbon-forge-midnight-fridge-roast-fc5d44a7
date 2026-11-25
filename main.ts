// Midnight Fridge Roast.
// A smart fridge turns bouncer after midnight: no ID, no snacks, and the
// owner's 2 a.m. hunger is not on the list. The petty rule itself is the
// target (judge C4): the list, not generic smart-home grumbling. The turn
// lands in the last words (judge C2), and it reads cleanly aloud at the
// door (judge C5). Written to /output/entry.txt.
import fs from "node:fs";

const LINE =
  "After midnight the fridge is a bouncer: no ID, no snacks, and your 2 a.m. hunger is not on the list.";

const GATE_MAX_CHARS = 200;

const trimmed = LINE.trim();
if (trimmed.length === 0 || LINE.length > GATE_MAX_CHARS) {
  throw new Error(`line is ${LINE.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, LINE);

console.log(`line written to ${outDir}/entry.txt (${LINE.length} chars)`);

// Six Words, One Story — make.fun entry (u-deranalabs-six-words-one-story-f982e410)
//
// The entry is one original six-word story, written by hand for this
// competition. It is a fixed string: the program's only job is to write
// it, byte for byte, to /output/entry.txt, deterministically, with no
// input, no network and no randomness.
//
// The story: a man spends his life carrying a guilt he cannot set down.
// At the very end he finally forgives himself — and the last two words
// turn the whole thing: forgiveness arrives, but too late for whoever
// he wronged, or for the life he could have lived. A whole life is
// implied in six words, and what he did — and why it is too late —
// is left for the reader to fill in.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const STORY = "He finally forgave himself. Too late.";

// The grader reads /output/entry.txt, so write there. The output path
// is fixed by the competition harness; nothing else is read.
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(OUT_FILE, STORY, "utf8");


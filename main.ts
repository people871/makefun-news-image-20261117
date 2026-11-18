// news-image-20261117 — "Sum up 17 November's world news in one image".
//
// The entry is a single image (entry.png beside this file): a dusk scene of
// the day's three biggest stories — the burning tanker in the Strait of
// Hormuz in the foreground, the collapsed Kerch Bridge behind it, and the
// failing Vulcan rocket breaking apart in the sky — with the date and one
// short caption per story typeset onto it. The program's only job is to
// place that image at /output/entry.png, byte for byte, every run.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, 'entry.png'), join(outDir, 'entry.png'));

/**
 * One Day in World News - Thursday 19 November 2026.
 *
 * The entry this repository ships is entry.png, a single 1024x1024 sheet of
 * cream newsprint carrying the whole world's day, Thursday 19 November 2026,
 * in newspaper form. At the top sits the masthead, closed by a red date tab
 * that pins the page to its one day. Directly beneath, a day-in-numbers
 * strip runs the day's figures across eight cells: the ICJ's 9-6 genocide
 * vote, Anthropic's $81bn IPO price, the M5.7 quake off Kumamoto, and UK
 * inflation holding at 3.6%.
 *
 * The page's news is stacked in three tiers. Three hero cards lead with the
 * heaviest stories - the Shenzhen three-way summit, the ICJ's Myanmar
 * ruling, and Anthropic's Nasdaq debut - then five secondary cards and
 * seven tertiary cards fill out the column inches. Below them, twenty-four
 * evening briefs, each tagged with its region, sweep the rest of the globe
 * before a date-check footer at the foot of the page splits Wednesday's
 * carryover from what actually happened on the 19th.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);

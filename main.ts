/**
 * ONE SHEET, ONE DAY - Thursday 19 November 2026, printed as a broadsheet.
 *
 * entry.png is the finished artifact this repo produces: a 1024x1024 page of
 * cream newsprint onto which the entire world's news day is composed. The
 * masthead owns the top of the sheet, and the red date tab at its edge
 * stamps this edition as belonging to the 19th of November, 2026 and no
 * other day. Beneath it a day-in-numbers strip lays the key figures into
 * cells - the ICJ's 9-6 genocide vote, Anthropic's $81bn IPO price, the
 * M5.7 earthquake off Kumamoto, and UK inflation fixed at 3.6%.
 *
 * The reporting itself cascades down the page in three card tiers. Three
 * hero cards take the heaviest items of the day - the Shenzhen three-way
 * summit, the ICJ's ruling on Myanmar, and Anthropic ringing the bell on
 * Nasdaq - after which five secondary cards and seven tertiary cards fill
 * out the remaining column inches. Twenty-four evening briefs, each one
 * tagged with its region, then sweep across the rest of the globe, and a
 * date-check footer shuts the sheet: it separates what genuinely occurred
 * on the 19th from Wednesday's carryover that tried to ride along.
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

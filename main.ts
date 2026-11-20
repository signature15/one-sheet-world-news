/**
 * NEWSDAY: THE WORLD is a cream one-page news broadsheet for Thursday,
 * 19 November 2026, designed as a complete edition rather than a teaser.
 *
 * The finished entry.png image gathers 40 stories onto one square front page,
 * using a restrained newsprint ground to make the page feel printed and tactile.
 * Its masthead establishes the edition, while the stat band sets the day's
 * scale before the reader reaches the reporting. The band turns key facts into
 * a quick visual read and gives the page a firm statistical spine.
 *
 * Below that opening, the stories are ordered by weight and arranged so the
 * main narratives can be found immediately without losing the breadth of the
 * world report. A region tally keeps the geographic balance visible, showing
 * how the 40 stories are distributed across the edition's coverage.
 *
 * The page ends with a date-check footer that distinguishes events belonging
 * to Thursday 19 November from earlier coverage, reaction, or carryover. That
 * closing check makes the edition's one-day claim explicit and verifiable.
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

# Content engine

Finds the few AI stories worth explaining to ordinary readers and, from step 2, drafts them for the editor.
The full plan is the "AI-Portal content engine" doc. In short:

- It reads the feeds in `feeds.json` once a day.
- It groups items that cover the same story and keeps only stories carried by **at least 2 independent outlets**. A company's own announcement never counts as independent coverage of itself.
- It picks at most 2 stories a day. On a quiet day it picks none.
- Every draft is `status: draft`. Only the editor approves (see README, "How publishing works").

## Files

| Path | What |
| --- | --- |
| `engine/feeds.json` | Sources, their section and trust tier. Edit this to add or drop a feed. |
| `engine/seen.json` | Links already drafted or rejected, so a story never comes back. |
| `scripts/engine/lib.mjs` | Feed parsing, AI filter, story grouping, ranking. |
| `scripts/engine/dry-run.mjs` | Writes `engine-report.md`: today's picks, roundup candidates, feed health. |
| `.github/workflows/engine.yml` | Runs the dry run daily at 06:00 Italian time; the report is in the run summary. |

Run it locally with `npm run engine:dry-run`.

## Steps

1. Feeds and dry run (this step). No model, no writing.
2. Reader-impact triage and drafting with Claude, the content gate, and a daily "Drafts" pull request.
3. Sunday roundup ("The week in AI, explained") and Observatory entries.

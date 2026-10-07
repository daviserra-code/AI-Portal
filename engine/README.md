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
| `engine/prompts/triage.md` | How stories are judged. Edit it to change what counts as worth a piece. |
| `engine/prompts/draft.md` | How drafts are written: voice, rules, banned phrases. Edit it to tune the writing. |
| `scripts/engine/collect.mjs` | Reads all feeds and returns ranked stories. |
| `scripts/engine/dry-run.mjs` | Writes `engine-report.md`: today's picks, roundup candidates, feed health. No model. |
| `scripts/engine/draft.mjs` | Triage (Claude Haiku 5.5) and drafting (Claude Opus 5.5), the content gate, and `engine-drafts.md`. |
| `.github/workflows/engine.yml` | Runs daily at 06:00 Italian time and opens a "Drafts for <day>" pull request. Needs the `ANTHROPIC_API_KEY` secret. |

Run it locally with `npm run engine:dry-run`, or `ANTHROPIC_API_KEY=... npm run engine:draft` to draft.

## How a draft is made

1. Stories with 2+ independent outlets go to triage, which scores each from 0 to 5 on reader impact, whether it will last, whether we can add something, and relevance to super intelligence and policy. A story needs 12 out of 20. A story that fits an existing page is listed as "update" instead of drafted.
2. For each pick (max 2), the engine fetches the source pages and asks Claude for a draft that uses only those sources, with `[EDITOR: ...]` notes on anything to check. Source URLs the model did not receive are removed.
3. The draft must pass `scripts/check-content.mjs`. A failing draft gets one retry with the errors, then is dropped.
4. Drafts land in a pull request as `status: draft` with a checklist for each one. The editor gets a Telegram message with a link. To publish, the editor fixes the text, deletes the notes and comments `/publish` on the pull request (see README, "How publishing works"). To reject a story, delete its file; its links are in `seen.json`, so it never comes back.

## Repository setting

The workflow opens pull requests with GitHub's built-in token. This needs Settings > Actions > General > Workflow permissions > "Allow GitHub Actions to create and approve pull requests". Without it, drafts are pushed to a `drafts/...` branch and the run shows a warning.

## Steps

1. Feeds and dry run. Done.
2. Reader-impact triage and drafting with Claude, the content gate, and a daily "Drafts" pull request. Done.
3. Sunday roundup ("The week in AI, explained") and Observatory entries.

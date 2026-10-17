// Sends the editor a one-line Telegram message on a day the content engine drafted nothing,
// so a quiet day never looks like a broken engine. Reads engine-summary.json from draft.mjs.
// Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID; without them it does nothing.
// Usage: node scripts/editor/quiet.mjs [summary-file]
import fs from "node:fs";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chat = process.env.TELEGRAM_CHAT_ID;
if (!token || !chat) {
  console.log("::notice::Telegram is not set up (TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID), so no message was sent.");
  process.exit(0);
}

let sum = {};
try { sum = JSON.parse(fs.readFileSync(process.argv[2] || "engine-summary.json", "utf8")); } catch {}

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// The twice-weekly writer routine runs on Wednesday (two explainers) and Sunday (the weekly
// roundup and one explainer) at 05:47 in Italy. Keep in step with engine/README.md.
function nextWriterRun(now = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Rome", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
    .formatToParts(now).map((p) => [p.type, p.value]));
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
  const beforeRun = Number(parts.hour) * 60 + Number(parts.minute) < 5 * 60 + 47;
  // In winter the engine runs at 05:00, before that morning's writer run.
  if (beforeRun && day === 0) return "later this morning (the weekly roundup and one explainer)";
  if (beforeRun && day === 3) return "later this morning (two explainers)";
  return day >= 0 && day < 3 ? "Wednesday (two explainers)" : "Sunday (the weekly roundup and one explainer)";
}

const lines = ["☕ <b>AI-Portal: no drafts today</b>"];
if (sum.feeds) {
  lines.push(sum.candidates
    ? `The engine ran fine. ${sum.candidates} of ${sum.stories} stories had 2+ independent outlets, but none reached ${sum.minTotal}/20.`
    : `The engine ran fine. None of today's ${sum.stories} stories had 2+ independent outlets.`);
  if (sum.best) lines.push(`Best: <i>${esc(sum.best.headline)}</i>, ${sum.best.total}/20 (${esc(sum.best.reason)})`);
  if (sum.silentFeeds?.length >= 5) lines.push(`⚠️ ${sum.silentFeeds.length} of ${sum.feeds} feeds returned nothing: ${esc(sum.silentFeeds.join(", "))}`);
}
lines.push(`Next writer run: ${nextWriterRun()}.`);

const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ chat_id: chat, text: lines.join("\n"), parse_mode: "HTML", disable_web_page_preview: true, disable_notification: true }),
});
const body = await res.json().catch(() => ({}));
if (!body.ok) {
  console.log(`::warning::Telegram refused the message: ${body.description ?? res.status}. Check TELEGRAM_CHAT_ID and that you have messaged the bot at least once.`);
  process.exit(0);
}
console.log("Telegram message sent.");

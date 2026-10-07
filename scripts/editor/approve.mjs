// Marks the given draft files as approved by the editor. The Publish workflow calls it only after
// the editor comments /publish on the pull request, so approval is always the editor's own act.
// Usage: node scripts/editor/approve.mjs <editor-slug> <file>...
import fs from "node:fs";

const [editor, ...files] = process.argv.slice(2);
if (!editor || files.length === 0) {
  console.error("usage: approve.mjs <editor-slug> <file>...");
  process.exit(2);
}

let changed = 0;
for (const file of files) {
  if (!/^content\/(articles|glossary)\/[^/]+\.md$/.test(file) || !fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const end = text.indexOf("\n---", 3);
  if (!text.startsWith("---") || end < 0) continue;
  let front = text.slice(0, end);
  if (!/^status: draft[ \t]*$/m.test(front)) continue;
  front = front.replace(/^approvedBy:.*\n/m, "");
  front = front.replace(/^status: draft[ \t]*$/m, `status: approved\napprovedBy: ${editor}`);
  fs.writeFileSync(file, front + text.slice(end));
  console.log(`approved ${file}`);
  changed++;
}
console.log(`${changed} file(s) approved.`);

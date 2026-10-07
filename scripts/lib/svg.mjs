// Rules for article illustrations (engine/prompts/illustration.md). Used by the content engine
// before it saves an SVG and by the content check, so an unsafe or off-style file never ships.
const ALLOWED = new Set(["svg", "g", "rect", "circle", "ellipse", "line", "polyline", "polygon", "path"]);
export const MAX_SVG_BYTES = 40_000;

/** Returns a list of problems; empty means the SVG is fine. */
export function svgProblems(svg) {
  const problems = [];
  if (!/^\s*<svg[\s>]/.test(svg)) problems.push("must start with <svg>");
  if (!/viewBox="0 0 1200 675"/.test(svg)) problems.push('needs viewBox="0 0 1200 675"');
  if (Buffer.byteLength(svg) > MAX_SVG_BYTES) problems.push(`over ${MAX_SVG_BYTES / 1000} KB`);
  for (const [, tag] of svg.matchAll(/<\s*([a-zA-Z][\w:-]*)/g)) {
    if (!ALLOWED.has(tag)) problems.push(`element <${tag}> is not allowed`);
  }
  if (/\son\w+\s*=/i.test(svg)) problems.push("event attributes are not allowed");
  if (/(href|xlink:href)\s*=/i.test(svg)) problems.push("links are not allowed");
  if (/url\s*\(|javascript:|<!/i.test(svg)) problems.push("url(), javascript: and <! are not allowed");
  return [...new Set(problems)];
}

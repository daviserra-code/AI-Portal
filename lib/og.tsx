// Share cards: the picture shown when a page is posted on social media or in a chat app.
// Drawn at build time in the Field Notes style (paper, ink borders, section colour, sun yellow).
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const fonts = () => {
  const read = (f: string) => fs.readFileSync(path.join(process.cwd(), "assets/fonts", f));
  return [
    { name: "Bricolage", data: read("BricolageGrotesque-800.ttf"), weight: 800 as const, style: "normal" as const },
    { name: "Atkinson", data: read("AtkinsonHyperlegible-400.ttf"), weight: 400 as const, style: "normal" as const },
  ];
};

// Same colours as the section tags in app/globals.css.
export const tagColour: Record<string, string> = {
  understand: "#b8f2d0",
  use: "#cfd8ff",
  "live-with-it": "#ffb3c7",
  "whats-new": "#ffd23f",
  "super-intelligence": "#e3d0ff",
  glossary: "#ffffff",
};

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);

export function shareCard({ tag, colour, title, text }: { tag: string; colour: string; title: string; text?: string }) {
  const ink = "#121212";
  const size = title.length > 70 ? 60 : title.length > 45 ? 70 : 82;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fffdf6", padding: 40 }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: `6px solid ${ink}`,
            boxShadow: `14px 14px 0 ${ink}`,
            background: "#ffffff",
            padding: "44px 52px",
            marginRight: 14,
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", fontFamily: "Atkinson", fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: ink, background: colour, border: `3px solid ${ink}`, padding: "6px 14px" }}>
              {tag}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Bricolage", fontSize: size, lineHeight: 1.05, color: ink, letterSpacing: -1 }}>{clip(title, 110)}</div>
            {text ? <div style={{ display: "flex", fontFamily: "Atkinson", fontSize: 28, lineHeight: 1.35, color: "#4a4a4a", marginTop: 22 }}>{clip(text, 150)}</div> : null}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", fontFamily: "Bricolage", fontSize: 34, color: ink }}>
              <div style={{ display: "flex", width: 30, height: 30, background: "#ffd23f", border: `3px solid ${ink}`, marginRight: 14 }} />
              AI-Portal
            </div>
            <div style={{ display: "flex", fontFamily: "Atkinson", fontSize: 24, color: "#4a4a4a" }}>ai-portal.si · AI explained, edited by people</div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts() },
  );
}

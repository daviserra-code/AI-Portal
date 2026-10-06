import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Atkinson_Hyperlegible, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { themeInitScript } from "@/lib/theme";
import { pillars, site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "800"], variable: "--font-display", display: "swap" });
const body = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf6" },
    { media: "(prefers-color-scheme: dark)", color: "#14130f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { siteName: site.name, type: "website", locale: "en" },
};

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#org`,
      name: site.name,
      url: site.url,
      publishingPrinciples: `${site.url}/editorial-policy`,
      correctionsPolicy: `${site.url}/corrections`,
      ethicsPolicy: `${site.url}/ai-policy`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: site.language,
      publisher: { "@id": `${site.url}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language} className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="site-header">
          <div className="wrap">
            <div className="brand">
              <Link className="logo" href="/" aria-label={`${site.name} home`}>
                A<span className="i">i</span>-Portal
              </Link>
            </div>
            <SiteNav links={[...pillars.map((p) => ({ href: `/${p.slug}`, label: p.name })), { href: "/glossary", label: "Glossary" }]} />
            <ThemeToggle />
          </div>
        </header>
        <main id="main" className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <nav aria-label="About AI-Portal">
              <Link href="/about">About</Link>
              <Link href="/editorial-policy">Editorial policy</Link>
              <Link href="/ai-policy">How we use AI</Link>
              <Link href="/corrections">Corrections</Link>
              <a href="/feed.xml">RSS</a>
            </nav>
            <span className="stamp">Checked by a human</span>
            <p>AI-Portal is written with AI and checked, edited and approved by a named person. Every article says how it was made.</p>
          </div>
        </footer>
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}

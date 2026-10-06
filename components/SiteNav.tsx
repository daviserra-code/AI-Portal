"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav({ links }: { links: { href: string; label: string }[] }) {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Sections">
      {links.map((l) => (
        <Link key={l.href} href={l.href} aria-current={path === l.href || path.startsWith(l.href + "/") ? "page" : undefined}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

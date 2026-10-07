import { ogSize, shareCard } from "@/lib/og";
import { site } from "@/lib/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = site.name;

export default function Image() {
  return shareCard({ tag: "AI explained", colour: "#ffd23f", title: "AI and super intelligence, in plain English.", text: site.description });
}

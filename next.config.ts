import type { NextConfig } from "next";

// One site, one content set. Every other domain we own redirects into ai-portal.si
// so search engines see a single canonical source (see design-system and plan docs).
const canonical = "https://ai-portal.si";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ai-portal.si" }],
        destination: `${canonical}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?si-portal\\.si" }],
        destination: `${canonical}/super-intelligence`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?superintelligenceobservatory\\.cloud" }],
        destination: `${canonical}/super-intelligence/observatory`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

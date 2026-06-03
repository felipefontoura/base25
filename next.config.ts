import type { NextConfig } from "next";

const isPagesExport = process.env.PAGES_EXPORT === "true";

const nextConfig: NextConfig = {
  // Static export is used for GitHub Pages deployment.
  // When deploying to Vercel (full SSR), remove or unset PAGES_EXPORT.
  ...(isPagesExport && {
    output: "export",
    basePath: "/base25",
  }),
};

export default nextConfig;

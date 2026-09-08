import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into ./out — the Pages workflow uploads that directory.
  output: "export",
  devIndicators: false,
};

export default nextConfig;

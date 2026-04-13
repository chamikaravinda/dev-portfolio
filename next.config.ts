import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dev-portfolio',
  assetPrefix: '/dev-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

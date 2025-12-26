import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    viewTransition: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

module.exports = nextConfig;

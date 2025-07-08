import type { NextConfig } from "next";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import createMDX from "@next/mdx";
// import remarkGfm from "remark-gfm";
// import rehypePrism from "rehype-prism-plus";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
};

const withMDX = createMDX({});

// const withMDX = createMDX({
//   // Add markdown options here
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });
//
// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
//   },
// });

export default withMDX(nextConfig);

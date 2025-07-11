import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Metadata } from "@/types";
import { myComponents } from "@/mdx-components";
import rehypePrism from "rehype-prism-plus";

const postsDirectory = path.join(process.cwd(), "content");

export async function getPosts() {
  const files = fs.readdirSync(postsDirectory);
  const blogPosts = await Promise.all(
    files.map(async (file) => await getPostBySlug(path.parse(file).name)),
  );

  return blogPosts.filter((post) => post !== null);
}

export async function getPostBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<Metadata>({
    source: fileContent,
    components: myComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: { rehypePlugins: [rehypePrism] },
    },
  });

  if (!frontmatter || !frontmatter.slug || !frontmatter.published) {
    return null;
  }

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Metadata } from "@/types";

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
    options: { parseFrontmatter: true },
  });

  // if (!frontmatter || !frontmatter.slug || !frontmatter.published) {
  //   return null;
  // }

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

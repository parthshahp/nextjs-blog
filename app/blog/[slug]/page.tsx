import React from "react";
import { getPostBySlug } from "../fetchers";
import { MdxProvider } from "@/components/mdx-provider";


export default async function Page({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;
  const { frontmatter, content, slug: _ } = await getPostBySlug(slug);
  console.log(_);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>Date Published: {frontmatter.date}</p>
      <p>Tags: {frontmatter.tags}</p>
      <hr />
      <article>
        <MdxProvider>
          {content}
        </MdxProvider>
      </article>
    </>
  );
}

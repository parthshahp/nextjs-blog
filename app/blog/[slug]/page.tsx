import React from "react";
import { getPostBySlug, getPosts } from "../fetchers";

export default async function Page({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return <h1>Oops! This page doesn&apos;t exist.</h1>;
  }

  const { frontmatter, content, slug: _ } = post;
  console.log(_);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>Date Published: {frontmatter.date}</p>
      <p>Tags: {frontmatter.tags}</p>
      <hr />
      <article>
        {content}
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

import React from "react";
import { getPostBySlug, getPosts } from "../fetchers";
import styles from './page.module.css';

export default async function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return <h1>Oops! This page doesn&apos;t exist.</h1>;
  }

  const { frontmatter, content } = post;

  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>Date Published: {frontmatter.date}</p>
      <p>Tags: {frontmatter.tags}</p>
      <hr className={styles.hr} />
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

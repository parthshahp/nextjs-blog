import React from "react";
import type { Metadata } from "../utils";

export default async function Page({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;
  const { default: MDXContent, metadata }: { default: React.FC, metadata: Metadata } = await import(`@/content/${slug}.mdx`);

  return (
    <>
      <h1>{metadata.title}</h1>
      <p>Date Published: {metadata.date}</p>
      <p>Tags: {metadata.tags}</p>
      <hr />
      <article>
        <MDXContent />
      </article>
    </>
  );
}

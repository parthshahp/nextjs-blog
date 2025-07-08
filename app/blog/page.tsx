import HeaderLayout from "@/components/header-layout";
import type { Metadata } from "@/types";
import Link from "next/link";
import styles from './page.module.css';
import { getPosts } from "./fetchers";

export default function Blog() {
  return (
    <>
      <HeaderLayout title="Blog" subtitle="Thoughts, code, ideas, and more">
        <p>
          Welcome to my blog where I share my thoughts and experiences on software development and
          technology.
        </p>
      </HeaderLayout>
      <PostList />
    </>
  );
}

async function PostList() {
  const allPosts = await getPosts();
  const allPostsMetadata: Metadata[] = allPosts.map((post) => post.frontmatter);

  if (!allPosts?.length) {
    return (
      <div className={styles.blog__listContainer}>
        <h2>Recent Posts</h2>
        <p>No posts yet! Check back soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.blog__listContainer}>
      <h2 className={styles.blog__listTitle}>Recent Posts</h2>
      <ul className={styles.blog__postList}>
        {allPostsMetadata.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.blog__postLink}
          >
            <li className={`${styles.blog__post} ${styles.card}`}>
              <h3>{post.title}</h3>
              {/* <p className={styles.blog__postDate}>{formatDate(post.date, false)}</p> */}
              <p className={styles.blog__postDate}>{post.date}</p>
              <p className={styles.blog__postDescription}>{post.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

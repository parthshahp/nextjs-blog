import HeaderLayout from "@/components/header-layout";
import { getBlogPosts, formatDate } from "./utils";
import Link from "next/link";
import styles from './page.module.css';

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

function PostList() {
  const posts = getBlogPosts();

  if (!posts.length) {
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
        {posts.map((post) => (
          <Link
            key={post.metadata.slug}
            href={`/blog/${post.metadata.slug}`}
            className={styles.blog__postLink}
          >
            <li className={`${styles.blog__post} ${styles.card}`}>
              <h3>{post.metadata.title}</h3>
              <p className={styles.blog__postDate}>{formatDate(post.metadata.date, false)}</p>
              <p className={styles.blog__postDescription}>{post.metadata.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

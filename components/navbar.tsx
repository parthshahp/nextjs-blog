"use client";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import the CSS module
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav aria-label="Main navigation" className={styles.navContainer}>
      {" "}
      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            aria-current={path === "/" ? "page" : undefined}
            className={styles.navLink}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            aria-current={path === "/blog" ? "page" : undefined}
            className={styles.navLink}
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            href="/books"
            aria-current={path === "/books" ? "page" : undefined}
            className={styles.navLink}
          >
            books
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/parthshahp"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/parthshahdev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}

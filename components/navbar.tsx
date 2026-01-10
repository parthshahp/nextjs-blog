"use client";
// import Link from "next/link";
import { Link } from "next-view-transitions";
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
        {/*<li>
          <Link
            href="/writing"
            aria-current={path === "/writing" ? "page" : undefined}
            className={styles.navLink}
          >
            writing
          </Link>
        </li>*/}
        <li>
          <Link
            href="/notes"
            aria-current={path === "/notes" ? "page" : undefined}
            className={styles.navLink}
          >
            notes
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

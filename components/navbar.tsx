'use client'
import Link from "next/link";
import styles from "./navbar.module.css"; // Import the CSS module
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav aria-label="Main navigation" className={styles.navContainer}> {/* Apply .navContainer to the nav tag */}
      <ul className={styles.navList}>
        <li>
          <Link
            href="/"
            aria-current={path === '/' ? 'page' : undefined}
            className={styles.navLink}
          >
            home
          </Link>
        </li>
        <li>
          {/* Apply .navLink to the <a> tag */}
          <a
            href="/blog"
            aria-current={path === '/blog' ? 'page' : undefined}
            className={styles.navLink}
          >
            blog
          </a>
        </li>
        <li>
          {/* Apply .navLink to external links too for consistent styling */}
          <a
            href="https://github.com/parthshahp"
            target="_blank"
            rel="noopener noreferrer" /* Added for security best practice with target="_blank" */
            className={styles.navLink}
          >
            github
          </a>
        </li>
        <li>
          {/* Apply .navLink to external links */}
          <a
            href="https://www.linkedin.com/in/parthshahdev/"
            target="_blank"
            rel="noopener noreferrer" /* Added for security best practice with target="_blank" */
            className={styles.navLink}
          >
            linkedin
          </a>
        </li>
      </ul>
    </nav>
  )
}

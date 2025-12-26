import HeaderLayout from "@/components/header-layout";
import styles from "./page.module.css";

export default function Books() {
  return (
    <>
      <HeaderLayout subtitle="What I've been reading lately">
        <p>
          A personal log of books I&apos;ve been reading recently, along with
          what I&apos;m currently reading. <br />
          <br />
          While Fantasy is my comfort zone, I&apos;ve been making an effort to
          branch out.
        </p>
      </HeaderLayout>
      <div className="books-section">
        <h2>Books</h2>
        <p>
          Currently reading <i>A Drop of Corruption</i> by Robert Jackson
          Bennett
        </p>
        <h3>2025</h3>
        <ul className={styles.bookList}>
          <li>
            <i>Kafka on the Shore</i> by Haruki Murakami
          </li>
          <li>
            <i>The Tainted Cup</i> by Robert Jackson Bennett
          </li>
          <li>
            <i>A Gentleman in Moscow</i> by Amor Towles
          </li>
          <li>
            <i>The Magician&apos;s Daughter</i> by H.G. Parry
          </li>
          <li>
            <i>The Light of All That Falls</i> by James Islington
          </li>
          <li>
            <i>An Echo of Things to Come</i> by James Islington
          </li>
          <li>
            <i>The Shadow of What Was Lost</i> by James Islington
          </li>
        </ul>
      </div>
    </>
  );
}

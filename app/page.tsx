import styles from "./page.module.css";
import HeaderLayout from "@/components/header-layout";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <>
      <HeaderLayout>
        <>
          <p>
            Hi! I&apos;m Parth, a full-stack developer currently working for{" "}
            <a target="_blank" href="https://www.commerce.com">
              <span className={`${styles.underline} ${styles.commerce}`}>
                Commerce
              </span>
            </a>{" "}
            and based in Atlanta, Georgia.
          </p>
          <p>
            I have a passion for building applications, watching movies, and
            learning languages!
          </p>
          <p>
            Recently, I&apos;ve been enjoying working in{" "}
            <span className={`${styles.underline} ${styles.rust}`}>Rust</span>{" "}
            and
            <span> </span>
            <span className={`${styles.underline} ${styles.typescript}`}>
              Typescript
            </span>
            .
            {/* <span className={`${styles.underline} ${styles.golang}`}>Go</span>. */}
          </p>
          <p>Feel free to explore and go through my projects and blog posts!</p>
        </>
      </HeaderLayout>

      <div className="projects-section">
        <h2>Projects</h2>
        <Carousel />
      </div>
    </>
  );
}

import Image from "next/image";
import styles from "./header.module.css"; // Import the CSS module

export default function Header({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className={styles.headerSection}> {/* Apply .headerSection class */}
      <div className={styles.headerIntro}> {/* Apply .headerIntro class */}
        <h1 className={styles.headerTitle}>{title}</h1> {/* Apply .headerTitle class */}
        <h2 className={styles.headerSubtitle}>{subtitle}</h2> {/* Apply .headerSubtitle class */}
      </div>
      <Image src="/headshot_cropped.webp" alt="Parth Shah" className={styles.headshot} width={200} height={200} /> {/* Apply .headshot class and explicitly set height for Next/Image */}
    </div>
  );
}

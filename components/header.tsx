import Image from "next/image";
import headshot from "@/public/headshot_cropped.webp";
import styles from "./header.module.css"; // Import the CSS module

export default function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={styles.headerSection}>
      <div className={styles.headerIntro}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <h2 className={styles.headerSubtitle}>{subtitle}</h2>
      </div>
      <Image
        src={headshot}
        alt="Parth Shah"
        className={styles.headshot}
        width={200}
        height={200}
        sizes="150px"
        placeholder="blur"
        priority
      />
    </div>
  );
}

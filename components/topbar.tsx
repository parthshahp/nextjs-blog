import styles from "./topbar.module.css";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Topbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Parth Shah"
          className="logo"
          width="36"
          height="26"
        />
      </Link>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
    </div>
  );
}

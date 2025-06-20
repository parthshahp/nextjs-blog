import Header from "./header";
import Navbar from "./navbar";
import styles from "./header-layout.module.css";

type HeaderLayoutProps = {
  title?: string,
  subtitle?: string,
  children?: React.ReactElement
}

export default function HeaderLayout({ title = 'Parth Shah', subtitle = 'Software Engineer from Atlanta', children }: HeaderLayoutProps) {
  return (<div className={styles.layout}>
    <Header title={title} subtitle={subtitle} />
    <Navbar />
    <div className={styles.introContainer}>
      <div className={styles.intro}>
        {children}
      </div>
    </div>
  </div>
  )
}

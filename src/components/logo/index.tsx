import Link from "next/link";
import styles from "./index.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <span className={styles.brand}>IMDB</span>
      <span className={styles.clone}>Clone</span>
    </Link>
  );
}

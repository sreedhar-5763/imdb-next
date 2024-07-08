import Link from "next/link";
import styles from "./index.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.text}>The requested page not found!</h2>
      <Link href="/" className={styles.link}>
        Go Home
      </Link>
    </div>
  );
}

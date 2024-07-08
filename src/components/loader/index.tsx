import Image from "next/image";
import styles from "./index.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Image src="/spinner.svg" alt="loading" width={50} height={50} />
      <p className={styles.text}>Loading...</p>
    </div>
  );
}

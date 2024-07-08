import Link from "next/link";
import { IMenuItem } from "./types";
import styles from "./index.module.css";

export default function MenuItem({ title, address }: IMenuItem) {
  return (
    <Link href={address} className={styles.menuItem}>
      {title}
    </Link>
  );
}

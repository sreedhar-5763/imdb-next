"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { INavItem } from "./types";
import styles from "./index.module.css";

export default function NavItem({ title, address }: INavItem) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Link
      href={`/movie?genre=${address}`}
      className={`${styles.navItem} ${genre === address ? styles.active : ""}`}
    >
      {title}
    </Link>
  );
}

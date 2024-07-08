import Image from "next/image";
import { IMovieExtraInfo } from "./types";
import styles from "./index.module.css";

export default function MovieExtraInfo({
  release_date,
  vote_count,
  card = false,
}: IMovieExtraInfo) {
  if (card) {
    return (
      <div className={`${styles.flexRow} ${styles.gap18}`}>
        <p>{release_date || "N/A"}</p>
        <div className={`${styles.flexRow} ${styles.gap4}`}>
          <Image
            src="/thumbs-up.svg"
            alt="likes count"
            width={24}
            height={24}
            className={styles.svg}
          />
          <p>{vote_count}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.movieExtraInfo}>
      <p>
        Release date: <span>{release_date}</span>
      </p>
      <p>
        Vote count: <span>{vote_count}</span>
      </p>
    </div>
  );
}

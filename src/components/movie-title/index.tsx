import { IMovieTitle } from "./types";
import styles from "./index.module.css";

export default function MovieTitle({
  title,
  original_title,
  card = false,
}: IMovieTitle) {
  const className = `${styles.title} ${card ? "ellipsis line-clamp-one" : ""}`;

  return <h3 className={className}>{title || original_title || "N/A"}</h3>;
}

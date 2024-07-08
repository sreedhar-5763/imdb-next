import { IMovieOverview } from "./types";
import styles from "./index.module.css";

export default function MovieOverview({
  overview,
  card = false,
}: IMovieOverview) {
  const className = `${styles.overview} ${
    card ? "ellipsis line-clamp-two" : ""
  }`;

  return <p className={className}>{overview}</p>;
}

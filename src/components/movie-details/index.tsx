import MoviePoster from "../movie-poster";
import MovieOverview from "../movie-overview";
import MovieTitle from "../movie-title";
import MovieExtraInfo from "../movie-extra-info";
import { IMovieDetails } from "./types";
import styles from "./index.module.css";

export default function MovieDetails({ movie }: IMovieDetails) {
  return (
    <section className={styles.movieDetails}>
      <div className={styles.poster}>
        <MoviePoster {...movie} />
      </div>
      <div className={styles.info}>
        <MovieTitle {...movie} />
        <MovieOverview {...movie} />
        <MovieExtraInfo {...movie} />
      </div>
    </section>
  );
}

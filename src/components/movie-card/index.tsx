import Link from "next/link";
import { IMovie } from "@/lib/movies/types";
import MoviePoster from "../movie-poster";
import MovieOverview from "../movie-overview";
import MovieTitle from "../movie-title";
import MovieExtraInfo from "../movie-extra-info";
import styles from "./index.module.css";

export default function MovieCard(movie: IMovie) {
  return (
    <Link href={`/movie/${movie.id}`} className={styles.movieCard}>
      <div className={styles.poster}>
        <MoviePoster {...movie} />
      </div>
      <div className={styles.info}>
        <MovieOverview {...movie} card />
        <MovieTitle {...movie} card />
        <MovieExtraInfo {...movie} card />
      </div>
    </Link>
  );
}

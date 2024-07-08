import { IMoviesList } from "./types";
import MovieCard from "../movie-card";
import styles from "./index.module.css";

export default function MoviesList({ movies }: IMoviesList) {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}

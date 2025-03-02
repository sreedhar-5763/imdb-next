import { fetchMovies } from "@/lib/movies";
import { MoviesList } from "@/components";
import { IHome } from "./types";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: IHome) {
  const { genre } = searchParams;
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const movies = await fetchMovies(url);

  return <MoviesList movies={movies} />;
}

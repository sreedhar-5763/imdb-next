import { fetchMovie } from "@/lib/movies";
import { MovieDetails } from "@/components";
import { IMoveDetailsPage } from "./types";

const API_KEY = process.env.API_KEY;

export default async function MovieDetailsPage({ params }: IMoveDetailsPage) {
  const { id } = params;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const movie = await fetchMovie(url);

  return <MovieDetails movie={movie} />;
}

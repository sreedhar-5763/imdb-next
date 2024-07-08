import { IMovie } from "./types";

export async function fetchMovies(url: string): Promise<IMovie[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function fetchMovie(url: string): Promise<IMovie> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

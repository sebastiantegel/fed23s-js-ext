import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { Movies } from "./Movies";
import { SearchMovieForm } from "./SearchMovieForm";
import { getMovies } from "../services/movieService";

interface MovieAppState {
  movies: Movie[];
  fetchDone: boolean;
}

export const MovieApp = () => {
  const moviesFromLs: Movie[] = JSON.parse(
    localStorage.getItem("movies") || "[]"
  );
  const [state, setState] = useState<MovieAppState>({
    movies: moviesFromLs,
    fetchDone: moviesFromLs.length > 0,
  });

  const getData = async (searchText: string) => {
    const movies = await getMovies(searchText);
    localStorage.setItem("movies", JSON.stringify(movies));
    setState({ fetchDone: true, movies });
  };

  useEffect(() => {
    if (state.fetchDone) {
      return;
    }

    getData("star");
  });

  return (
    <>
      <SearchMovieForm getData={getData} />
      <Movies movies={state.movies} />
    </>
  );
};

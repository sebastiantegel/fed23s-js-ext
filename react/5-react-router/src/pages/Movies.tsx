import { useState } from "react";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { MovieSearch } from "../components/MovieSearch";
import { ShowMovies } from "../components/ShowMovies";
import { Spinner } from "../components/Spinner";
import { useLoaderData } from "react-router-dom";
import { IMoviesLoader } from "../loaders/moviesLoader";

export const Movies = () => {
  const { movies } = useLoaderData() as IMoviesLoader;

  const [moviesInState, setMovies] = useState<IMovie[]>(movies);
  const [loading, setLoading] = useState(false);

  const getMovies = async (searchText: string) => {
    try {
      setLoading(true);
      const response = await axios.get<IOmdbResponse>(
        "https://omdbapi.com/?apikey=416ed51a&s=" + searchText
      );

      if (response.status !== 200) {
        throw new Error(JSON.stringify(response.data));
      }

      setMovies(response.data.Search);
      localStorage.setItem("movies", JSON.stringify(response.data.Search));
    } catch (error) {
      console.log("Ett fel inträffade: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MovieSearch searchMovies={getMovies} />
      {loading && <Spinner></Spinner>}
      {!loading && (
        <>
          <h1>Movies</h1>
          <ShowMovies movies={moviesInState}></ShowMovies>
        </>
      )}
    </>
  );
};

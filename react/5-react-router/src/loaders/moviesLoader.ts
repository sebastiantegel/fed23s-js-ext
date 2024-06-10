import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export interface IMoviesLoader {
  movies: IMovie[];
}

export const moviesLoader = async () => {
  const response = await axios.get<IOmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star"
  );

  const data: IMoviesLoader = { movies: response.data.Search };

  return data;
};

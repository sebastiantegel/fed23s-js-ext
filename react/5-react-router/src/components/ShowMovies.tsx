import { IMovie } from "../models/IMovie";
import { ShowMovie } from "./ShowMovie";

interface IShowMoviesProps {
  movies: IMovie[];
}

export const ShowMovies = ({ movies }: IShowMoviesProps) => {
  return (
    <>
      {movies.map((movie) => {
        return <ShowMovie key={movie.imdbID} movie={movie}></ShowMovie>;
      })}
    </>
  );
};

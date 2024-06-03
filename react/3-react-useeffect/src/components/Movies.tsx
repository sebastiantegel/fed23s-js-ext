import { useState } from "react";
import { Movie } from "../models/Movie";
import { MovieItem } from "./MovieItem";

interface IMoviesProps {
  movies: Movie[];
}

export const Movies = ({ movies }: IMoviesProps) => {
  // const [modifiedMovies, setModifiedMovies] = useState<Movie[]>(movies);

  return (
    <div>
      <div className="movies">
        {movies
          .filter((movie, i) => {
            if (i % 2 === 1) return movie;
          })
          .map((movie) => (
            <MovieItem movie={movie} key={movie.imdbID} />
          ))}
      </div>
    </div>
  );
};

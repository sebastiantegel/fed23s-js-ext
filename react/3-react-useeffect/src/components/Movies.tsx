import { useState } from "react";
import { Movie } from "../models/Movie";
import { MovieItem } from "./MovieItem";

interface IMoviesProps {
  movies: Movie[];
}

export const Movies = ({ movies }: IMoviesProps) => {
  const [asc, setAsc] = useState(false);
  const [showNewerMovies, setShowNewerMovies] = useState(false);

  const sort = () => {
    setAsc(!asc);
  };

  let modifiedMovies = movies.sort((a, b) => {
    if (a.Title > b.Title) return 1;
    if (a.Title < b.Title) return -1;
    return 0;
  });

  if (asc) {
    modifiedMovies = modifiedMovies.reverse();
  }

  if (showNewerMovies) {
    modifiedMovies = modifiedMovies.filter((movie) => +movie.Year > 2000);
  }

  return (
    <div>
      <button onClick={sort}>Sortera</button>
      <input
        type="checkbox"
        checked={showNewerMovies}
        onChange={() => setShowNewerMovies(!showNewerMovies)}
      />
      <div className="movies">
        {modifiedMovies.map((movie) => (
          <MovieItem movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

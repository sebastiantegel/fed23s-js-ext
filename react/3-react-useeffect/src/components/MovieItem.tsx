import { Movie } from "../models/Movie";

interface IMovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: IMovieItemProps) => {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <div className="img-container">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

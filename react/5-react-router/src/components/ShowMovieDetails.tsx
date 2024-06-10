import { Link } from "react-router-dom";
import { IMovieExt } from "../models/IMovie";

interface IShowMovieDetailsProps {
  movie: IMovieExt;
}

export const ShowMovieDetails = ({ movie }: IShowMovieDetailsProps) => {
  return (
    <>
      <Link to={"/movies"}>Tillbaka</Link>
      <h3>{movie.Title}</h3>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} />
      <ul>
        {movie.Ratings.map((rating) => (
          <li>
            <span>{rating.Source}:</span>
            <span>{rating.Value}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

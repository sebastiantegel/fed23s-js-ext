import { useNavigate } from "react-router-dom";
import { IMovie } from "../models/IMovie";

interface IShowMovieProps {
  movie: IMovie;
}

export const ShowMovie = ({ movie }: IShowMovieProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movie/" + movie.imdbID);
  };

  return (
    <>
      <div>
        <h3>{movie.Title}</h3>
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <button onClick={handleClick}>Läs mer</button>
      </div>
    </>
  );
};

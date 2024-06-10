import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IMovieExt } from "../models/IMovie";
import { ShowMovieDetails } from "../components/ShowMovieDetails";
import { Spinner } from "../components/Spinner";

export const Movie = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState<IMovieExt>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) return;

    const getMovie = async () => {
      const response = await axios.get<IMovieExt>(
        "https://omdbapi.com/?apikey=416ed51a&i=" + movieid
      );
      setMovie(response.data);
      setLoading(true);
    };

    getMovie();
  });

  return (
    <>
      <h1>Movie</h1>
      {!loading && <Spinner></Spinner>}
      {movie && loading && <ShowMovieDetails movie={movie}></ShowMovieDetails>}
    </>
  );
};

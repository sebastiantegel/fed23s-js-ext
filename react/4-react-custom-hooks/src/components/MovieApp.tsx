import { useFetch } from "../hooks/useFetch";
import { OmdbResponse } from "../models/OmdbResponse";

export const MovieApp = () => {
  const [loading, response] = useFetch<OmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star"
  );

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <section>
        {response?.Search.map((movie) => (
          <h3 key={movie.imdbID}>{movie.Title}</h3>
        ))}
      </section>
    </>
  );
};

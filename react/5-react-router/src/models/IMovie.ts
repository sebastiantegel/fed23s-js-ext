import { IRating } from "./Rating";

export interface IMovie {
  Title: string;
  Poster: string;
  imdbID: string;
}

export interface IMovieExt extends IMovie {
  Plot: string;
  Released: string;
  Director: string;
  Actors: string;
  Ratings: IRating[];
}

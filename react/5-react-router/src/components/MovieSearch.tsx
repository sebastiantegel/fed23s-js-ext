import { FormEvent, useState } from "react";

interface IMovieSearchProps {
  searchMovies: (t: string) => void;
}

export const MovieSearch = ({ searchMovies }: IMovieSearchProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    searchMovies(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};

import { FormEvent, useState } from "react";

interface ISearchMovieFormProps {
  getData: (abc: string) => void;
}

export const SearchMovieForm = ({ getData }: ISearchMovieFormProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    getData(searchText);

    setSearchText("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};

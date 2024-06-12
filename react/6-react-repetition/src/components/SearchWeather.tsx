import { FormEvent, useState } from "react";
import { ILocation } from "../models/ILocation";
import { useApiData } from "../hooks/useApiData";

interface ISearchWeatherProps {
  saveLocation: (loc: ILocation) => void;
}

export const SearchWeather = ({ saveLocation }: ISearchWeatherProps) => {
  const [searchText, setSearchText] = useState("");
  const { get } = useApiData("http://api.openweathermap.org/geo/1.0/direct?");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}

  const getPosition = async (e: FormEvent) => {
    e.preventDefault();

    const locations = await get<ILocation[]>(`q=${searchText},se`);

    setSearchText("");
    console.log(locations[0]);
    saveLocation(locations[0]);
  };

  return (
    <form onSubmit={getPosition}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};

import { useEffect, useState } from "react";
import { SearchWeather } from "../components/SearchWeather";
import { ILocation } from "../models/ILocation";
import { IWeather } from "../models/IWeather";
import { WeatherPresentation } from "../components/WeatherPresentation";
import { useApiData } from "../hooks/useApiData";

export const Weather = () => {
  const [location, setLocation] = useState<ILocation>();
  const [weather, setWeather] = useState<IWeather>();
  const { get } = useApiData(
    "https://api.openweathermap.org/data/3.0/onecall?"
  );

  const handleGotLocation = (location: ILocation) => {
    setLocation(location);
  };

  useEffect(() => {
    if (!location) return;

    const getData = async () => {
      const theWeather = await get<IWeather>(
        `lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,daily&units=metric&lang=se&`
      );

      console.log(theWeather);
      setWeather(theWeather);
    };

    getData();
  }, [location, get]);

  return (
    <>
      <h1>The Weather</h1>
      <SearchWeather saveLocation={handleGotLocation}></SearchWeather>
      {weather && (
        <WeatherPresentation
          weather={weather}
          location={location}
        ></WeatherPresentation>
      )}
    </>
  );
};

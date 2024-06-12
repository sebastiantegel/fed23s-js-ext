import { ILocation } from "../models/ILocation";
import { IWeather } from "../models/IWeather";

interface IWeatherPresentationProps {
  weather: IWeather;
  location: ILocation | undefined;
}

export const WeatherPresentation = ({
  weather,
  location,
}: IWeatherPresentationProps) => {
  return (
    <>
      <h3>{location?.name}</h3>
      <p>
        Temp: {Math.round(weather.current.temp)} men känns som:{" "}
        {Math.round(weather.current.feels_like)}
      </p>
      {weather.current.weather.length > 0 && (
        <>
          <p>
            {weather.current.weather[0].main}:{" "}
            {weather.current.weather[0].description}
          </p>
          <p>
            Ikon:{" "}
            <img
              src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            />
          </p>
        </>
      )}
      {weather.alerts.length > 0 && (
        <>
          <h2>VARNING</h2>
          <p>
            {weather.alerts[0].sender_name}: {weather.alerts[0].description}
          </p>
        </>
      )}
    </>
  );
};

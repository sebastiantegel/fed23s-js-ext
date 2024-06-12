import { IWeatherDetails } from "./IWeatherDetails";

export interface ICurrentWeather {
  temp: number;
  feels_like: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeatherDetails[];
}

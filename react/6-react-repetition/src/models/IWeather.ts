import { ICurrentWeather } from "./ICurrentWeather";
import { IWeatherAlert } from "./IWeatherAlert";

export interface IWeather {
  current: ICurrentWeather;
  alerts: IWeatherAlert[];
}

import { CurrentWeather, FiveDaysState } from "../interfaces";
import { imageSelector } from "../variables";

export const formatWeatherResponse = ({
  main,
  wind,
  weather,
  name,
}: CurrentWeather) => {
  type ObjectKey = keyof typeof imageSelector;
  const weatherName = weather[0].main as ObjectKey;
  return {
    city_name: name,
    humidity: Math.trunc(main.humidity),
    feels_like: Math.trunc(main.feels_like),
    wind: wind.speed,
    pressure: Math.trunc(main.pressure),
    temp_max: Math.trunc(main.temp_max),
    temp_min: Math.trunc(main.temp_min),
    temp: Math.trunc(main.temp),
    weather: weather[0].description,
    imageUrl: imageSelector[weatherName],
  };
};

export const formatFiveDaysResponse = (data: FiveDaysState) => {
  const { icon } = data.weather[0];
  return { icon };
};

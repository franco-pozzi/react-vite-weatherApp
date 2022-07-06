export interface WeatherContextTS {
  models: Models;
  operators: Operators;
}

export interface Models {
  currentWeather: CurrentWeatherState;
  fiveDaysWeather: FiveDaysWeatherState[];
  weatherLoading: boolean;
  isError: boolean;
}
export interface Operators {
  resetWeather: () => void;
}

export interface CurrentWeatherState {
  city_name: string;
  humidity: number;
  feels_like: number;
  wind: number;
  pressure: number;
  temp_max: number;
  temp_min: number;
  temp: number;
  weather: string;
  imageUrl: string;
}

export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface FiveDaysWeatherState {
  icon: string;
}

export interface FiveDaysWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface FiveDaysState {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: Date;
}

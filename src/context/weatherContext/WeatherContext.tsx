import React, { createContext, FC, useEffect, useState } from "react";

import { axiosInstance } from "../../axios";
import { formatFiveDaysResponse, formatWeatherResponse } from "../../helpers";
import { useGeoLocation } from "../../hooks/";
import { WeatherContextTS } from "../../interfaces";

type getCurrentProps = {
  lon: string;
  lat: string;
  units: string;
  lang: string;
};

type providerProps = {
  children: React.ReactNode;
};

const currentWeatherDefault = {
  city_name: "",
  humidity: 0,
  feels_like: 0,
  wind: 0,
  pressure: 0,
  temp_max: 0,
  temp_min: 0,
  temp: 0,
  weather: "",
  imageUrl: "",
};

const fiveDaysWeatherDefault = [{ icon: "" }];

export const WeatherContext = createContext({ models: {} } as WeatherContextTS);

export const WeatherProvider: FC<providerProps> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(currentWeatherDefault);
  const [fiveDaysWeather, setFiveDaysWeather] = useState(
    fiveDaysWeatherDefault
  );
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { locationData } = useGeoLocation();

  useEffect(() => {
    if (locationData.lng && locationData.lat) {
      setWeatherLoading(true);
      Promise.all([
        getCurrentWeather({
          lon: locationData.lng,
          lat: locationData.lat,
          units: "metric",
          lang: "es",
        }),
        getFiveDaysWeather({
          lon: locationData.lng,
          lat: locationData.lat,
          units: "metric",
          lang: "es",
        }),
      ]).then(() => setWeatherLoading(false));
    }
  }, [locationData.lng, locationData.lat]);

  const getCurrentWeather = async ({
    lon,
    lat,
    units,
    lang,
  }: getCurrentProps) => {
    const urlFormat = `weather?appid=${
      import.meta.env.VITE_APP_API_KEY
    }&lon=${lon}&lat=${lat}&units=${units}&lang=${lang}`;

    await axiosInstance
      .get(urlFormat)
      .then(({ data }) => setCurrentWeather(formatWeatherResponse(data)))
      .catch(() => setIsError(true));
  };

  const getFiveDaysWeather = async ({
    lon,
    lat,
    units,
    lang,
  }: getCurrentProps) => {
    const urlFormat = `forecast?appid=${
      import.meta.env.VITE_APP_API_KEY
    }&lon=${lon}&lat=${lat}&units=${units}&lang=${lang}`;

    await axiosInstance
      .get(urlFormat)
      .then(({ data }) => {
        console.log(data);
        return setFiveDaysWeather([
          formatFiveDaysResponse(data.list[7]),
          formatFiveDaysResponse(data.list[15]),
          formatFiveDaysResponse(data.list[23]),
          formatFiveDaysResponse(data.list[31]),
          formatFiveDaysResponse(data.list[39]),
        ]);
      })
      .catch(() => setIsError(true));
  };

  const resetWeather = () => {
    setCurrentWeather(currentWeatherDefault);
    setFiveDaysWeather(fiveDaysWeatherDefault);
    setIsError(false);
  };

  return (
    <WeatherContext.Provider
      value={{
        models: {
          currentWeather,
          fiveDaysWeather,
          weatherLoading,
          isError,
        },
        operators: {
          resetWeather,
        },
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

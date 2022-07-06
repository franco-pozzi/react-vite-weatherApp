import { Grid, Text } from "@nextui-org/react";
import { useContext } from "react";

import { WeatherContext } from "../../context";
import { CurrentWeatherState } from "../../interfaces";

export const infoItems = (info: CurrentWeatherState) => [
  { text: "HUMEDAD", value: `${info.humidity} %`, id: "currentInfoHumidity" },
  {
    text: "SENSASIÓN TÉRMICA",
    value: `${info.feels_like} C°`,
    id: "currentInfoFeelsLike",
  },
  { text: "VIENTO", value: `${info.wind} km/h`, id: "currentInfoWind" },
  {
    text: "PRESIÓN ATMOSFÉRICA",
    value: `${info.pressure} hPa`,
    id: "currentInfoPressure",
  },
  { text: "MAX-TEMP", value: `${info.temp_max} C°`, id: "currentInfoTempMax" },
  { text: "MIN-TEMP", value: `${info.temp_min} C°`, id: "currentInfoTempMin" },
];

export const CurrentDayInfo = () => {
  const {
    models: { currentWeather },
  } = useContext(WeatherContext);

  return (
    <>
      {infoItems(currentWeather).map(({ text, value, id }) => (
        <Grid.Container
          justify="center"
          css={{ rowGap: "2rem", padding: "1rem" }}
          key={id}
        >
          <Grid xs={6}>
            <Text color="white" b>
              {text}
            </Text>
          </Grid>
          <Grid xs={6} justify="flex-end">
            <Text color="white" b>
              {value}
            </Text>
          </Grid>
        </Grid.Container>
      ))}
    </>
  );
};

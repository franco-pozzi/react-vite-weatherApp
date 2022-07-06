import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useContext } from "react";

import { WeatherContext } from "../../context";

export const NextDays = () => {
  const {
    models: { fiveDaysWeather },
  } = useContext(WeatherContext);

  const dataToShow = fiveDaysWeather.map(({ icon }, day) => {
    const actualDate = new Date();
    actualDate.setDate(actualDate.getDate() + (day + 1));

    const formatDay = actualDate.toLocaleDateString(undefined, {
      weekday: "long",
    });

    return { icon, forDay: formatDay };
  });

  return (
    <Grid.Container justify="center" css={{ gap: "2rem", padding: "1rem" }}>
      {dataToShow.map(({ icon, forDay }, ind) => (
        <Grid xs={5} sm={3} key={ind}>
          <Card>
            <Card.Body>
              <Card.Image
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                objectFit="cover"
                height={100}
              />
              <Row justify="center">
                <Text b transform="uppercase">
                  {forDay}
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

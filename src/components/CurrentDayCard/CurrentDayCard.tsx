import { Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";
import { useContext } from "react";

import { WeatherContext } from "../../context";
import { nameForDate } from "../../variables";

export const CurrentDayCard = () => {
  const {
    models: { currentWeather },
  } = useContext(WeatherContext);

  return (
    <Grid xs={12} sm={6}>
      <Container fluid css={{ padding: 0, "@sm": { p: "0 1rem" } }}>
        <Card
          css={{
            width: "100%",
            height: 400,
            borderRadius: 0,
            "@sm": { height: 777 },
          }}
        >
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text h2 color="black" transform="uppercase">
                {nameForDate()}
              </Text>
              <Text h3 color="black">
                {currentWeather?.city_name}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={currentWeather.imageUrl}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderRadius: 0,
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={30} h3>
                  {currentWeather.temp} C°
                </Text>
                <Text color="#000" size={25} h3 transform="uppercase">
                  {currentWeather.weather}
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
    </Grid>
  );
};

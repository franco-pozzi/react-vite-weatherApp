import { Button, Container, Grid, Text } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { WeatherContext } from "../../context/weatherContext/WeatherContext";
import { cityLinksArray } from "../../variables";

export const Home = () => {
  const navigate = useNavigate();

  const { operators } = useContext(WeatherContext);

  useEffect(() => {
    operators?.resetWeather();
  }, []);

  return (
    <Container
      display="flex"
      justify="center"
      alignContent="center"
      css={{ minHeight: "100vh" }}
    >
      <Grid.Container css={{ maxWidth: "1000px" }}>
        <Grid xs={12} sm={5} direction="column">
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
            transform="full-width"
          >
            CLIMAPP
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            VER EL
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            CLIMA
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            EN:
          </Text>
        </Grid>
        <Grid xs={12} sm={7}>
          <Grid.Container
            css={{
              rowGap: "1.5rem",
              marginTop: "1rem",
            }}
            justify="center"
          >
            {cityLinksArray.map(({ name, url }, index) => (
              <Grid sm={6} key={index}>
                <Button
                  shadow
                  color="gradient"
                  css={{
                    marginTop: "1rem",
                  }}
                  onClick={() => navigate(url)}
                >
                  {name}
                </Button>
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

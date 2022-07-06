import {
  Container,
  Grid,
  Loading,
  Modal,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  CurrentDayCard,
  CurrentDayInfo,
  Header,
  NextDays,
} from "../../components";
import { WeatherContext } from "../../context";

export const Weather = () => {
  const { models } = useContext(WeatherContext);
  const navigate = useNavigate();

  if (models.isError) {
    return (
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open
        onClose={() => navigate("/")}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <Text h3 weight="bold" color="error">
            Hubo un error al solicitar la informacion.
          </Text>
          <Spacer y={1} />
          <Text h3 weight="bold" color="error">
            Recorda que debes otorgar permisos al navegador para compartir tu
            ubicacion
          </Text>
        </Modal.Body>
      </Modal>
    );
  }

  if (models.weatherLoading) {
    return (
      <Container
        css={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Loading
          loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
        >
          <Text h1>Cargando...</Text>
        </Loading>
      </Container>
    );
  }

  if (models.currentWeather.weather && models.fiveDaysWeather.length) {
    return (
      <>
        <Header />
        <Grid.Container
          css={{
            minWidth: 400,
            maxWidth: 1400,
            margin: "2rem auto",
          }}
        >
          <CurrentDayCard />
          <Grid xs={12} sm={6}>
            <Container fluid css={{ p: 0 }}>
              <CurrentDayInfo />
              <NextDays />
            </Container>
          </Grid>
        </Grid.Container>
      </>
    );
  }

  return null;
};

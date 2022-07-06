import { Button, Col, Container, Dropdown, Row, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { cityLinksArray } from "../../variables";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container fluid css={{ padding: 16, maxWidth: 1400, minWidth: 400 }}>
      <Row justify="center" align="center">
        <Col css={{ width: "10%" }}>
          <Button light color="primary" auto onClick={() => navigate("/")}>
            CLIMAPP
          </Button>
        </Col>
        <Col
          css={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignContent: "center",
          }}
        >
          <Dropdown>
            <Dropdown.Button flat>CIUDAD</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              {cityLinksArray.map(({ name, url }, key) => (
                <Dropdown.Item key={key} textValue={name}>
                  <Text onClick={() => navigate(`/${url}`)}>{name}</Text>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

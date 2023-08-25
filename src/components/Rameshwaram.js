import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import RameshwaramImg from "../assets/Homepage/Home/Rameshwaran.jpeg";
import Rameshwaram1 from "../assets/Homepage/Home/rameshwarem1.jpeg";
import Rameshwaram2 from "../assets/Homepage/Home/rameshwarem2.jpeg";
import Rameshwaram3 from "../assets/Homepage/Home/Rameshwaram3..jpeg";
import Rameshwaram4 from "../assets/Homepage/Home/rameshwarem1 (6).jpeg";

function Rameshwaram() {
  return (
    <Container className="mt-5" id="rameshwaram">
      <Row className="row-cols-1 row-cols-md-2">
        <Col>
          <h3>02.Rameshwaram</h3>
          <img src={RameshwaramImg} className="ch_img" alt="" />
        </Col>

        <Col className="mt-5">
          <h6 className="fw-bolder">""The Bridge on the Indian Ocean""</h6>
          <div className="text-container text-container1">
            <p className="text-indent text-secondary">
              Rameshwaram is located on a beautiful island in the South Indian
              state of Tamil Nadu. It is separated by a small Pamban channel
              from Sri Lanka. According to Hindu mythology, this is the place
              where Lord Rama created a bridge across the sea to Sri Lanka.
            </p>
            <p className="text-indent text-secondary">
              Renowned for its magnificent prakaras with massive sculptured
              pillars on either side, The Ramanathaswamy Temple houses the
              longest corridor in the world. Agniteertham is famous for its
              sacred waters and Pilgrims perform poojas in honour of their
              ancestors at this seashore. The five-faced Hanuman Temple holds
              the floating stone which was used to build the bridge between
              India and Sri Lanka. Rameshwaram has the first sea bridge
              connecting the town of Mandapam with Pamban Island, and
              Rameswaram.
            </p>
          </div>
        </Col>
      </Row>

      <section className="mt-5">
        <h3 className="text-center mb-5">Must Visit Places In Rameshwaram</h3>

        <Row className="row-cols-1 row-cols-md-4">
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Rameshwaram1} />
              <Card.Body>
                <Card.Title>Green Valley View</Card.Title>
                <Card.Text>
                  Formerly known as Suicide point, the Green Valley View offers
                  a breathtaking view of the plains, deep...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Rameshwaram2} />
              <Card.Body>
                <Card.Title>Kodai Lake</Card.Title>
                <Card.Text>
                  Kodaikanal Lake is a manmade lake in the Kodaikanal city which
                  is also known as Kodai Lake Vera
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Rameshwaram3} />
              <Card.Body>
                <Card.Title>Bear Shola Falls</Card.Title>
                <Card.Text>
                  Located at a mere distance of 2 kilometres from the Kodaikanal
                  Lake, the Bear Shola Falls is a popular...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card style={{ width: "90%" }}>
              <Card.Img variant="top" src={Rameshwaram4} />
              <Card.Body>
                <Card.Title> Pillar Rocks</Card.Title>
                <Card.Text>
                  Situated in the 'Princess of Hill stations', Kodaikanal, the
                  Pillar Rocks have become a lovely picnic...
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default Rameshwaram;

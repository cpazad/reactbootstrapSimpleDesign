import React, { Fragment } from "react";
import { Col, Container, Row, ListGroup, Card } from "react-bootstrap";
import Modalform from "./Modalform";

const Footer = () => {
  return (
    <Fragment>
      <Container fluid bg="dark">
        <Row>
        <Card className="text-center" bg="dark" text="white">
          <Card.Header> FreedomByte </Card.Header>
         
          <Card.Body>
          {/* <ListGroup horizontal>
            <ListGroup.Item><Card.Link><i class="fab fa-facebook-f"></i></Card.Link>
            <i class="fab fa-facebook-f"></i></ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item>
            
          </ListGroup> */}
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            
            {/* Modal Section with contact us form start */}

             <Modalform></Modalform>

            {/* Modal Section with contact us form ends */}

            {/* Link Container */}
            <Container>
              <Row>
                <Col>
                  <h5 className="text-uppercase">Links</h5>
                  <ListGroup>
                    <ListGroup.Item> Link</ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <h5 className="text-uppercase">Links</h5>
                  <ListGroup>
                    <ListGroup.Item> Link</ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <h5 className="text-uppercase">Links</h5>
                  <ListGroup>
                    <ListGroup.Item> Link</ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col>
                  <h5 className="text-uppercase">Links</h5>
                  <ListGroup>
                    <ListGroup.Item> Link</ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                    <ListGroup.Item> Link </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Card.Text>
              {" "}
              © 2020 Copyright:
              <Card.Link className="text-decoration-none" href="#">
                {" "}
                FreedomByte.com
              </Card.Link>{" "}
            </Card.Text>
          </Card.Footer>
        </Card>
        </Row>
       
      </Container>
    </Fragment>
  );
};

export default Footer;

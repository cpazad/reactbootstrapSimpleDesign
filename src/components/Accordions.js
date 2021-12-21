import React, { Fragment } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Accordions = () => {
  const faq = [
    {
      id: 1,
      que: "What is React bootstrap?",
      ans: "You will get all the details soon, every one is waiting for the news as well.",
    },
    {
      id: 2,
      que: "How to use React bootstrap?",
      ans: "You will get all the details soon, every one is waiting for the news as well.",
    },
    {
      id: 3,
      que: "Benefit of using react bootstrap?",
      ans: "You will get all the details soon, every one is waiting for the news as well.",
    },
    {
      id: 4,
      que: "What is React bootstrap?",
      ans: "You will get all the details soon, every one is waiting for the news as well.",
    },
    {
      id: 5,
      que: "What is React bootstrap?",
      ans: "You will get all the details soon, every one is waiting for the news as well.",
    },
  ];

  return (
    <Fragment>
      <Container className="my-3 p-3" id="accord">
        <h1> All You Need to Know </h1>
        <Row>
          <Col className="mx-5">
            <Accordion defaultActiveKey="0">
              {
              
              faq.map((data) => (
                <Accordion.Item eventKey={data.id}>
                  <Accordion.Header>{data.que}</Accordion.Header>
                  <Accordion.Body className="bg-secondary text-white shadow-lg">
                    {data.ans}
                  </Accordion.Body>
                </Accordion.Item>
              ))
              
              }

              <Accordion.Item eventKey="1">
                <Accordion.Header>No Country for the Old Man</Accordion.Header>
                <Accordion.Body className="bg-secondary text-white">
                  You will get all the details soon, every one is waiting for
                  the news as well.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>There Will be blood </Accordion.Header>
                <Accordion.Body className="bg-secondary text-white">
                  You will get all the details soon, every one is waiting for
                  the news as well.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header> 12 Angry Man </Accordion.Header>
                <Accordion.Body className="bg-secondary text-white">
                  You will get all the details soon, every one is waiting for
                  the news as well.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  {" "}
                  All the money in the World{" "}
                </Accordion.Header>
                <Accordion.Body className="bg-secondary text-white">
                  You will get all the details soon, every one is waiting for
                  the news as well.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Accordions;

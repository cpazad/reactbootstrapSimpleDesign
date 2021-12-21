import React, { useState } from "react";

import {
  Button,
  Col,
  FloatingLabel,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
  Alert
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const Modalform = () => {
  const [show, setShow] = useState(false);
  const modalShow = () => setShow(true);
  const modalClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={modalShow}>
        {" "}
        Contact Us Form{" "}
      </Button>
      <Modal show={show} onHide={modalClose}>
        <ModalHeader closeButton>
          <Modal.Title> Registration form </Modal.Title>
          
        </ModalHeader>
        <ModalBody>

          {/* contact Us form */}

          <Form>
          <Alert controlId="formAlert">This is the first alert </Alert>
            <Row>
              <Col>
              <FloatingLabel controlId="formFname" label="First Name" className="mb-2">
              <FormControl type="text" placeholder="Your First Name" />
            </FloatingLabel>
              </Col>
              <Col>
              <FloatingLabel controlId="formLname" label="Last Name" className="mb-2">
              <FormControl type="text" placeholder="Your Last Name" />
            </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="formEmail"
              label="Email Address"
              className="mb-2"
            >
              <FormControl type="email" placeholder="name@example.com" />
            </FloatingLabel>
            
            <FloatingLabel controlId="formPassword" label="Password" className="mb-2">
              <FormControl type="password" placeholder="Your password here" />
            </FloatingLabel>
            
            <FloatingLabel controlId="formTextarea" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <FormGroup controlId="formFile" className="my-2">
                <FormLabel> Your file here </FormLabel>
                <FormControl type="file"/>
            </FormGroup>
            <FormGroup controlId="formCheck" className="my-2">
                <FormCheck type="check" label=" I agree "/>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="success" type="submit"> Submit </Button>
          <Button variant="danger" onClick={modalClose}>
            {" "}
            Cancel{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Modalform;

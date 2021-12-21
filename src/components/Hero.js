import React, { Fragment } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import Slider from "./Slider";

const Hero = () => {
  return (
    <Fragment>
      <Container>
          {/* Breadcrub  */}

        <Breadcrumb className="mt-2">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

        {/* Carousel slider link */}

        <Slider></Slider>

      </Container>
    </Fragment>
  );
};

export default Hero;

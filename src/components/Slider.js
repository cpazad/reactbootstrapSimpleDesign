import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import chaplin from '../chaplin.jpg';
import boat from '../boat.jpg';
import thinkBig from '../thinkBig.jpg';

const Slider = () => {
    return (
        <Fragment>
            <Carousel className='my-2'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={chaplin}
      alt="First slide"
    />
    <Carousel.Caption>
      <h4>The Great Charlie Chaplin</h4>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={boat}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h4 text = 'dark'>Sailing Boat Group </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thinkBig}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h4>Think Big </h4>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Fragment>
    )
}

export default Slider;

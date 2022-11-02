import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import './Slider.css';
import mock from './../../MOCK_DATA.json';

import img1 from './../../images/1.png'
import img2 from './../../images/2.png'
import img3 from './../../images/3.png'

const Slider = () => {
    return (
        <>
            <Carousel>
      <Carousel.Item interval={2000}>
        <Link to="./../CourseReviews">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="First slide"
          />
          </Link>
        <Carousel.Caption>
        <div className="title">
          <h3>{mock[0].class_name}</h3>
          <p>{mock[0].professor}</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Link to="./../CourseReviews">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="Second slide"
          />
          </Link>
        <Carousel.Caption>
        <div className="title">
          <h3>{mock[1].class_name}</h3>
          <p>{mock[1].professor}</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Link to="./../CourseReviews">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="Third slide"
          />
          </Link>
        <Carousel.Caption>
        <div className="title">
          <h3>{mock[2].class_name}</h3>
          <p>
          {mock[2].professor}
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )}

export default Slider;
import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import './Slider.css';

import img1 from './../../images/1.png'
import img2 from './../../images/2.png'
import img3 from './../../images/3.png'

const Slider = () => {
    return (
        <>
            <Carousel>
      <Carousel.Item interval={2000}>
        <Link to="CourseRatings">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="First slide"
          />
          </Link>
        <Carousel.Caption>
        <div className="title">
          <h3>OPERATING SYSTEMS</h3>
          <p>Yang Tang</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Link to="CourseRatings">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="Second slide"
          />
          </Link>
        <Carousel.Caption>
        <div className="title">
          <h3>LIFE IN THE UNIVERSE</h3>
          <p>Joseph Gelfand</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Link to="CourseRatings">
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random"
            alt="Third slide"
          />
          </Link>
        <Carousel.Caption>
        <div className="title">
          <h3>AGILE SOFTWARE DEVELOPMENT</h3>
          <p>
            Amos Bloomberg
          </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )}

export default Slider;
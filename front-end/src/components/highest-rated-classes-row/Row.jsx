import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Card, Carousel } from "react-bootstrap";
import axios from 'axios';

import './Row.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mock from './../../MOCK_DATA.json';


import img1 from './../../images/ml.jpeg'
import img2 from './../../images/hack.jpg'
import img3 from './../../images/blockchain.jpg'
import img4 from './../../images/algo.jpg'
import img5 from './../../images/et.jpg'

const Row = () => {
    const[data, setData] = useState([])

    useEffect(() => {
      fetch("/CourseHighestRatedClasses").then(
        response => response.json()
      ).then(
        data => {
          setData(data)
        }
      )
    }, [])
    
    var settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000
    };
    return (
        <Slider {...settings} >
            {(typeof data.class_info === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_info?.map((info, index)=> (
                    <div className="big">
                        <div className="slick-list">
                            <h5 className="title">{info[0]}</h5>
                            <Link to={'./../CourseReviews?Course=' + info[3]}>
                                <img src = {info[2]}/>
                            </Link>
                        </div>
                        <div className="subheading">
                            <h6 className="rate">{info[3]}%</h6>
                            <h6 className="prof">{info[1]}</h6>
                        </div>
                    </div>
                  ))
                )}
    </Slider>
    )}

export default Row;
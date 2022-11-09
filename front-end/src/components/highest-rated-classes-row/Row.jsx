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
                            <Link to="./../CourseReviews">
                                <img src = "https://source.unsplash.com/random"/>
                            </Link>
                        </div>
                        <div className="subheading">
                            <h6 className="rate">{info[2]}%</h6>
                            <h6 className="prof">{info[1]}</h6>
                        </div>
                    </div>
                  ))
                )}
        <div className="big">
            <div className="slick-list">
                <h5 className="title">{mock[0].class_name}</h5>
                <Link to="./../CourseReviews">
                    <img src = "https://source.unsplash.com/random"/>
                </Link>
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">{mock[0].professor}</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
                <h5 className="title">{mock[1].class_name}</h5>
                <Link to="./../CourseReviews">
                    <img src = "https://source.unsplash.com/random"/>
                </Link>
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">{mock[1].professor}</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
                <h5 className="title">{mock[2].class_name}</h5>
                <Link to="./../CourseReviews">
                    <img src = "https://source.unsplash.com/random"/>
                </Link>
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">{mock[2].professor}</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
                <h5 className="title">{mock[3].class_name}</h5>
                <Link to="./../CourseReviews">
                    <img src = "https://source.unsplash.com/random"/>
                </Link>
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">{mock[3].professor}</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
                <h5 className="title">{mock[4].class_name}</h5>
                <Link to="./../CourseReviews">
                    <img src = "https://source.unsplash.com/random"/>
                </Link>
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">{mock[4].professor}</h6>
            </div>
        </div>

    </Slider>
    )}

export default Row;
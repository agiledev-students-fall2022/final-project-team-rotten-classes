import React, { useState } from "react";
import { Card, Carousel } from "react-bootstrap";

import './Row.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from './../../images/ml.jpeg'
import img2 from './../../images/hack.jpg'
import img3 from './../../images/blockchain.jpg'
import img4 from './../../images/algo.jpg'
import img5 from './../../images/et.jpg'

const Row = () => {
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
        <div className="big">
            <div className="slick-list">
                <h5 className="title">Machine Learning</h5>
                <img src={img1} />
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">Amber Clarke</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
            <h5 className="title">Offensive Security</h5>
                <img src={img2} />
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">Amber Clarke</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
            <h5 className="title">Algorithms</h5>
                <img src={img4} />
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">Amber Clarke</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
            <h5 className="title">Blockchain Fundamentals</h5>
                <img src={img3} />
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">Amber Clarke</h6>
            </div>
        </div>

        <div className="big">
            <div className="slick-list">
            <h5 className="title">Ethics and Technology</h5>
                <img src={img5} />
                
            </div>
            <div className="subheading">
                <h6 className="rate">100%</h6>
                <h6 className="prof">Amber Clarke</h6>
            </div>
        </div>

    </Slider>
    )}

export default Row;
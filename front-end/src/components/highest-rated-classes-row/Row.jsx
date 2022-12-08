import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Row.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Row = () => {
    const[data, setData] = useState([])
    
    useEffect(() => {
       fetch("https://hammerhead-app-skzsp.ondigitalocean.app/api/HighestRated").then(
         response => response.json()
       ).then(
         data => {
           setData(data)
         })}, [])

    const settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings} >
            {(typeof data.class_names === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_names?.map((info, index)=> (
                    <div className="big" key={index}>
                        <div className="slick-list">
                            <h5 className="title">{info.course_name}</h5>
                            <Link to={'/Course/' + info.course_id}>
                                <img src = {info.course_image} alt='course'/>
                            </Link>
                        </div>
                        <div className="subheading">
                            <h6 className="rate">{info.course_rating_overall}%</h6>
                            <h6 className="subject">{info.course_subject}</h6>
                        </div>
                    </div>
                  ))
                )}
    </Slider>
    )}

export default Row;
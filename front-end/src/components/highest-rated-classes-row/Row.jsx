import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import './Row.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CourseDataContext} from "../../contexts/courseData.context";

const Row = () => {
    const {courseDataProcessed} = useContext(CourseDataContext)
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
            {(typeof data.class_info === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_info?.map((info, index)=> (
                    <div className="big" key={index}>
                        <div className="slick-list">
                            <h5 className="title">{info[0]}</h5>
                            <Link to={'/Course/' + info[3]}>
                                <img src = {info[2]}/>
                            </Link>
                        </div>
                        <div className="subheading">
                            <h6 className="rate">{info[4]}%</h6>
                            <h6 className="prof">{info[1]}</h6>
                        </div>
                    </div>
                  ))
                )}
    </Slider>
    )}

export default Row;
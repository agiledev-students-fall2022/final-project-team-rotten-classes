import {BrowserRouter as Router, Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { Carousel } from "react-bootstrap";
import './Slider.css';
import mock from './../../MOCK_DATA.json';

import CourseReviews from './../course-reviews/CourseReviews';

import img1 from './../../images/1.png'
import img2 from './../../images/2.png'
import img3 from './../../images/3.png'

const Slider = () => {
    const[data, setData] = useState([])

    useEffect(() => {
      fetch("/CourseSlider").then(
        response => response.json()
      ).then(
        data => {
          setData(data)
        }
      )
    }, [])

    return (
        <>
        <Carousel>
               {(typeof data.class_names === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_names?.slice(0,3).map((course, index)=> (
                   
                      <Carousel.Item interval={2000} key={index}>
                      <Link to={'/Course/' + course.course_id}>
                        <img
                          className="d-block w-100"
                          src={course.course_images}
                          alt="First slide"
                        />
                        </Link>
                      <Carousel.Caption>
                      <div className="title">
                        <h3 >{course.course_name}</h3>
                        <p >{course.course_subject}</p>
                      </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))
                )}
          </Carousel>
        </>
    )}

export default Slider;
import './course-card.styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import React from "react";

const CourseCard = ({course}) => {
    const {key, course_id, course_name, course_image} = course;
    return (
        <div className="big" key={key}>
            <div className="slick-list">
                <h5 className="title">{course_id}</h5>
                <Link to={`./../Course/${course_id}`}>
                    <img alt={`${course_name}`} src={`${course_image}`}/>
                </Link>
            </div>
            <div className="subheading">
                <h6 >{course_name}</h6>
            </div>
        </div>
    )
};

export default CourseCard;
import './course-card.styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";
import React from "react";

const CourseCard = ({course}) => {
    const {key, course_id, course_name, course_images} = course;
    return (
        // <div className='course-card-container' key={key}>
        //     <img
        //         alt={`${course_name}`}
        //         src={`${course_images}`}
        //     />
        //     <h6 style={{color: "white"}}>{course_id}</h6>
        //     <h6 style={{color: "white"}}>{course_name}</h6>
        // </div>

        <div className="big" key={key}>
            <div className="slick-list">
                <h5 className="title">{course_id}</h5>
                <Link to={`./../Course/${course_id}`}>
                    <img alt={`${course_name}`} src={`${course_images}`}/>
                </Link>
            </div>
            <div className="subheading">
                <h6 >{course_name}</h6>
            </div>
        </div>
    )
};

export default CourseCard;
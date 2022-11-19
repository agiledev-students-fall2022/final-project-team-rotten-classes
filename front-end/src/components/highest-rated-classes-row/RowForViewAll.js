import React, {useContext} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CourseCardList from "../course-card-list/course-card-list.component";
import {CourseDataContext} from "../../contexts/courseData.context";

const RowForViewAll = () => {
    const {courseDataProcessed} = useContext(CourseDataContext)
    return (<CourseCardList courses={courseDataProcessed}/>)
}

export default RowForViewAll;
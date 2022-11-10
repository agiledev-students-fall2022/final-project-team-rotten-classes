import './CourseReviews.css'
import React, { useState, useEffect } from 'react';
import RowForViewall from "../highest-rated-classes-row/RowForViewAll";
import { fontSize } from '@mui/system';
import img1 from '../../images/ml.jpeg'
import Badge from 'react-bootstrap/Badge';
import { Navigate, useLocation } from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';
import mock from '../../MOCK_DATA.json'
import CourseReviewDetailHeader from '../course-headers/CourseReviewDetailHeader.js'
import queryString from 'query-string';


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

function CourseReviews() {

    const queryString = require('query-string');
    const location = useLocation();

    const parsed = queryString.parse(location.search)
    console.log(parsed.key);
    const[data, setData] = useState([])

    useEffect(() => {
        fetch("/CourseReviews").then(
            response => response.json()
        ).then(
            data => {
                setData(data)
            }
        )
    }, [])

    // Try modify this instead of the above useEffect

    // useEffect(() => {
    //   const fetchCourseReviews = async () => {
    //     const response = await axios.get("http://localhost:4000/CourseData");
    //     setData(response.data);
    //     console.log(response.data)
    //   };
    //   fetchCourseReviews();
    // }, []);

    const [goToView, setView] = React.useState(false);

    if(goToView){
        return <Navigate to="/Viewall"/>;
    }


    return (
        <>

            <br></br>
            <CourseReviewDetailHeader />

            <div className = "reviews-for-course-ratings">
                {(typeof data.course_review === 'undefined') ? (
                    <p>Loading</p>
                ): (
                    Object.keys.slice(0,1).map((info, key)=> (
                        <div className = "reviews-for-course-ratings">
                            <img src="https://source.unsplash.com/random" alt='machine learning pic'/>
                            <h2 key={key}>{info[0]}</h2>
                            <h3>Professors: {info[3]}</h3>
                            <Badge onClick={()=>{setView(true)}}>{info[1]}</Badge>
                            <Badge onClick={()=>{setView(true)}}>{info[2]}</Badge>
                        </div>
                    ))
                )}
                <p>

                    {mock && mock.map(({first_name, review, id}) =>(
                        <div key = {id} className = "course-reviews-display">
                            <br></br>
                            Name: {first_name}
                            <br></br>
                            Review: {review}
                            <br></br>
                            <br></br>
                        </div>
                    ))}
                </p>
            </div>
        </>
    );
}

export default CourseReviews;
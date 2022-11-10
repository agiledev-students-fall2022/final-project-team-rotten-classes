import './CourseRatings.css'
import React, { useState, useEffect } from 'react';
import RowForViewall from "../highest-rated-classes-row/RowForViewAll";
import { fontSize } from '@mui/system';
import img1 from '../../images/ml.jpeg'
import Badge from 'react-bootstrap/Badge';
import { Navigate } from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import mock from '../../MOCK_DATA.json'
import CourseReviewDetailHeader from '../course-headers/CourseReviewDetailHeader.js'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

function CourseRatings() {
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

  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;

  }
    return (
      <>
       <br></br>
      <CourseReviewDetailHeader />

      {(typeof data.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_reviews?.slice(0, 1).map((info, key)=> (
                      <div className = "course-ratings-page">
                        <h1>Overall Ratings</h1>
                        <h2>Overall Score</h2>
                        <h3>{info[2]}</h3>
                        <h2>Would Take It Again</h2>
                        <h3>{info[3]}</h3>
                        <h2>Difficulty</h2>
                        <h3>{info[2]}</h3>
                        <h2>Level of Workload</h2>
                        <h3>{info[2]}</h3>
                      </div>
                ))
        )}      
      </>
    );
  }
  
  export default CourseRatings;

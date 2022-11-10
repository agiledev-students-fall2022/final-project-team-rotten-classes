import './CourseReviews.css'
import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Navigate, useLocation } from 'react-router-dom';
import mock from '../../MOCK_DATA.json'
import CourseReviewDetailHeader from '../course-headers/CourseReviewDetailHeader.js'

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
    
  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>

      <br></br>
      <CourseReviewDetailHeader />

      <div className = "reviews-for-course-ratings">
      {(typeof data.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_reviews?.slice(0, 4).map((info, key)=> (
                      <div className = "reviews-for-course-ratings">
                        <h2>Name: {info[0]}</h2>
                        <p>Review: {info[1]}</p>
                     </div>
                ))
            )}
        </div>
      </>
    );
  }
  
  export default CourseReviews;
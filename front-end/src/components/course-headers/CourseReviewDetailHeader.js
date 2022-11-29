import './CourseReviewDetailHeader.css'
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { Navigate, useLocation } from 'react-router-dom';

function CourseReviewDetailHeader({ page, setPage, data }) {

  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>
        <div className = "course-page-subheader">
           {(typeof data[0].class_reviews === 'undefined') ? (
                  console.log(data[0]),
                  <p>Loading</p>
                ): (
                      <div className = "course-page-subheader-data">
                        <img src="https://source.unsplash.com/random" alt='machine learning pic'/>
                        <h2>{data.course_name}</h2>
                        <h3>Professors: {data.professors}</h3>
                        <Badge onClick={()=>{setView(true)}}>{data.course_tags}</Badge>
                        <Badge onClick={()=>{setView(true)}}>{data.course_subject}</Badge>
                     </div>
            )}
        </div>
        <div className = "review-rating-button-switch">
          <button onClick={() => setPage("reviews")}>Reviews</button>
          <button onClick={() => setPage("ratings")}>Ratings</button>
        </div>
      </>
    );
  }
  
  export default CourseReviewDetailHeader;
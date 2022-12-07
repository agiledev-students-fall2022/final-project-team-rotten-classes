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
           {(typeof data[0]?.class_reviews === 'undefined') ? (
                  console.log(data.class_reviews),
                  <p>Loading</p>
                ): (
                    <div className = "course-page-subheader-data">
                      <img src={data[0].course_image} alt='machine learning pic'/>
                      <h2>{data[0].course_name}</h2>
                      <Badge onClick={()=>{setView(true)}}>{data[0].course_tags}</Badge>
                      <Badge onClick={()=>{setView(true)}}>{data[0].course_subject}</Badge>
                    </div>
              )}
        </div>
        <div className = "review-rating-button-switch">
          <button onClick={() => setPage("reviews")}>Reviews</button>
          <button onClick={() => setPage("ratings")}>Ratings</button>
          <button onClick={() => setPage("details")}>Details</button>
        </div>
      </>
    );
  }
  
  export default CourseReviewDetailHeader;
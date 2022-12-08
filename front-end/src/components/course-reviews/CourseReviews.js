import './CourseReviews.css'
import React from 'react';
import {Navigate} from 'react-router-dom';

function CourseReviews({ data }) {
    const [goToView] = React.useState(false);
    if(goToView){
        return <Navigate to="/Viewall"/>;
    }
    return (
        <>
              <div className = "reviews-for-course">
              {(typeof data[0]?.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                  data[0]?.class_reviews.map((info, key)=> (
                      <div className = "reviews-for-courses">
                        <h2>{info.reviewer_name}</h2>
                        <h3>Rating: {info.rating} Would Take Again: {info.would_take_again} Worload: {info.workload} Difficulty: {info.difficulty}</h3>
                        <p>{info.review}</p>
                     </div>
                ))
            )}
        </div>
      </>
    );
}

export default CourseReviews;
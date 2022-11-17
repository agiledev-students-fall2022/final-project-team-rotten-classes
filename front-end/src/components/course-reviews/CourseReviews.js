import './CourseReviews.css'
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

function CourseReviews({ data }) {
    const [goToView, setView] = React.useState(false);

    if(goToView){
        return <Navigate to="/Viewall"/>;
    }
    return (
        <>

      <div className = "reviews-for-course-ratings">
      {(typeof data.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_reviews?.map((info, key)=> (
                      <div className = "reviews-for-course-ratings">
                        <h2>Name: {info.reviewer_name}</h2>
                        <p>Review: {info.review}</p>
                     </div>
                ))
            )}
        </div>
      </>
    );
}

export default CourseReviews;
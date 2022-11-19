import './CourseReviews.css'
import React from 'react';
import { Navigate} from 'react-router-dom';

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
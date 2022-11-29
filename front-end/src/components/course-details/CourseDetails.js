import './CourseDetails.css'
import React from 'react';
import { Navigate} from 'react-router-dom';

function CourseDetails({ data }) {
    const [goToView, setView] = React.useState(false);

    if(goToView){
        return <Navigate to="/Viewall"/>;
    }
    return (
        <>

      <div className = "details-for-course-ratings">
      {(typeof data[0]?.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                  data[0]?.class_reviews.map((info, key)=> (
                      <div className = "details-for-course-ratings">
                        <h2>Course Id</h2>
                        <p>{data[0].course_id}</p>
                        <h2>Professors</h2>
                        <p>{data[0].professors}</p>
                        <h2>Prerequisites</h2>
                        <p>{data[0].prerequisites}</p>
                        <h2>Graduation Level</h2>
                        <p>{data[0].grad_level}</p>
                        <h2>School</h2>
                        <p>{data[0].school}</p>
                        <h2>Number of Credits</h2>
                        <p>{data[0].credits}</p>
                     </div>
                ))
            )}
        </div>
      </>
    );
}

export default CourseDetails;
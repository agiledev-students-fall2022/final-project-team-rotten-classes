import './CourseDetails.css'
import  React from 'react';
import { Navigate } from 'react-router-dom';
import mock from '../../MOCK_DATA.json'
import CourseReviewDetailHeader from '../course-headers/CourseReviewDetailHeader.js'

function CourseDetails() {
  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>
      <br />
      <CourseReviewDetailHeader />
      <div className = "course-page-header">
        <div className = "course-rating-display">
          <h2>Overall Rating</h2>
          <p>{mock[0].rating1}</p>
          <h2>Difficulty</h2>
          <p>{mock[0].rating2}</p>
          <h2>Level of Workload</h2>
          <p>{mock[0].workload}</p>
        </div>
      </div>
      </>
    );
  }
  
  export default CourseDetails;

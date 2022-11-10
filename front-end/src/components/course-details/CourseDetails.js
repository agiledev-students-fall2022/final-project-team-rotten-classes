import './CourseDetails.css'
import  React from 'react';
import RowForViewAll from "../highest-rated-classes-row/RowForViewAll";
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

function CourseDetails() {
  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>
      <br></br>
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

import './CourseRatings.css'
import  React from 'react';
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
  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>
       <br></br>
      <CourseReviewDetailHeader />

      <div className = "course-ratings-page">
        <h1>Under Construction!</h1>
        <h3>Needs data visualizations we don't yet have the tools for! It'll be here soon!</h3>

        <h2>Rating Distribution</h2>
        <h2>Would Take It Again:</h2>

      </div>
      
      </>
    );
  }
  
  export default CourseRatings;

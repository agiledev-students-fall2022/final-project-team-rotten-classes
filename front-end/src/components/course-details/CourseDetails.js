import './CourseDetails.css'
import  React from 'react';
import RowForViewall from "../highest-rated-classes-row/RowForViewAll";
import { fontSize } from '@mui/system';
import img1 from '../../images/ml.jpeg'
import Badge from 'react-bootstrap/Badge';
import { Navigate } from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import mock from '../../MOCK_DATA.json'


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
      <div className = "course-page-header">
        <div className = "course-page-subheader">
          <img src="https://source.unsplash.com/random" alt='machine learning pic'/>
          <h2>{mock[0].class_name}</h2>
          <h3>Professor {mock[0].professor}</h3>
          <Badge onClick={()=>{setView(true)}}>Highest Rated Course</Badge>
          <Badge onClick={()=>{setView(true)}}>Computer Science</Badge>
        </div>
        <div className = "review-rating-button-switch">
          <Link to = "/CourseReviews"><button>Reviews</button></Link>
          <Link to = "/CourseRatings"><button>Ratings</button></Link>
          <Link to = "/CourseDetails"><button>Details</button></Link>
        </div>

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

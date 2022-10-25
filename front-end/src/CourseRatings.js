import './CourseRatings.css'
import  React from 'react';
import { Link } from 'react-router-dom'
import RowForViewall from './components/highest-rated-classes-row/RowForViewAll'
import { fontSize } from '@mui/system';
import img1 from './images/ml.jpeg'
import Badge from 'react-bootstrap/Badge';
import { Navigate } from 'react-router-dom';

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

  function sayHello() {
    alert('Coming Soon!!!!!! (I promise!)');
  }  

    return (
      <>
      <div className = "courseRatings">
        <div className = "subheader-course-ratings">
          <img src={img1} alt='machine learning pic'/>
          <h2>Course Name</h2>
          <h3>Professor Name</h3>
          <Badge onClick={()=>{setView(true)}}>Highest Rated Course</Badge>
          <Badge onClick={()=>{setView(true)}}>Computer Science</Badge>
        </div>
        <div className = "review-rating-button-switch">
          <button>Reviews</button>;
          <button onClick={sayHello}>Ratings</button>;
          <button onClick={sayHello}>Details</button>;
        </div>

        <div className = "reviews-for-course-ratings">
          <h3>Lauren Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Carl Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Frank Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      </>
    );
  }
  
  export default CourseRatings;
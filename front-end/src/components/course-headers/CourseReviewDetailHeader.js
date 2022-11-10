import './CourseReviewDetailHeader.css'
import React, {useEffect, useState} from 'react';
import RowForViewall from "../highest-rated-classes-row/RowForViewAll";
import { fontSize } from '@mui/system';
import img1 from '../../images/ml.jpeg'
import Badge from 'react-bootstrap/Badge';
import { Navigate, useLocation } from 'react-router-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import mock from '../../MOCK_DATA.json'
import { valHooks } from 'jquery';

function CourseReviewDetailHeader() {
  const queryString = require('query-string');
  const location = useLocation();
  const parsed = queryString.parse(location.search)
  console.log(parsed)

  const[data, setData] = useState([])

  useEffect(() => {
    fetch("/CourseReviewDetailHeader").then(
      response => response.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>
        <div className = "course-page-subheader">
           {(typeof data.class_info === 'undefined') ? (
                  <p>Loading</p>
                ): (
                    data.class_info?.slice(0, 1).map((info, key=parsed)=> (
                      <div className = "course-page-subheader-data">
                        <img src="https://source.unsplash.com/random" alt='machine learning pic'/>
                        <h2>{info[0]}</h2>
                        <h3>Professors: {info[3]}</h3>
                        <Badge onClick={()=>{setView(true)}}>{info[1]}</Badge>
                        <Badge onClick={()=>{setView(true)}}>{info[2]}</Badge>
                     </div>
                ))
            )}
        </div>
        <div className = "review-rating-button-switch">
          <Link to = "/CourseReviews"><button>Reviews</button></Link>
          <Link to = "/CourseRatings"><button>Ratings</button></Link>
          <Link to = "/CourseDetails"><button>Details</button></Link>
        </div>
      </>
    );
  }
  
  export default CourseReviewDetailHeader;

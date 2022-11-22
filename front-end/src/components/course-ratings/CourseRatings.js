import './CourseRatings.css'
import React from 'react';
import { Navigate } from 'react-router-dom';

function CourseRatings({ data }) {
  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }
    return (
      <>
       <br />
      {(typeof data.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                   
                      <div className = "course-ratings-page">
                        <h1>Overall Ratings</h1>
                        <h2>Overall Score</h2>
                        <h3>
                          {data.class_reviews.map((info, key)=> {
                          return info.rating
                          }).reduce((a,b)=> {
                            return a+b
                          })/data.class_reviews.length}
                        </h3>
                        <h2>Would Take It Again</h2>
                        <h3>
                          {data.class_reviews.filter((info, key)=> {
                            return info.would_take_again === "Y"
                          }).length/data.class_reviews.length}
                        </h3>
                        <h2>Difficulty</h2>
                        <h3>{data.class_reviews.map((info, key)=> {
                         return info.difficulty
                        }).reduce((a,b)=> {
                          return a+b
                        })/data.class_reviews.length}</h3>
                        <h2>Level of Workload</h2>
                        <h3>{data.class_reviews.map((info, key)=> {
                         return info.workload
                        }).reduce((a,b)=> {
                          return a+b
                        })/data.class_reviews.length}</h3>
                      </div>
        )}      
      </>
    );
  }
  
  export default CourseRatings;
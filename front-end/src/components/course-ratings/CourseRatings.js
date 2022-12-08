import './CourseRatings.css'
import React from 'react';
import { Navigate } from 'react-router-dom';


function CourseRatings({ data }) {
  const [goToView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }

  const ratingData = data[0]?.class_reviews.map((info, key) => {
    return info.rating
  })

  console.log("Awesomes " + ratingData)
 
    return (
      <>
      {(typeof data[0]?.class_reviews === 'undefined') ? (
                  <p>Loading</p>
                ): (
                      <div className = "course-ratings-page">
                        <h1>Overall Ratings</h1>
                        <h2>Overall Opinions</h2>
                        <h3>
                          {data[0]?.class_reviews.map((info, key)=> {
                          return info.rating
                          }).reduce((a,b)=> {
                            return parseInt(a)+ parseInt(b)
                          })/data[0]?.class_reviews.length}/5
                        </h3>
                        <h2>Would Take It Again</h2>
                        <h3>
                          According to our reviewers, <br></br>
                          {data[0]?.class_reviews.filter((info, key)=> {
                            return info.would_take_again === "Y"
                          }).length}/{data[0]?.class_reviews.length} people would take this class again!
                        </h3>
                        <h2>Difficulty</h2>
                        <h3>{data[0]?.class_reviews.map((info, key)=> {
                         return parseInt(info.difficulty)
                        }).reduce((a,b)=> {
                          return parseInt(a)+parseInt(b)
                        })/data[0]?.class_reviews.length}/5</h3>
                        <h2>Level of Workload</h2>
                        <h3>{data[0]?.class_reviews.map((info, key)=> {
                          return parseInt(info.workload)
                        }).reduce((a,b)=> {
                          console.log(parseInt(a) + parseInt(b))
                          return parseInt(a) + parseInt(b)
                        })/data[0]?.class_reviews.length}/5</h3>
                      </div>
        )}      
      </>
    );
}
  export default CourseRatings;
import './AddReview.css'
import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function AddReview(){

  const handleSubmit= async (e) =>{
    e.preventDefault() 
    const data = new FormData(e.currentTarget);
    const postData = { 
      
      reviewer_name: data.get('name'),
      review: data.get('text'),
      rating: data.get('rating'),
      workload: data.get('workload'),
      difficulty: data.get('difficulty'),
      class: data.get('class'), 
      professor: data.get('professor'),
      semester: data.get('semester'),
      title: data.get('title'),
      
      
    }
    console.log("postData: " + postData) 
  
    const postURL = "http://localhost:4000/review"
    const res = await axios.post(postURL, postData) 
    console.log(res) 

    // onSubmit={handleSubmit}
  }

  return (
    <div className='addreview-container'>
      <div><h1 className='addreview-heading'>Submit your Review</h1></div>
      <br />
      <form className='addreview-form-container' action="/review" method="POST" onSubmit={handleSubmit}>
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        {/* <input name="email" type="text" className="feedback-input" placeholder="Email" /> */}
        <input name="class" type="text" className="feedback-input" placeholder="Class" />
        <input name="professor" type="text" className="feedback-input" placeholder="Professor" />
        <input name="semester" type="text" className="feedback-input" placeholder="Semester" />
        <h6>Rate the Class</h6>
        <div>
          <input type="radio" id="contactChoice1" name="rating" defaultValue="Awful" />
          <label htmlFor="contactChoice1">Awful</label>
          <input type="radio" id="contactChoice2" name="rating" defaultValue="OK" />
          <label htmlFor="contactChoice2">OK</label>
          <input type="radio" id="contactChoice3" name="rating" defaultValue="Good" />
          <label htmlFor="contactChoice3">Good</label>
          <input type="radio" id="contactChoice3" name="rating" defaultValue="Awesome" />
          <label htmlFor="contactChoice3">Awesome</label>
        </div>
        <h6>Level of Difficulty</h6>
        <div>
          <input type="radio" id="contactChoice1" name="difficulty" defaultValue="1" />
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="difficulty" defaultValue="2" />
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue="3" />
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue="4" />
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue="5" />
          <label htmlFor="contactChoice3">5</label>
        </div>
        <h6>Level of Workload</h6>
        <div>
          <input type="radio" id="contactChoice1" name="workload" defaultValue="1" />
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="workload" defaultValue="2" />
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="workload" defaultValue="3" />
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="workload" defaultValue="4" />
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="workload" defaultValue="5" />
          <label htmlFor="contactChoice3">5</label>
        </div>
        <input name="title" type="text" className="feedback-input" placeholder="Title" required/>
        <textarea name="text" className="feedback-input" placeholder="Comment" defaultValue={""}/>
        <input type="submit" defaultValue="SUBMIT" />
      </form>
    </div>
  );
}

export default AddReview;

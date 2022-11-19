import './AddReview.css'
import  React from 'react';
import { Link } from 'react-router-dom'

function AddReview(){
  return (
    <div className='addreview-container'>
      <div><h1 className='addreview-heading'>Submit your Review</h1></div>
      <br />
      <form className='addreview-form-container'>
        <input name="name" type="text" className="feedback-input" placeholder="Name"/>
        <input name="email" type="text" className="feedback-input" placeholder="Email"/>
        <input name="class" type="text" className="feedback-input" placeholder="Class"/>
        <input name="professor" type="text" className="feedback-input" placeholder="Professor"/>
        <input name="semester" type="text" className="feedback-input" placeholder="Semester"/>
        <h6>Rate the Class</h6>
        <div>
          <input type="radio" id="contactChoice1" name="rate" defaultValue="choice1"/>
          <label htmlFor="contactChoice1">Awful</label>
          <input type="radio" id="contactChoice2" name="rate" defaultValue="choice1"/>
          <label htmlFor="contactChoice2">OK</label>
          <input type="radio" id="contactChoice3" name="rate" defaultValue="choice1"/>
          <label htmlFor="contactChoice3">Good</label>
          <input type="radio" id="contactChoice3" name="rate" defaultValue="choice1"/>
          <label htmlFor="contactChoice3">Awesome</label>
        </div>
        <h6>Level of Difficulty</h6>
        <div>
          <input type="radio" id="contactChoice1" name="difficulty" defaultValue="email"/>
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="difficulty" defaultValue="phone"/>
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue="mail"/>
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue="mail"/>
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue="mail"/>
          <label htmlFor="contactChoice3">5</label>
        </div>
        <h6>Level of Workload</h6>
        <div>
          <input type="radio" id="contactChoice1" name="workload" defaultValue="email"/>
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="workload" defaultValue="phone"/>
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="workload" defaultValue="mail"/>
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="workload" defaultValue="mail"/>
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="workload" defaultValue="mail"/>
          <label htmlFor="contactChoice3">5</label>
        </div>
        <input name="title" type="text" className="feedback-input" placeholder="Title"/>
        <textarea name="text" className="feedback-input" placeholder="Comment" defaultValue={""}/>
        <input type="submit" defaultValue="SUBMIT" />
      </form>
    </div>
  );
}

export default AddReview;

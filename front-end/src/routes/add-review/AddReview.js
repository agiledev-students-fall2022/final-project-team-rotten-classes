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
        <input type="radio" id="contactChoice1" name="contact" defaultValue="email"/>
        <label htmlFor="contactChoice1">Awful</label>
        <input type="radio" id="contactChoice2" name="contact" defaultValue="phone"/>
        <label htmlFor="contactChoice2">OK</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">Good</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">Awesome</label>
        <h6>Level of Difficulty</h6>
        <input type="radio" id="contactChoice1" name="contact" defaultValue="email"/>
        <label htmlFor="contactChoice1">1</label>
        <input type="radio" id="contactChoice2" name="contact" defaultValue="phone"/>
        <label htmlFor="contactChoice2">2</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">3</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">4</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">5</label>
        <h6>Level of Workload</h6>
        <input type="radio" id="contactChoice1" name="contact" defaultValue="email"/>
        <label htmlFor="contactChoice1">1</label>
        <input type="radio" id="contactChoice2" name="contact" defaultValue="phone"/>
        <label htmlFor="contactChoice2">2</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">3</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">4</label>
        <input type="radio" id="contactChoice3" name="contact" defaultValue="mail"/>
        <label htmlFor="contactChoice3">5</label>
        <input name="title" type="text" className="feedback-input" placeholder="Title"/>
        <textarea name="text" className="feedback-input" placeholder="Comment" defaultValue={""}/>
        <input type="submit" defaultValue="SUBMIT" />
      </form>
    </div>
  );
}

export default AddReview;

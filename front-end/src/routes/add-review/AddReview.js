import './AddReview.css'
import React, { useState }  from 'react'
import { Link } from 'react-router-dom'

function AddReview(){

//   let [inputs, setInputs] = useState({});

//   const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
//     setInputs(event.target.value)
// }

// const handleSubmit=()=>{

// const postURL = "http://localhost:4000/class"
// fetch(postURL, {

//   method: 'POST',
//   headers: {

//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//       },

// })
// .then(()=>{
//   alert("Your review been added to the system!");
// })

//onSubmit={handleSubmit}
//}

  return (
    <div className='addreview-container'>
      <div><h1 className='addreview-heading'>Submit your Review</h1></div>
      <br />
      <form className='addreview-form-container' action="/class" method="POST">
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        {/* <input name="email" type="text" className="feedback-input" placeholder="Email" /> */}
        <input name="class" type="text" className="feedback-input" placeholder="Class" />
        <input name="professor" type="text" className="feedback-input" placeholder="Professor" />
        <input name="semester" type="text" className="feedback-input" placeholder="Semester" />
        <h6>Rate the Class</h6>
        <div>
          <input type="radio" id="contactChoice1" name="contact" defaultValue="email" />
          <label htmlFor="contactChoice1">Awful</label>
          <input type="radio" id="contactChoice2" name="contact" defaultValue="phone" />
          <label htmlFor="contactChoice2">OK</label>
          <input type="radio" id="contactChoice3" name="contact" defaultValue="mail" />
          <label htmlFor="contactChoice3">Good</label>
          <input type="radio" id="contactChoice3" name="contact" defaultValue="mail" />
          <label htmlFor="contactChoice3">Awesome</label>
        </div>
        <h6>Level of Difficulty</h6>
        <div>
          <input type="radio" id="contactChoice1" name="contact1" defaultValue="email" />
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="contact1" defaultValue="phone" />
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="contact1" defaultValue="mail" />
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="contact1" defaultValue="mail" />
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="contact1" defaultValue="mail" />
          <label htmlFor="contactChoice3">5</label>
        </div>
        <h6>Level of Workload</h6>
        <div>
          <input type="radio" id="contactChoice1" name="contact2" defaultValue="email" />
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="contact2" defaultValue="phone" />
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="contact2" defaultValue="mail" />
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="contact2" defaultValue="mail" />
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="contact2" defaultValue="mail" />
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

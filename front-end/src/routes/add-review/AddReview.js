import './AddReview.css'
import React  from 'react'
import axios from 'axios';
function AddReview(){
  const handleSubmit= async (e) =>{
    e.preventDefault() 

  const data = new FormData(e.currentTarget);

  if(data.get('text').length == 0 || data.get('difficulty')==null || data.get('rating')==null || data.get('workload')==null || data.get('would_take')==null || data.get('class').length==0){
    console.log("error");
    console.log(data.get('text').length)
    console.log(data.get('difficulty'))
    console.log(data.get('rating'))
    console.log(data.get('workload'))
    console.log(data.get('would_take'))
    alert("Please fill in all fields");


  }
  else{
    const postData = {
      reviewer_name: data.get('name'),
      review: data.get('text'),
      rating: data.get('rating'),
      workload: data.get('workload'),
      difficulty: data.get('difficulty'),
      class: data.get('class'), 
      would_take_again:data.get('would_take'),
      professor: data.get('professor'),
      semester: data.get('semester'),
      // title: data.get('title'),
    }


    console.log("postData: " + postData)
    const postURL = "https://hammerhead-app-skzsp.ondigitalocean.app/api/review";
    const res = await axios.post(postURL, postData) 
    console.log(res)

  }

  }

  return (
    <div className='addreview-container'>
      <div><h1 className='addreview-heading'>Submit your Review</h1></div>
      <br />
      <form className='addreview-form-container' action="/api/review" method="POST" onSubmit={handleSubmit}>
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        <input name="class" type="text" className="feedback-input" placeholder="Class" />
        <input name="professor" type="text" className="feedback-input" placeholder="Professor" />
        <input name="semester" type="text" className="feedback-input" placeholder="Semester" />
        <h6>Rate the Class</h6>
        <div>
          <input type="radio" id="contactChoice1" name="rating" defaultValue={1} />
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="rating" defaultValue={2} />
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="rating" defaultValue={3} />
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="rating" defaultValue={4} />
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="rating" defaultValue={5} />
          <label htmlFor="contactChoice3">5</label>
        </div>
        <h6>Would Take Again</h6>
        <div>
        <input type="radio" id="would_take" name="would_take" defaultValue="Y" />
        <label htmlFor="would_take">Y</label>
        <input type="radio" id="would_take" name="would_take" defaultValue="N" />
        <label htmlFor="would_take2">N</label>
        </div>
        <h6>Level of Difficulty</h6>
        <div>
          <input type="radio" id="contactChoice1" name="difficulty" defaultValue={1} />
          <label htmlFor="contactChoice1">1</label>
          <input type="radio" id="contactChoice2" name="difficulty" defaultValue={2} />
          <label htmlFor="contactChoice2">2</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue={3} />
          <label htmlFor="contactChoice3">3</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue={4} />
          <label htmlFor="contactChoice3">4</label>
          <input type="radio" id="contactChoice3" name="difficulty" defaultValue={5} />
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
        {/* <input name="title" type="text" className="feedback-input" placeholder="Title" required/> */}
        <textarea name="text" className="feedback-input" placeholder="Comment" defaultValue={''}/>
        <input type="submit" defaultValue="SUBMIT" />
      </form>
    </div>
  );
}
export default AddReview;

import './ContactUs.css'
import React, { useState } from 'react';


    
function ContactUs() {
    let [inputs, setInputs] = useState({});
    let [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
       
        setInputs(values => ({...values, [name]: value}))
        
    }
    
    const handleSubmit = event => {
      event.preventDefault();
      console.log(inputs);
     setSubmitting(true);
  
     setTimeout(() => {
       setSubmitting(false);}, 3000)
   }
  
return (
<div className="whole">

    <h1 className="head">Get in touch!  </h1>
    {submitting &&
       <div className="submit">Submtting Form...</div>
     }

<div className="form">

   
<form onSubmit={handleSubmit}>
<br></br>
  <br></br>
  <br></br>
  <label className="inputs">
    Name
    <br></br>
    <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
        />
  </label>
  <br></br>
  <br></br>
  <br></br>
  <label className="inputs">
    Email
    <br></br>
    <input 
        type="text" 
        name="email"
        value={inputs.email || ""} 
        onChange={handleChange}

        />
  </label>
  <br></br>
  <br></br>
  <br></br>
  <label className="inputs">
    Message                            
  <br></br>
    <textarea 
        type="Message"
        name="message"
        value={inputs.message || ""} 
        onChange={handleChange}
        />
  </label>
  <br></br>
  <br></br>
  <br></br>
  <input type="submit" value="Submit" />

</form>
    <div className="contacts">
        <p>
            7 NE. Newcastle St.Brooklyn, NY 11211
        </p>
        <p>
            716-948-3100
        </p>
        <p>
            support@classcritic.io
        </p>
    </div>
</div>





</div>

   
  )

        }



  
    




export default ContactUs;

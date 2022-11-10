import './ContactUs.css'
import React, { useState } from 'react';

const ContactUs = () => {
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
            setSubmitting(false);
            }, 3000)
    }
    return (
        <div className="whole">
            <h1 className="head">Get in touch!</h1>
            {submitting &&
                <div className="submit">Submitting Form...</div>
            }
            <div>
                <form onSubmit={handleSubmit} className="contact-us-form">
                    <input type="text" name="name" placeholder="Name" value={inputs.name || ""}
                           className="feedback-input" onChange={handleChange}/>
                    <input type="text" name="email" placeholder="Email" value={inputs.email || ""}
                           className="feedback-input" onChange={handleChange}/>
                    <textarea name="message" placeholder="Enter your feedback" value={inputs.message || ""}
                              className="feedback-input-textarea"
                              onChange={handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="contacts">
                <p>7 NE. Newcastle St.Brooklyn, NY 11211</p>
                <p>716-948-3100</p>
                <p>support@classcritic.io</p>
            </div>
        </div>
    )}

export default ContactUs;

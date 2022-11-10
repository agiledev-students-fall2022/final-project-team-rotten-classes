import React from "react";
import './SubjectButtons.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SubjectButtons = () => {

    const [goToView, setView] = React.useState(false);


if(goToView){
  return <Navigate to="/Viewall"/>;
}
    var settings = {
        dots: false,
        autoplay: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000
    };
      return (
        <>
        {/* <div className="subject-buttons">
            <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      </div> */}

<Slider {...settings} >
<button onClick={()=>{setView(true)}} type="button" className="btn btn-primary text-nowrap">Computer Science</button>
<button onClick={()=>{setView(true)}} type="button" className="btn btn-warning">Biology</button>
<button onClick={()=>{setView(true)}} type="button" className="btn btn-success text-nowrap">Global Health</button>
<button onClick={()=>{setView(true)}} type="button" className="btn btn-secondary text-nowrap">Philosophy</button>
<button onClick={()=>{setView(true)}} type="button" className="btn btn-danger text-nowrap">Mathematics</button>
<button onClick={()=>{setView(true)}} type="button" className="btn btn-info text-nowrap">Business Studies</button>

    </Slider>
        </>
      )}
  
  export default SubjectButtons;
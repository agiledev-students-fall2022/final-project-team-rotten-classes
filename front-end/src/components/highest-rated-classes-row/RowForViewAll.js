import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './RowView.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RowForViewall = () => {

    const[data, setData] = useState([])

    useEffect(() => {
      fetch("/viewall").then(
        response => response.json()
      ).then(
        data => {
          setData(data)
        }
      )
    }, [])
    
 
    return (
        
        (typeof data.class_info === 'undefined') ? (
            <p>Loading</p>
          ): (
              data.class_info?.map((info, index)=> (
              <div className="big">
                  <div className="slick-list">
                      <h5 className="title">{info[0]}</h5>
                      <Link to={'./../CourseReviews?Course=' + info[3]}>
                          <img src = {info[2]}/>
                      </Link>
                  </div>
                  <div className="subheading">
                      <h6 className="rate">{info[3]}%</h6>
                      <h6 className="prof">{info[1]}</h6>
                  </div>
              </div>
            ))
          )

    )
}

export default RowForViewall;
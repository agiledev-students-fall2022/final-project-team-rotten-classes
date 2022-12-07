import './Viewall.css'
import React from 'react';
import RowForViewAll from './components/highest-rated-classes-row/RowForViewAll'

function Viewall() {
    return (
      <>
     <br />
     <h6 className="head1">HIGHEST RATED CLASSES</h6>
     <br />
      <RowForViewAll />
      </>
    );
  }
  
  export default Viewall;
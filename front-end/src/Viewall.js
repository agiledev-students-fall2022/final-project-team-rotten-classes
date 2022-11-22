import './Viewall.css'
import  React from 'react';
import { Link } from 'react-router-dom'
import RowForViewAll from './components/highest-rated-classes-row/RowForViewAll'
import { fontSize } from '@mui/system';


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

function Viewall() {
    return (
      <>



     <br></br>

     <h6 className="head1">HIGHEST RATED CLASSES</h6> 

    
     <br></br>
    
      <RowForViewAll />


      </>
    );
  }
  
  export default Viewall;
import './Viewall.css'
import  React from 'react';
import { Link } from 'react-router-dom'
import Row from './components/highest-rated-classes-row/Row'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

function Viewall() {
    return (
      <>
  

    <Link to="/home">Back</Link>
     <p id="intro">Here are all the classes available!</p>

     <h6 className="head1">HIGHEST RATED CLASSES</h6> 
    
      <Row />


      </>
    );
  }
  
  export default Viewall;
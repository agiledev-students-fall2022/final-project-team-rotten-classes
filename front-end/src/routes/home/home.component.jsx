import './home.styles.css'
import  React from 'react';
import Slider from '../../components/slideshow/Slider'
import Row from '../../components/highest-rated-classes-row/Row'
import BottomNavigationBar from "../bottom-navigation-bar/bottom-navigation-bar.component";
import SubjectButtons from '../../components/subject-buttons/SubjectButtons'
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

function Home() {
  const [goToView, setView] = React.useState(false);

  if(goToView){
    return <Navigate to="/Viewall"/>;
  }

  return (
    <>
      <Slider />
      <br/>
      <SubjectButtons />
      <br/>
      <div className="heading-highest-rated">
        <h6 className="head1">HIGHEST RATED CLASSES <Badge bg="danger">ALL</Badge></h6>
        <h6 className="head2"><Button onClick={()=>{setView(true)}}>MORE</Button></h6>
      </div>
      <Row />
      <BottomNavigationBar />
    </>
  );
}

export default Home;

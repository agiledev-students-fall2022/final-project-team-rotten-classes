import './Home.css'
import Slider from './components/slideshow/Slider'
import Row from './components/highest-rated-classes-row/Row'
import Navigation from './components/bottom-navigation-bar/Navigation'
import SubjectButtons from './components/subject-buttons/SubjectButtons'
import Badge from 'react-bootstrap/Badge';
import FindClassByMajor from "./components/find-class-by-major/find-class-by-major.component";

function Home() {
  return (
    <>
      <Slider />
      <br/>
      <SubjectButtons />
      <br/>
      <div className="heading-highest-rated">
        <h6 className="head1">HIGHEST RATED CLASSES <Badge bg="danger">ALL</Badge></h6>
        <h6 className="head2">MORE</h6>
      </div>
      <Row />
      <FindClassByMajor />
      <Navigation />
      
    </>
  );
}

export default Home;

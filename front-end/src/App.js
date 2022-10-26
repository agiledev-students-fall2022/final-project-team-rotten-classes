import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';
import CourseRatings from './CourseRatings';
import CourseReviews from './CourseReviews';
import CourseDetails from './CourseDetails';
import Footer from './Footer';
import BottomNavigationBar from './routes/bottom-navigation-bar/bottom-navigation-bar.component';
import AddReview from './AddReview';


function App() {
  return (
    <div className="App"> 

    <Header />
   
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viewall" element={<Viewall />} />
        <Route path="/CourseRatings" element={<CourseRatings />} />
        <Route path="/CourseReviews" element={<CourseReviews />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/AddReview" element={<AddReview />} />
      </Routes>

      <BottomNavigationBar />
    </Router>

    <Footer />

    </div>
    
  );
}


export default App;

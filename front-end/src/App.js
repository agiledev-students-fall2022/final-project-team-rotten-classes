import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';
import CourseRatings from './components/course-ratings/CourseRatings';
import CourseReviews from './components/course-reviews/CourseReviews';
import CourseDetails from './components/course-details/CourseDetails';
import Footer from './Footer';
import BottomNavigationBar from './routes/bottom-navigation-bar/bottom-navigation-bar.component';
import AddReview from './routes/add-review/AddReview';
import SearchPage from "./routes/search-page/search-page.component";
import ContactUs from "./routes/contact-us/ContactUs";
import Login from './Login';


function App() {
  return (
    <div className="App"> 

    <Header />
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Viewall" element={<Viewall />} />
        <Route path="/CourseRatings" element={<CourseRatings />} />
        <Route path="/CourseReviews" element={<CourseReviews />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/AddReview" element={<AddReview />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <BottomNavigationBar />
    </Router>

    <Footer />

    </div>
    
  );
}


export default App;

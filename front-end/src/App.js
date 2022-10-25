import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';
import CourseRatings from './CourseRatings';
import Footer from './Footer';
import BottomNavigationBar from './routes/bottom-navigation-bar/bottom-navigation-bar.component';
import AddReview from './AddReview';
import SearchPage from "./routes/search-page/search-page.component";
import ConatctUs from "./routes/contact_us/ContactUs";


function App() {
  return (
    <div className="App"> 

    <Header />
   
   <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Viewall" element={<Viewall />} />
          <Route path="/CourseRatings" element={<CourseRatings />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AddReview" element={<AddReview />} />
          <Route path="/search" element={<SearchPage />} />
      </Routes>

      <BottomNavigationBar />
    </Router>

    <Footer />

    </div>
    
  );
}


export default App;

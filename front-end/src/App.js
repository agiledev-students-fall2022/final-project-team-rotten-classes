import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';
import Footer from './Footer';
import CourseRatings from './CourseRatings';
import BottomNavigationBar from './routes/bottom-navigation-bar/bottom-navigation-bar.component';


function App() {
  return (
    <div className="App"> 

    <Header />
   
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viewall" element={<Viewall />} />
        <Route path="/CourseRatings" element = {<CourseRatings />} />
    
      </Routes>

      <BottomNavigationBar />
    </Router>

    <Footer />

    </div>
    
  );
}


export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';
import Footer from './Footer';
import CourseRatings from './CourseRatings';


function App() {
  return (
    <div className="App"> 

   <Header />
   <Home />
   
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viewall" element={<Viewall />} />
        <Route path="/CourseRatings" element = {<CourseRatings />} />
    
      </Routes>

    </Router>

    <Footer />

    </div>
    
  );
}


export default App;

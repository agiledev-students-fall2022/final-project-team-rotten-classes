import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';
import BottomNavigationBar from './routes/bottom-navigation-bar/bottom-navigation-bar.component';


function App() {
  return (
    <div className="App"> 

    <Header />
   
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viewall" element={<Viewall />} />
    
      </Routes>

      <BottomNavigationBar />
    </Router>

    </div>
    
  );
}


export default App;

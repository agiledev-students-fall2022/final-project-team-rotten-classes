import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';


import Home from './Home';
import Viewall from './Viewall';
import Header from './Header';


function App() {
  return (
    <div className="App"> 

   <Header />
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Viewall" element={<Viewall />} />
    
      </Routes>

    </Router>
   

    
    </div>
    
  );
}


export default App;

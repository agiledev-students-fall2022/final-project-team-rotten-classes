import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Header from './Header';
import Viewall from './Viewall';


function App() {
  return (
    <div className="App"> 

   <Header />
   <Home />
   
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

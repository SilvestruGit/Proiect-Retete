import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FromReteta from './Components/FormReteta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/adauga' element={<FromReteta/>} />                
            </Routes>
          </div>
      </div>
    </Router>
    
  );
}

export default App;

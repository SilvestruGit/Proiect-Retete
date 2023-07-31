import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FromReteta from './Components/FormReteta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import date from './data/date';
import Favorite from './Components/Favorite';


function App() {

  const [retete, setRetete] = useState(date);


  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Routes>
              <Route 
                exact path='/' 
                element={<Home retete={retete} setRetete={setRetete} />}  
              />
              <Route 
                exact path='/favorite' 
                element={<Favorite retete={retete} setRetete={setRetete} />}  
              />
              <Route 
                exact path='/adauga' 
                element={<FromReteta retete={retete} setRetete={setRetete} />}
              />                
            </Routes>
          </div>
      </div>
    </Router>
    
  );
}

export default App;

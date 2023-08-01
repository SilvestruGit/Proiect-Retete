import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FromReteta from './Components/FormReteta';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import date from './data/date';
import Favorite from './Components/Favorite';
import Filtru from './Components/Filtru';


function App() {

  const [retete, setRetete] = useState(date);
  const [filtruMicDejun, setFiltruMicDejun] = useState(false);
  const [filtruPranz, setFiltruPranz] = useState(false);
  const [filtruCina, setFiltruCina] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Filtru 
              filtruCina={filtruCina}
              filtruMicDejun={filtruMicDejun}
              filtruPranz={filtruPranz}
              setFiltruCina={setFiltruCina}
              setFiltruMicDejun={setFiltruMicDejun}
              setFiltruPranz={setFiltruPranz}
            />
            <Routes>
              <Route 
                exact path='/' 
                element={
                  <div>
                    <Home 
                      retete={retete} 
                      setRetete={setRetete}
                      filtruCina={filtruCina}
                      filtruMicDejun={filtruMicDejun}
                      filtruPranz={filtruPranz}
                      setFiltruCina={setFiltruCina}
                      setFiltruMicDejun={setFiltruMicDejun}
                      setFiltruPranz={setFiltruPranz} 
                    />
                  </div>
                }
              />
              <Route 
                exact path='/favorite' 
                element={
                  <Favorite
                    retete={retete} 
                    setRetete={setRetete}
                    filtruCina={filtruCina}
                    filtruMicDejun={filtruMicDejun}
                    filtruPranz={filtruPranz}
                  />}  
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

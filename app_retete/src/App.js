import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FromReteta from './Components/FormReteta';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import date from './data/date';
import Favorite from './Components/Favorite';
import Filtru from './Components/Filtru';
import Info from './Components/Info';


function App() {

  const [retete, setRetete] = useState(date);
  const [filtruMicDejun, setFiltruMicDejun] = useState(false);
  const [filtruPranz, setFiltruPranz] = useState(false);
  const [filtruCina, setFiltruCina] = useState(false);

  const [search, setSearch] = useState("");

  // const location = useLocation();
  // const isInfoPage = location.pathname.startsWith('/retete/');

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Routes>
              <Route 
                exact path='/' 
                element={
                <div className='content'>
                  <Filtru
                    filtruCina={filtruCina}
                    filtruMicDejun={filtruMicDejun}
                    filtruPranz={filtruPranz}
                    setFiltruCina={setFiltruCina}
                    setFiltruMicDejun={setFiltruMicDejun}
                    setFiltruPranz={setFiltruPranz}
                    search={search}
                    setSearch={setSearch}
                  />
                  <Home
                    retete={retete}
                    setRetete={setRetete}
                    filtruCina={filtruCina}
                    filtruMicDejun={filtruMicDejun}
                    filtruPranz={filtruPranz}
                    setFiltruCina={setFiltruCina}
                    setFiltruMicDejun={setFiltruMicDejun}
                    setFiltruPranz={setFiltruPranz}
                    search={search}
                  />
                </div>
                }
              />
              <Route 
                exact path='/favorite' 
                element={
                  <div className='content'>
                    <Filtru
                      filtruCina={filtruCina}
                      filtruMicDejun={filtruMicDejun}
                      filtruPranz={filtruPranz}
                      setFiltruCina={setFiltruCina}
                      setFiltruMicDejun={setFiltruMicDejun}
                      setFiltruPranz={setFiltruPranz}
                      search={search}
                      setSearch={setSearch}
                    />
                    <Favorite
                      retete={retete}
                      setRetete={setRetete}
                      filtruCina={filtruCina}
                      filtruMicDejun={filtruMicDejun}
                      filtruPranz={filtruPranz}
                      search={search}
                    />
                </div>
                }  
              />
              <Route 
                exact path='/adauga' 
                element={<FromReteta retete={retete} setRetete={setRetete} />}
              />
              <Route 
                path='/retete/:id'
                element={
                  <div>
                    <Info 
                      retete={retete}
                    />
                  </div>
                }
              />              
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;

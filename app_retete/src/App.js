import './App.css';
import Navbar from './Components/Navbar';
import Retete from './Components/Retete';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2>Retete disponibile</h2>
      <div className="content">
        <Retete />
      </div>
    </div>
  );
}

export default App;

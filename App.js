import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import World from './World';
function App() {
  
const title = 'Welcome To My World';

  return (
    <div className="App">
      <Navbar/>
      <br>
      </br>
  <h1>{title}</h1>
  <br></br>
  <Home/>
  <br></br>
  

    </div>
  );
}

export default App;

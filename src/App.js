import Main from "../src/components/main";
import About from "../src/components/About";
import Navbar from "../src/components/Navbar";
import Portfolio from './components/Portfolio';
import Loader from './components/Loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader />
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      
    </div>
  );
}

export default App;

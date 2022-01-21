import Main from "../src/components/main";
import About from "../src/components/About";
import Navbar from "../src/components/Navbar";
import Portfolio from './components/Portfolio';
import Loader from './components/Loader';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader />
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

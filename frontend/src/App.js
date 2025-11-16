import './index.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Solutions from './pages/Solutions';
import SolutionInput from './pages/SolutionInput';
import PredictionResult from './pages/PredictionResult';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solution/:id" element={<SolutionInput />} />
        <Route path="/prediction/:id" element={<PredictionResult />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
  );
}

export default App;

import './App.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <>
      <NavBar />
      <div className='mainContainer'>
        <Routes>
          <Route path='/text-word-tool' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

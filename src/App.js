import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import NavMenu from "./components/NavMenu";
import './index.css';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

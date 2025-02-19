import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homepage';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  ); 
};

export default App;
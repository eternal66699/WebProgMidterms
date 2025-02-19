import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Product from './components/Product';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  ); 
};

export default App;
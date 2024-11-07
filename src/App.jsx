import './App.css';
import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

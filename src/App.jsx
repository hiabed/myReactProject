import './App.css';
import './Navigation.css'
import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Home />} >
      <Route path="home" element={ <Home /> } />
      <Route path="shop" element={ <Shop /> } />
      <Route path="about" element={ <About /> } />
      <Route path="contact" element={ <Contact /> } />
    </Route>
));

function App() {
  return (
    <div id="app">
      <Navigation />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

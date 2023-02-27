import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom"
import AsteroidData from './Components/AsteroidData';
import RandomAsteroid from './Components/RandomAsteroid';
 
function App() {
 
  return (
    <Router>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/AsteroidData" element={<AsteroidData />} />
       <Route path="/RandomAsteroid" element={<RandomAsteroid />} />
    </Routes>
   </Router>
    
  );
}

export default App;

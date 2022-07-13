import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from './component/card';
import CardBackGround from './component/CardBackGround';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Navbar" element={<Navbar />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/Footer" element={<Footer />}></Route>
        
        <Route exact path="/Card" element={<Card />}></Route>
        <Route exact path="/CardBackGround" element={<CardBackGround />}></Route>
        
        </Routes>
      </Router>
    </div>
  )
}

export default App

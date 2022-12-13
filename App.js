
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Races from "./components/Races";
import Community from "./components/Community";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/races" element={<Races/>}/>
      <Route path="/community" element={<Community/>}/>
      </Routes>
    </Router>
  );
}

export default App;

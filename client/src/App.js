import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/journey" element={<Journey/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

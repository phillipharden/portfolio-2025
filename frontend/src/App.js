import React from "react";
import { useState, useEffect } from "react";
//? -----REACT-ROUTER----------------------------------------------------------------
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//? -----CSS-------------------------------------------------------------------------
import "./css/App.css";
//? -----PAGES-----------------------------------------------------------------------
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
//? -----COMPONENTS-------------------------------------------------------------------
import Sidebar from "./components/Sidebar";
import FooterNav from "./components/FooterNav";
import Header from "./components/Header";
//? -----REACT-BOOTSTRAP--------------------------------------------------------------
import { Container, ToggleButton } from "react-bootstrap";
import Logo from "./images/logo.png";

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header ImgUrl={Logo} ImgAlt="Phillip's Logo" Title="Phillip" />
      </div>

      <div className="main-section">
        <div className="app-sidebar">
          <Sidebar ImgUrl={Logo} ImgAlt="Phillip Logo" Title="Phillip" />
        </div>

        <div className="app-body">
          <div className="container-lg">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>

      <div className="app-footer-nav">
        <FooterNav />
      </div>
    </div>
  );
}

export default App;

















// COLORFUL COMMENTS
//! Red (!)
//? Blue (?)
//* Green (*)
//^ Yellow (^)
//& Pink (&)
//~ Purple (~)
//todo Mustard (todo)
// Grey (//)
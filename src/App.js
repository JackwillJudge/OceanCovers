import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./Contents/NavBar";
import Home from "./Contents/Home";
import Services from "./Contents/Services";
import Gallery from "./Contents/Gallery";
import Contact from "./Contents/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Gallery" element={<Gallery />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
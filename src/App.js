import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./Contents/NavBar";
import Home from "./Contents/Home";
import Services from "./Contents/Services";
import Gallery from "./Contents/Gallery";
import Contact from "./Contents/Contact";
import { Routes, Route, HashRouter } from "react-router-dom";

// import { BrowserRouter as Route, Routes, HashRouter } from "react-router-dom";
function App() {
  return (
    <div>
        <NavBar />
        <HashRouter>     
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Services" element={<Services />} />
              <Route exact path="/Gallery" element={<Gallery />} />
              <Route exact path="/Contact" element={<Contact />} />
            </Routes>
          </div>
      </HashRouter>
 
    </div>
  );
}

export default App;

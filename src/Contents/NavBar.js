import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../Contents/images/logo.png";

const NavBar = () => {
  return (
    <Navbar
      style={{ maxWidth: "94%" }}
      bg="white"
      variant="light"
      collapseOnSelect
      expand="lg"
    >
      <Navbar.Brand href="/" style={{ marginLeft: "15px" }}>
        <img alt="OceanCovers Logo" src={Logo} height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto text-center">
          <Nav.Link className="navItem" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="navItem" href="/services">
            Services
          </Nav.Link>
          <Nav.Link className="navItem" href="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link className="navItem" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../Contents/images/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="white" variant="light" collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link
              styles={{ paddingLeft: "100px", paddingRight: "100px" }}
              href="#features"
            >
              Gallery
            </Nav.Link>
            <Nav.Link path="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

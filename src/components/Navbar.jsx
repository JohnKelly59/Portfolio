import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Resume from "./resume.pdf";

function Navigation() {
  return (
    <Fade>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> John Kelly</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#languages">Stack</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href={Resume} download>
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fade>
  );
}

export default Navigation;

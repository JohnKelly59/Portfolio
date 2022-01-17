import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Resume from "./resume.pdf";

function Navigation() {
  return (
    <>
      <Fade>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">John Kelly</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#languages">Languages</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              <Nav.Link className="NavBarResume " href={Resume} download>
                Resume
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </Fade>
    </>
  );
}

export default Navigation;

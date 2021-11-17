import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

function Navigation(){

return(
  <>
  <Fade>
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#">John Kelly</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#projects">Project</Nav.Link>
      <Nav.Link href="#languages">Languages</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </Fade>
  </>
  )};
  
  export default Navigation;
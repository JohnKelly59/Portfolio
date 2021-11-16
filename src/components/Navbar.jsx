import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

function Navigation(){

return(
  <>
  <Fade>
 <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">John Kelly</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#languages">Languages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </Fade>
  </>
  )};
  
  export default Navigation;
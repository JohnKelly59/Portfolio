import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

function Navigation(){

return(
  <>
 <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">John Kelly</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#languages">Languages</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )};
  
  export default Navigation;
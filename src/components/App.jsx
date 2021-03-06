import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navbar";
import CarouselComponent from "./Languages.jsx";
import Project from "./Projects";
import Contacts from "./Contact";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Header />

        <br />
        <div className="bg-dark">
          <br />
          <Project />
          <CarouselComponent />
          <About />
          <Contacts />
        </div>
      </main>
    </div>
  );
}

export default App;

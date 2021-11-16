
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./Navbar";
import CarouselComponent from "./Languages.jsx";
import Project from "./Projects";
import Contacts from "./Contact";



function App() {
  return (
    <div className="App">
    <header>
     <Navigation/>
     </header>
     <main>
     <br />
     <Project />
     <CarouselComponent/>
     <Contacts />
     </main>
     </div>
  );
}

export default App;

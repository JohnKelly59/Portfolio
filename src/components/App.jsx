
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./Navbar";
import CarouselComponent from "./Languages.jsx";
import Project from "./Projects";
import Contacts from "./Contact";
import Header from "./Header";


function App() {
  return (
    <div className="App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <header>
     <Navigation/>
     </header>
     <main>
     
     <Header/>
     <br />
     <div className="bg-dark">
     <br/>
     <Project />
     <CarouselComponent/>
     <Contacts />
      </div>
     </main>
     </meta>
     </div>
     
  );
}

export default App;

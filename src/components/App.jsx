
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
    <header>
     <Navigation/>
     </header>
     <main>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <Header/>
     </meta>
     <br />
     <div className="bg-dark">
     <br/>
     <Project />
     <CarouselComponent/>
     <Contacts />
      </div>
     </main>
    
     </div>
     
  );
}

export default App;

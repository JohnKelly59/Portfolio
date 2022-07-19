import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ParticlesBg from "particles-bg";

function Header() {
  return (
    <>
      <section className=" jumbotron text-center text-dark">
        <div className="container-fluid">
          <h1 className=" jumbotron-heading">John Kelly</h1>

          <h1 className=" text-muted">Software Engineer</h1>
        </div>
      </section>
      <ParticlesBg type="polygon" bg={true} />
    </>
  );
}

export default Header;

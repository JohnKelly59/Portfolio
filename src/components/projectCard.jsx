import React from "react";
import Fade from "react-reveal/Fade";
function projectCard(props) {
  return (
    <Fade bottom>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading text-light">{props.title}</h2>
          <h6 className="text-muted">{props.build}</h6>
          <p className="lead text-light">{props.description}</p>
        </div>
        <div className="col-md-5">
          <a
            className="darken"
            href={props.URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="100%" height="100%" src={props.img} alt={props.img} />
          </a>
        </div>
      </div>{" "}
    </Fade>
  );
}

export default projectCard;

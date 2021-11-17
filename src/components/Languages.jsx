
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import fe from "./fei.png";
import be from "./bei.png";
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5} from '@fortawesome/free-brands-svg-icons'
import { faCss3} from '@fortawesome/free-brands-svg-icons'
import { faJsSquare} from '@fortawesome/free-brands-svg-icons'
import { faReact} from '@fortawesome/free-brands-svg-icons'
import { faNodeJs} from '@fortawesome/free-brands-svg-icons'
import {faPython} from '@fortawesome/free-brands-svg-icons'
import { faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faAws} from '@fortawesome/free-brands-svg-icons'
import { faFileCode} from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

function CarouselComponent(){

return(
    <div id="languages">
    <Fade bottom>
   <div className="title text-white">
   <FontAwesomeIcon icon={faFileCode} size="6x"/>
    <h1>Languages</h1>
    </div>
    </Fade>
    <Fade bottom>
    <Carousel>
      <Carousel.Item interval={1500}>
     
        <img className="d " src={fe} alt="Image One"/>
        <Carousel.Caption>
        
          <h3><FontAwesomeIcon icon={faHtml5} size="3x"/>&nbsp; &nbsp;<FontAwesomeIcon icon={faCss3} size="3x"/>&nbsp; &nbsp;
          <FontAwesomeIcon icon={faJsSquare} size="3x"/>&nbsp; &nbsp;<FontAwesomeIcon icon={faReact} size="3x"/></h3>
          <p>HTML, CSS, JavaScript, React</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img className="d " src={be} alt="Image Two"/>
        <Carousel.Caption>
          <h3><FontAwesomeIcon icon={faNodeJs} size="3x"/>&nbsp; &nbsp;<FontAwesomeIcon icon={faPython} size="3x"/>&nbsp; &nbsp;
          <FontAwesomeIcon icon={faDatabase} size="3x"/>&nbsp; &nbsp;<FontAwesomeIcon icon={faAws} size="3x"/></h3>
          <p>Node.js, Python, SQl/NoSQL, AWS</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Fade>
  </div>
);
}

export default CarouselComponent;
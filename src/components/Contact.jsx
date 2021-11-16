import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './index.css'; 
import Fade from 'react-reveal/Fade';


function Contacts(){
return(
    <div id="contact" className="container-fluid bg-dark text-white">


    <div className=" container-fluid row">
    <Fade bottom>
      <div className="col-lg-4">
       
        <a href= "https://github.com/JohnKelly59"><FontAwesomeIcon icon={faGithub} size="8x"/></a>
        <h2>Github</h2>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      </Fade>
      <Fade bottom>
      <div className="col-lg-4">
      <a href= "https://www.linkedin.com/in/john-kelly-b96b1a18a?trk=public_profile_browsemap_profile-result-card_result-card_full-click"><FontAwesomeIcon icon={faLinkedin} size="8x"/></a>

        <h2>LinkedIn</h2>
        
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      </Fade>
      <Fade bottom>
      <div className="col-lg-4">
      <a href="mailto:batboy.john91@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="8x"/></a>

        <h2>Mail</h2>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
      </Fade>
    </div>
</div>
  
)
}
export default Contacts;
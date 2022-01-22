import React from "react";
import time from "../images/time.png";
import santa from "../images/santa.png";
import weather from "../images/weather.png";
import job from "../images/job.png";
import game from "../images/game.png";
import jmessage from "../images/jmessage.png";
import MonsterWorkout from "../images/MonsterWorkout.png";
import "./index.css";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
//import projectTemplate from "../projectTemplate";
//import ProjectCard from "./projectCard";

// function createProjectCard(projectTemplate) {
//   const baseUrl = "../images/";
//   return (
//     <ProjectCard
//       key={projectTemplate.id}
//       title={projectTemplate.title}
//       build={projectTemplate.build}
//       description={projectTemplate.description}
//       URL={projectTemplate.URL}
//       img={require("../images/MonsterWorkout.png")}
//     />
//   );
// }

function Project() {
  // return (
  //   <>
  //     <div id="projects" className="bg-dark container-fluid">
  //       <Fade bottom>
  //         <div className="title text-white">
  //           <FontAwesomeIcon
  //             icon={faBriefcase}
  //             style={{ color: "#FFF" }}
  //             size="6x"
  //           />
  //           <h1>Projects</h1>
  //         </div>
  //       </Fade>{" "}
  //       <hr className="featurette-divider" />{" "}
  //       <Fade bottom>{projectTemplate.map(createProjectCard)}</Fade>
  //       <hr className="featurette-divider" />
  //     </div>
  //   </>
  // );
  return (
    <>
      <div id="projects" className="bg-dark container-fluid">
        <Fade bottom>
          <div className="title text-white">
            <FontAwesomeIcon
              icon={faBriefcase}
              style={{ color: "#FFF" }}
              size="6x"
            />
            <h1>Projects</h1>
          </div>
        </Fade>{" "}
        <hr className="featurette-divider" />{" "}
        <Fade bottom>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading text-light">MonsterWorkout</h2>
              <h6 className="text-muted">
                HTML, CSS, JavaScript, Node.js, Passport.js(User Auth), MongoDB
                Atlas, ejs AWS(elasticbeanstalk, codepipeline)
              </h6>
              <p className="lead text-light">
                MonsterWorkout is the ultimate fitness application.
                MonsterWorkout has a multitude of features. Guests can search
                through over 3,000 workouts that we provide, and create a random
                workout based on their target muscle area or equipment they have
                at hand. Users who are signed up can not only utilize the
                features given to guests, but can also create their own
                workouts, log their personal achievements and goals, add
                workouts to their list of favorite workouts, receive custom
                workout regimens, and more.
              </p>
            </div>
            <div className="col-md-5">
              <a
                className="darken"
                href="http://workoutapp-env.eba-5vn3jgdm.us-east-2.elasticbeanstalk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="100%"
                  height="100%"
                  src={MonsterWorkout}
                  alt="MonsterWorkout"
                />
              </a>
            </div>
          </div>{" "}
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading text-light">jMessage</h2>
              <h6 className="text-muted">
                React, HTML, CSS, JavaScript, Node.js, RestAPIs, AWS, EJS,
              </h6>
              <p className="lead text-light">
                jMessage is a web application that allows you to message your
                friends and stay connected with people that you meet. Each user
                has a unique username and password that allows them to log in
                and chat with their peers. Users can send messages, gifs,
                pictures. Message threads can have unique styles as well. Users
                can change a thread's avatar and chat names, edit the font and
                style of their text, and more.{" "}
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <a
                className="darken"
                href="http://jmessager-env.eba-pimydv3b.us-east-2.elasticbeanstalk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img width="100%" height="100%" src={jmessage} alt="jmessage" />
              </a>
            </div>
          </div>
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7">
              <h2 className="featurette-heading text-light">Santa's List</h2>
              <h6 className="text-muted">
                {" "}
                React.js, HTML, CSS, JavaScript, APIs, AWS
              </h6>
              <p className="lead text-light">
                This react app allows parents to receive Christmas lists, with
                associated Amazon links to each gift, directly from their
                children via email. The user adds to their "Santa List" by
                inputting the name of the gift under “title” and its
                description(optional) where stated. After the user is finished
                with their list, they will put in the desired email address to
                whom they want to send the list to. The email will contain the
                title, description, and amazon link to each gift. This app
                brings a whole new meaning to convenience for parents/guardians
                who want to get a head start on shopping for the Holiday Season.
                Happy Holidays and Enjoy!
              </p>
            </div>
            <div className="col-md-5">
              <a
                className="darken"
                href="https://main.d39ra7xx8jfbvf.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img width="100%" height="100%" src={santa} alt="Santa" />
              </a>
            </div>
          </div>
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading text-light">GameHub</h2>
              <h6 className="text-muted">
                HTML, CSS, JavaScript, Node.js, APIs, AWS
              </h6>
              <p className="lead text-light">
                This web app host 4 games including, a simon game, a drum kit,
                tic tac toe, and dice roller. along with the games, this web
                application has a home page that has view previews to every
                game, links to my github, linked in and other media platforms,
                and a quick description of who I am. GameHub is also connected
                to my MailChimp subscription through an API that allows the user
                to be added to my subscriber list. The subscribers will be
                notified via email of new games that are uploaded to GameHub.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <a
                className="darken"
                href="http://node-env.eba-canptspm.us-east-2.elasticbeanstalk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img
                  className="image"
                  width="100%"
                  height="100%"
                  src={game}
                  alt="game"
                />
              </a>
            </div>
          </div>
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7 order-md-1">
              <h2 className="featurette-heading text-light">cWeather</h2>
              <h6 className="text-muted">
                HTML, CSS, JavaScript, Node.js, APIs, AWS, EJS
              </h6>
              <p className="lead text-light">
                Current Weather App This simple web application gets the city
                and state that the user inputs into the page and sends a request
                to the "openweathermap" API. The API then returns a JSON package
                which holds information about the requested location's weather.
                The information recieved is then parsed and displayed to the
                user. A contact page is also put in place so that the user can
                ask me any questions via email.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <a
                className="darken"
                href="http://cweather-env.eba-m3g3smfu.us-east-2.elasticbeanstalk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img width="100%" height="100%" src={weather} alt="cWeather" />
              </a>
            </div>
          </div>
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading text-light">Time Calculator</h2>
              <h6 className="text-muted "> HTML, CSS, JavaScript</h6>
              <p className="lead text-light">
                Physical, Occupational, and Speech therapist are all required to
                report the time they spent treating their patients. This time
                calculator has a simplistics design so that therapist can use to
                calculate their treatment time with each patient with ease and
                minimum hassle.
              </p>
            </div>
            <div className="col-md-5">
              <a
                className="darken"
                href="https://johnkelly59.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img width="100%" height="100%" src={time} alt="time" />
              </a>
            </div>
          </div>
        </Fade>
        <hr className="featurette-divider" />{" "}
        <Fade bottom>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading text-light">JobLogger</h2>
              <h6 className="text-muted">
                HTML, CSS, JavaScript, Node.js, Passport.js, MySQL,
                AWS(deployment)
              </h6>
              <p className="lead text-light">
                Searching for jobs is hard. Keeping up with all of the jobs you
                have applied for can be even harder. The jobLogger app helps you
                track all of the jobs that you have applied for; along with
                important details about the job. The app takes the client's
                input about their job (company name, title, salary, level of
                interest, etc), saves all of it in a MySQL database, and
                displays it on the home page. The user is able to add comments,
                add job entries to an archive list, delete entries, and more.
                This app also has user authentication so all of your information
                is safe and secured.
              </p>
            </div>
            <div className="col-md-5">
              <a
                className="darken"
                href="http://jobs-env.eba-yydrnnmi.us-east-2.elasticbeanstalk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img width="100%" height="100%" src={job} alt="job" />
              </a>
            </div>
          </div>{" "}
        </Fade>
        <hr className="featurette-divider" />
      </div>
    </>
  );
}
export default Project;

import React from "react";
import time from "../images/time.png";
import santa from "../images/santa.png";
import fight from "../images/fightScenes.png";
import ecorate from "../images/ecorate.png";
import job from "../images/job.png";
import game from "../images/game.png";
import jmessage from "../images/jmessage.png";
import mobileApp from "../images/mobileApp.png";
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
              <h2 className="featurette-heading text-light">Workout Monster</h2>
              <h6 className="text-muted">
                React Native, Expo, JavaScript, Node.js, API, MongoDB, NoSQL,
                AWS(elasticbeanstalk, codepipeline)
              </h6>
              <p className="lead text-light">
                Workout Monster is an app made for the average person who
                gym-goer. With it's simplistic design and feel, this app will
                not only make setting up your workouts easier, but help you keep
                track of your rest time, favorite exercises, workout duration,
                and more! <br /> Key Features: <br />
                -Workout Manager (Keep track of what Set you are on, how much
                rest time you have, and how long you have been working out){" "}
                <br />
                -Randomizer (A page to generate random exercises and workouts
                based on what your target for that day is.) <br />
                -Favorites (Save your favorite exercises so you can never lose
                them) <br />
                -Logging (Jot down some notes or log what you did during your
                workout session and save it to your account.)
                <br />
                -Search (Search through 1000+ exercises to that you might want
                to incorporate into your workout routine) <br />
                Download this free app now and enhance your fitness journey!!!
              </p>
            </div>
            <div style={{ paddingLeft: "10%" }} className="col-md-5">
              <a
                className="darken"
                href="https://apps.apple.com/us/app/workout-monster/id1634358262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="100%"
                  height="100%"
                  src={mobileApp}
                  alt="WorkoutMonster"
                />
              </a>
            </div>
          </div>{" "}
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading text-light">MonsterWorkout</h2>
              <h6 className="text-muted">
                HTML, CSS, JavaScript, Node.js, RapidAPI, Passport.js(User
                Auth), MongoDB Atlas, EJS, AWS(elasticbeanstalk, codepipeline)
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
        <Fade bottom>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading text-light">EcoRate</h2>
              <h6 className="text-muted">
                HTML, CSS, JavaScript, Node.js, React.js/Redux, API, MongoDB
                Atlas, AWS(elasticbeanstalk, codepipeline)
              </h6>
              <p className="lead text-light">
                EcoRate is a web application that allows users to rate different
                locations based on the cleanliness of their surrounding area,
                the access to recycing bin and other recycling opportunities,
                the use of reusable material, the establihments traffic, and the
                amount of flaura surrounding the the area. The goal of this web
                application is to encourage companiws to adapt more substainable
                practices. This app uses Google Maps' API to render the map,
                along with a database to save ratings and retrieve previous
                ratings. the ratings are then rendered on the client side which
                is built with react and redux for state control.
              </p>
            </div>
            <div className="col-md-5">
              <a
                className="darken"
                href="http://ecorate-env.eba-mk2mgked.us-east-2.elasticbeanstalk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="100%"
                  height="100%"
                  src={ecorate}
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
              <h2 className="featurette-heading text-light">FightScenes</h2>
              <h6 className="text-muted">
                React, HTML, CSS, JavaScript, Redux, RestAPIs, AWS, YouTube,
                API,
              </h6>
              <p className="lead text-light">
                I am a huge nerd and I love super hero movies. What makes
                superhero movies so interesting is the action scenes and the
                fight scenes. This website connects to YouTube through Google's
                API to get a playlist of fight scenes that the actor has
                featured in.{" "}
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <a
                className="darken"
                href="https://main.d2mol8r4nevcxg.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img width="100%" height="100%" src={fight} alt="fightScenes" />
              </a>
            </div>
          </div>
        </Fade>
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7 ">
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
            <div className="col-md-7 order-md-2">
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
            <div className="col-md-7">
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
        <hr className="featurette-divider" />
        <Fade bottom>
          <div className="row featurette ">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading text-light">Time Calculator</h2>
              <h6 className="text-muted "> HTML, CSS, JavaScript</h6>
              <p className="lead text-light">
                Physical, Occupational, and Speech therapist are all required to
                report the time they spent treating their patients. This time
                calculator has a simplistic design that therapist can use to
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

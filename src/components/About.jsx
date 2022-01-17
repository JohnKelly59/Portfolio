import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <div id="about" className="container-fluid bg-dark text-white">
      <Fade bottom>
        <div className="title">
          <FontAwesomeIcon icon={faMale} size="6x" />
          <h1>About Me</h1>
        </div>
        <div className="about">
          <h3>
            My name is John Kelly, and I am a full stack developer. I began
            coding during my Senior year of college. One day after football
            practice, my fraternity brother and I had a serious conversation.
            The conversation ended with me realizing that I had a choice of
            either going to graduate school and continuing a profession that I
            was not passionate about or developing a new skill that I have been
            interested in for years. Needless to say, I picked the latter and
            I’m so glad that I did.{" "}
          </h3>
          <br />
          <h3>
            Since I graduated college, I have been learning and programming
            every day. My journey as a programmer began with me pursuing
            Harvard’s CS50x certificate. After completing Harvard’s 11-week
            course, I began and completed the App Brewer’s full-stack web
            development course. Since then, I have continued to learn a lot more
            about web development through the cultivation of various projects
            and applications.
          </h3>
          <br />
          <h3>
            I love to code. My day is not successful until I learn something new
            about programming or implement a new technology into a solution. I
            like to compare programming to playing a video game, Pacman to be
            specific. For example, each day I learn something new or implement a
            new technology, I equate it to the feeling of defeating the ghosts
            and levelling up in the game. That determination and excitement to
            continue to level up by deepening my understanding and perfecting my
            craft really fuels my passion for programming even more. I am eager
            and excited to enhance my knowledge and strive towards becoming the
            best engineer I can be.{" "}
          </h3>
        </div>
      </Fade>
      <br />
    </div>
  );
}
export default About;

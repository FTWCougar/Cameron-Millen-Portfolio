import React, { useEffect, useRef } from "react";
import "./About.css";
import { useIsVisible } from "./useIsVisible";

const About = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        let aboutSkills = Array.from(document.getElementsByTagName("img"));
        let aboutMain = Array.from(document.getElementsByName("about-main"));
        if (isVisible) {
            aboutSkills.forEach((element) => {
                element.classList.add("img-skills");
            });
            aboutMain.forEach((element) => {
              element.classList.add("about-main");
          });
        } else {
            aboutSkills.forEach((element) => {
                element.classList.remove("img-skills");
            });
            aboutMain.forEach((element) => {
              element.classList.remove("about-main");
          });
        }
    }, [isVisible]);

    return (
        <div ref={ref} className="about-container">
            <div className="about-body">
                <div>
                    <div name="about-main" className="about-main">
                        <h1>
                            Cameron Millen <br />A Software Developer
                        </h1>
                        <p>
                            I am a graduate of the Full-Stack Developer course
                            at Flatiron School, a Software Engineering bootcamp
                            where I learned to code in JavaScript as well as
                            Ruby on Rails. I also learned to develop Single Page
                            Applications (SPA) using the React framework. I
                            possess strong skills in team-building and project
                            management that would be valuable for companies that
                            are looking for full-stack developers who can work
                            well in a team and manage projects effectively.
                        </p>
                        <h2>Skills</h2>
                    </div>
                    <div className="about-skills">
                        <img
                            className="img-skills"
                            src="../assets/javascript.png"
                            alt="Javascript"
                        />
                        <img
                            className="img-skills"
                            src="../assets/react.png"
                            alt="React"
                        />
                        <img
                            className="img-skills"
                            src="../assets/html.png"
                            alt="Html"
                        />
                        <img
                            className="img-skills"
                            src="../assets/css.png"
                            alt="CSS"
                        />
                        <img
                            className="img-skills"
                            src="../assets/ruby.png"
                            alt="Ruby"
                        />
                        <img
                            id="rails"
                            className="img-skills"
                            src="../assets/rails.png"
                            alt="Rails"
                        />
                    </div>
                </div>
                <img
                    name="about-main"
                    id="img"
                    className="about-main"
                    src="../assets/Cameron-Millen.jpg"
                    alt="Cameron Millen"
                />
            </div>
        </div>
    );
};

export default About;

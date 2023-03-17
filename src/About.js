import React, { useRef } from "react";
import "./About.css";
import { useIsVisible } from "./useIsVisible";

const About = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    return (
        <div
            ref={ref}
            id={isVisible ? "visible" : ""}
            className="about-container"
        >
            <h2>About Me</h2>
            <div className="about-body">
                <div>
                    <div className="about-main">
                        <h1>
                            Cameron Millen <br/>A Software Developer
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
                            className="img-skills"
                            src="../assets/rails.png"
                            alt="Rails"
                        />
                    </div>
                </div>
                <img id="img" className="about-main" src="../assets/Cameron-Millen.jpg" alt="Cameron Millen" />
            </div>
        </div>
    );
};

export default About;

import React, { useEffect } from "react";
import "./About.css";

const About = () => {
    useEffect(() => {
        let aboutSkills = Array.from(document.getElementsByTagName("img"));
        let aboutMain = Array.from(document.getElementsByName("about-main"));

        aboutSkills.forEach((element) => {
            element.classList.add("img-skills");
        });
        aboutMain.forEach((element) => {
            element.classList.add("about-main");
        });
    });

    return (
        <div className="about-container">
            <div className="about-body">
                <div>
                    <div name="about-main" className="about-main">
                        <h1>
                            Cameron Millen <br />A Software Developer
                        </h1>
                        <p>
                            I am a graduate of the Full-Stack Developer course
                            at{" "}
                            <a
                                href="https://flatironschool.com/"
                                className="about-school"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Flatiron School
                            </a>
                            , a Software Engineering bootcamp where I learned to
                            code in JavaScript as well as Ruby on Rails. I also
                            learned to develop Single Page Applications (SPA)
                            using the React framework. I possess strong skills
                            in team-building and project management that would
                            be valuable for companies that are looking for
                            Full-stack developers who can work well in a team
                            and manage projects effectively.
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
                            src="../assets/typescript.png"
                            alt="Typescript"
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

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
        <div class="about-container">
            <div class="about-body">
                <div>
                    <div name="about-main" class="about-main">
                        <h1 class="threeD">
                            Cameron Millen <br />A Software Developer
                        </h1>
                        <p>
                            I am a graduate of the Full-Stack Developer course
                            at{" "}
                            <a
                                href="https://flatironschool.com/"
                                class="about-school"
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
                            <br />
                            <br />
                            Throughout my life I have been influenced by many
                            people in the field. I've really enjoyed getting to
                            follow my dad in his work and even take software
                            classes throughout my middle school and high school
                            years. I guess what made me lean into software was
                            my family most of them are in the software field so
                            I get to learn a lot from them. They have challenged
                            me and thats what I like about it.
                        </p>
                        <h2>Skills</h2>
                    </div>
                    <div class="about-skills">
                        <img
                            class="img-skills"
                            src="../assets/javascript.png"
                            alt="Javascript"
                        />
                        <img
                            class="img-skills"
                            src="../assets/html.png"
                            alt="Html"
                        />
                        <img
                            class="img-skills"
                            src="../assets/css.png"
                            alt="CSS"
                        />
                        <img
                            class="img-skills"
                            src="../assets/react.png"
                            alt="React"
                        />
                        <img
                            class="img-skills"
                            src="../assets/typescript.png"
                            alt="Typescript"
                        />
                        <img
                            class="img-skills"
                            src="../assets/ruby.png"
                            alt="Ruby"
                        />
                        <img
                            id="rails"
                            class="img-skills"
                            src="../assets/rails.png"
                            alt="Rails"
                        />
                    </div>
                </div>
                <img
                    name="about-main"
                    id="img"
                    class="about-main"
                    src="../assets/Cameron-Millen.jpg"
                    alt="Cameron Millen"
                />
            </div>
        </div>
    );
};

export default About;

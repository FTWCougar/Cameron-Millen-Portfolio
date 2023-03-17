import React from "react";
import "./About.css";

const About = () => {
    return (
        <div id="Home" className="about-container">
            <h2>About Me</h2>
            <div className="about-body">
                <div>
                    <h1>Cameron Millen <br/>A Software Developer</h1>
                    <p>
                        I am a graduate of the Full-Stack Developer course at
                        Flatiron School, a Software Engineering bootcamp where I
                        learned to code in JavaScript as well as Ruby on Rails.
                        I also learned to develop Single Page Applications (SPA)
                        using the React framework. I possess strong skills in
                        team-building and project management that would be
                        valuable for companies that are looking for full-stack
                        developers who can work well in a team and manage
                        projects effectively.
                    </p>
                    <div>Skills</div>
                </div>
                <img src="../assets/Cameron-Millen.jpg" alt="Cameron Millen" />
            </div>
        </div>
    );
};

export default About;

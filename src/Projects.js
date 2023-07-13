import React, { useEffect } from "react";
import "./Projects.css";

const Projects = () => {
    useEffect(() => {
        const projectsContainer = document.querySelector(".projects-container");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        });

        observer.observe(projectsContainer);

        return () => {
            observer.unobserve(projectsContainer);
        };
    }, []);
    return (
        <div id="Projects">
            <div className="projects-container">
                <h2>Technical Projects</h2>
                <ul>
                    <li>
                        <div className="project-title">
                            <a
                                href="https://github.com/FTWCougar/YouBlog"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                YouBlog
                            </a>
                        </div>
                        <div className="project-video">
                            <iframe
                                display="flex"
                                justify-content="center"
                                width="95%"
                                height="350"
                                src="https://www.youtube.com/embed/8BW_wOaSTm8"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="project-description">
                            <h3>
                                A web page inspired by dev.to coded in React and
                                Ruby
                            </h3>
                            <p>
                                Built a personal blog website using Ruby on
                                Rails for the backend, JavaScript and React for
                                the frontend, and vanilla CSS for styling.
                            </p>
                            <p>
                                Implemented features such as user authentication
                                using Bcrypt and a commenting system to enhance
                                user engagement.
                            </p>
                            <p>
                                Utilized responses from the server to determine
                                the user's location on the webpage and ensure a
                                smooth navigation experience.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="project-title">
                            <a
                                href="https://github.com/FTWCougar/InstaFame"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                InstaFame
                            </a>
                        </div>
                        <div className="project-video">
                            <iframe
                                width="831"
                                height="467"
                                src="https://www.youtube.com/embed/8Y3r1N3mrYU"
                                title="InstaFame Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="project-description">
                            <h3>
                                A web page inspired by instagram coded in React
                                and Ruby
                            </h3>
                            <p>
                                Developed a single page image sharing
                                application that allows users to upload and
                                comment on images.
                            </p>
                            <p>
                                Utilized Ruby and Sinatra to create a backend
                                that stores objects and manages user
                                authentication.
                            </p>
                            <p>
                                Implemented a join table between users and
                                images to allow for easy management of
                                user-generated content.
                            </p>
                            <p>
                                Used Sinatra to handle requests from the
                                frontend and ensure seamless communication
                                between the client and server.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="project-title">
                            <a
                                href="https://github.com/FTWCougar/semi-addicting-games"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Semi-Addicting Games
                            </a>
                        </div>
                        <div className="project-description">
                            <a
                                href="https://semi-addicting-games.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="project-img"
                                    src="../assets/Semi-Addicting-Games.png"
                                    alt="Semi-Addicting Games"
                                />
                            </a>
                            <h3>
                                A Web Page using React that allows users to play
                                tic tac toe and hangman
                            </h3>
                            <p>
                                Built a single page game application using React
                                and a basic JSON backend.
                            </p>
                            <p>
                                Implemented a frontend using Styled-Components
                                for styling, React-Router-Dom for client-side
                                routing, and Framer-Motion for animation.
                            </p>
                            <p>
                                Developed an application that allows users to
                                play multiple games with a smooth and
                                interactive interface.
                            </p>
                            <p>
                                Utilized JSON to store and retrieve game data
                                and handle user interactions.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;

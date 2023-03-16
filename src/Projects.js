import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Technical Projects</h2>
      <ul>
        <li>
          <div className="project-title">
            <a href="https://github.com/FTWCougar/YouBlog" target="_blank" rel="noopener noreferrer">YouBlog</a>
          </div>
          <div className="project-description">
            <img className="project-img" src='../assets/YouBlog.png' alt='YouBlog'/>
            <p>A web page inspired by dev.to coded in React and Ruby</p>
            <p>Built a personal blog website using Ruby on Rails for the backend, JavaScript and React for the frontend, and vanilla CSS for styling.</p>
            <p>Implemented features such as user authentication using Bcrypt and a commenting system to enhance user engagement.</p>
            <p>Utilized responses from the server to determine the user's location on the webpage and ensure a smooth navigation experience.</p>
          </div>
        </li>
        <li>
          <div className="project-title">
            <a href="https://github.com/FTWCougar/InstaFame" target="_blank" rel="noopener noreferrer">InstaFame</a>
          </div>
          <div className="project-description">
            <img className="project-img"  src='' alt='InstaFame'/>
            <p>A web page inspired by instagram coded in React and Ruby</p>
            <p>Developed a single page image sharing application that allows users to upload and comment on images.</p>
            <p>Utilized Ruby and Sinatra to create a backend that stores objects and manages user authentication.</p>
            <p>Implemented a join table between users and images to allow for easy management of user-generated content.</p>
            <p>Used Sinatra to handle requests from the frontend and ensure seamless communication between the client and server.</p>
          </div>
        </li>
        <li>
          <div className="project-title">
            <a href="https://github.com/FTWCougar/semi-addicting-games" target="_blank" rel="noopener noreferrer">Semi-Addicting Games</a>
          </div>
          <div className="project-description">
            <img className="project-img" src='' alt='Semi-Addicting Games'/>
            <p>A Web Page using React that allows users to play tic tac toe and hangman</p>
            <p>Built a single page game application using React and a basic JSON backend.</p>
            <p>Implemented a frontend using Styled-Components for styling, React-Router-Dom for client-side routing, and Framer-Motion for animation.</p>
            <p>Developed an application that allows users to play multiple games with a smooth and interactive interface.</p>
            <p>Utilized JSON to store and retrieve game data and handle user interactions.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Educatiom">Education</a></li>
        </ul>
      </nav>
      <div className="header-details">
        <ul>
          <li><a href='https://goo.gl/maps/P7a7UhE47pvPLAdm9'>Yelm, WA</a></li>
          <li><a href='tel:206-578-6741'>206-578-6741</a></li>
          <li><a href="mailto:cameron@dansclan.com">cameron@dansclan.com</a></li>
          <li><a href="https://www.linkedin.com/in/cameron-millen/">Linkedin</a></li>
          <li><a href="https://github.com/FTWCougar">Github</a></li>
          <li><a href="https://dev.to/ftwcougar">Blog</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

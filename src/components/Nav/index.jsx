import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import avatar from '../../images/IMG_1466.jpg';

Nav.propTypes = {};

function Nav(props) {
  return (
    <nav>
      <div className="main">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <ul className="nav-links">
          <NavLink
            activeStyle={{ color: 'white' }}
            to="/portfolio/about"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: 'white' }}
            to="/portfolio/education"
          >
            <li>Education</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: 'white' }}
            to="/portfolio/skills"
          >
            <li>Skills</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: 'white' }}
            to="/portfolio/interests"
          >
            <li>Interests</li>
          </NavLink>
          <NavLink
            activeStyle={{ color: 'white' }}
            to="/portfolio/projects"
          >
            <li>Projects</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

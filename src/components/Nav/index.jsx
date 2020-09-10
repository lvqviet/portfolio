import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/education">
            <li>Education</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/interests">
            <li>Interests</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

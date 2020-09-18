import React from 'react';
// import PropTypes from 'prop-types';
import './skill.css';

Skill.propTypes = {};

function Skill(props) {
  return (
    <div className="skill">
      <h2>Skills</h2>
      <div className="subheading">Programming languages & tools</div>
      <div className="container">
        <ul>
          <li className="c">C/C++</li>
          <li className="js">Javascript</li>
          <li className="html">Html5</li>
          <li className="css">Css</li>
          <li className="react">React</li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;

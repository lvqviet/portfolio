import React from 'react';
// import PropTypes from 'prop-types';
import './skill.css';

Skill.propTypes = {};

function Skill(props) {
  return (
    <div className="skill">
      <h2>Skills</h2>
      <div className="subheading">Programming languages & tools</div>
      <div className="skill-items">
        <ul>
          <li>C/C++</li>
          <li>Javascript</li>
          <li>Html5</li>
          <li>Css</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;

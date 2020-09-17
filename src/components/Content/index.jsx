import React from 'react';
// import PropTypes from 'prop-types';
import About from './About';
import Education from './Education';
import Skill from './Skill';
import Interest from './Interests';
import Project from './Project';
import './content.css';

Content.propTypes = {};

function Content(props) {
  return (
    <div className="content">
      <About />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Skill />
      <hr className="m-0" />
      <Interest />
      <hr className="m-0" />
      <Project />
    </div>
  );
}

export default Content;

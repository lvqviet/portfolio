import React from 'react';
// import PropTypes from 'prop-types';
import './education.css';

Education.propTypes = {};

function Education(props) {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="resume-item">
        <div className="resume-content">
          <h3>Học viện công nghệ bưu chính viễn thông</h3>
          <div className="major">ngành công nghệ thông tin</div>
        </div>
        <div className="resume-date">
          <span>September 2018 - Present</span>
        </div>
      </div>
    </div>
  );
}

export default Education;

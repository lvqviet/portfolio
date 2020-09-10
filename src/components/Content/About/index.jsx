import React from 'react';
import iconFb from '../../../images/logoFacebook.svg';
// import PropTypes from 'prop-types';
import './about.css';

About.propTypes = {};

function About(props) {
  return (
    <div className="about">
      <h1>
        Lê Văn <span>Quốc Việt</span>
      </h1>
      <div className="contact">
        +84-0966191652 ·
        <a href="mailto:name@gmail.com">lequocvietptit@gmail.com</a>
      </div>
      <p>
        I am an opensource contributor and have contributed to Zulip,
        Hasura, Fossasia, Publiclab and many other projects. My tech
        stack includes Python and Javascript. Python for server side
        and scripting and Javascript for the frontend. I use Django
        framework for the server side development and React for the
        frontend development. I have also worked with GraphQL. I am a
        GitHub Campus Expert at my insititute where I am responsible
        for building on campus community. I am the lead organiser of
        Hack In The North Hackathon and the cofounder of Pragma
        Conference held at IIIT Allahabad.
      </p>
      <div className="social-icon">
        <img src={iconFb} alt="facebook" />
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import About from './components/Content/About';
import Education from './components/Content/Education';
import Skill from './components/Content/Skill';
import Nav from './components/Nav';
import Project from './components/Content/Project';
import Interest from './components/Content/Interests';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <div className="content">
          <About />
          <Education />
          <Skill />
          <Project />
        </div> */}

        <Switch>
          <Redirect
            exact
            from="/"
            to="/portfolio"
            component={Content}
          />
          <Route exact path="/portfolio" component={Content} />
          <Route path="/portfolio/about" component={About} />
          <Route path="/portfolio/education" component={Education} />
          <Route path="/portfolio/skills" component={Skill} />
          <Route path="/portfolio/interests" component={Interest} />
          <Route path="/portfolio/projects" component={Project} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Here's all the imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../CSS/App.css';
import AboutMe from './AboutMe';
import Footer from './Footer';
import HobbiesInterests from './HobbiesInterests';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import WorkHistory from './WorkHistory';

// Here's a shout-out to Todd K for inspiring me to look further into using React router-dom.

function App() {
  //In the return statement, react-router-dom is used to navigate through the app
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/hobbiesInterests" component={HobbiesInterests} />
          <Route path="/projects" component={Projects} />
          <Route path="/workHistory" component={WorkHistory} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
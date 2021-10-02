import React from 'react';
import './App.css';
import { UnityPlayer } from './components/unity/UnityPlayer';
import { Resume } from './components/resume/Resume';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const projectsView = () => (
    <UnityPlayer projectName="rabbit" isVisible />
  );


  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/" component={projectsView}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { UnityPlayer } from './components/unity/UnityPlayer';
import { Resume } from './components/resume/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const projectsView = () => (
    <UnityPlayer projectName="rabbit" isVisible />
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL +'/resume'} component={Resume}/>
          <Route exact path={process.env.PUBLIC_URL +'/'} component={projectsView}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

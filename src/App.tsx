import React, { useState } from 'react';
import './App.css';
import { Portafolio } from './components/portafolio/Portafolio';
import { Resume } from './components/resume/Resume';
import { NavBar } from './components/navigation/NavBar';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const activateTab = (tab: String) => {setActiveTab(tab.toString())}
  const resume = () => (
    <Resume activateTab={activateTab} />
  );

  const portafolio = () => (
    <Portafolio activateTab={activateTab} />
  );

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar activeTab={activeTab} />
        <Switch>
          <Route exact path="/resume" component={resume}/>
          <Route exact path="/" component={portafolio}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

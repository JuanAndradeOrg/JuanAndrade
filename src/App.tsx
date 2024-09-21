import React from 'react';
import './App.css';
import { Resume } from './components/resume/Resume';
import { NavBar } from './components/navigation/NavBar';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { UnityPlayer } from './components/unity/UnityPlayer';

export enum PageNames {
  RESUME = "Resume",
  GIFT = "Gift",
  JOURNEY_TO_LIGHT = "JourneyToLight"
}

export const PagePathMapping: Record<PageNames, string> = {
  [PageNames.RESUME] : "/",
  [PageNames.GIFT] : "/gift",
  [PageNames.JOURNEY_TO_LIGHT] : "/journey-to-light",
};

const ResumePage = () => (
  <div className="floating-resume">
    <Resume />
  </div>
);

const JourneyToLightPage = () => (
  <UnityPlayer projectName="journey" isVisible />
);

const GiftPage = () => (
  <UnityPlayer projectName="rabbit" isVisible />
);

const PageWithNavBar = (pageName: PageNames, PageComponent: React.ComponentType) => {
  return (props: any) => (
      <>
        <NavBar activePageName={pageName} />
        <PageComponent {...props} />
      </>
    )
}

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={PagePathMapping[PageNames.RESUME]} component={PageWithNavBar(PageNames.RESUME, ResumePage)}/>
          <Route exact path={PagePathMapping[PageNames.JOURNEY_TO_LIGHT]} component={PageWithNavBar(PageNames.JOURNEY_TO_LIGHT, JourneyToLightPage)}/>
          <Route exact path={PagePathMapping[PageNames.GIFT]} component={PageWithNavBar(PageNames.GIFT, GiftPage)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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
    <Resume />
);

const JourneyToLightPage = () => (
  <UnityPlayer projectName="journey" />
);

const GiftPage = () => (
  <UnityPlayer projectName="rabbit" />
);

const PageWithNavBar = (pageName: PageNames, PageComponent: React.ComponentType) => {
  return (props: any) => (
      <>
        <NavBar activePageName={pageName} />
        <div className="page-content">
          <PageComponent {...props}/>
        </div>
      </>
    )
}

const ResumePageWithNav = PageWithNavBar(PageNames.RESUME, ResumePage);
const JourneyToLightPageWithNav = PageWithNavBar(PageNames.JOURNEY_TO_LIGHT, JourneyToLightPage);
const GiftPageWithNav = PageWithNavBar(PageNames.GIFT, GiftPage);

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={PagePathMapping[PageNames.RESUME]} component={ResumePageWithNav}/>
          <Route exact path={PagePathMapping[PageNames.JOURNEY_TO_LIGHT]} component={JourneyToLightPageWithNav}/>
          <Route exact path={PagePathMapping[PageNames.GIFT]} component={GiftPageWithNav}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
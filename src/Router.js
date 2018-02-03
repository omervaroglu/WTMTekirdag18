import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import EventCalender from './Components/EventCalender';
import Home from './Components/Home';
import Speakers from './Components/Speakers';
import Sponsors from './Components/Sponsors';

const RouterComponent = () => {
  return (
   <Router >
    <Scene key="menu" >
      <Scene
      key="HomeScreen"
      component={Home}
      hideNavBar
      initial
      />
      <Scene
      key="CalenderScreen"
      component={EventCalender}
      />
      <Scene
      key="SpeakersScreen"
      component={Speakers}
      />
      <Scene
      key="SponsorsScreen"
      component={Sponsors}
      />
    </Scene>
   </Router>
  );
};

export default RouterComponent;

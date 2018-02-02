import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './Components/Home';
import EventCalender from './Components/EventCalender';

const RouterComponent = () => {
  return (
   <Router sceneStyle={{ marginTop: 50 }}>
    <Scene key="menu" >
      <Scene
      key="CalenderScreen"
      component={EventCalender}
      title="Etkinlik Takvimi"
      />
   </Router>
  );
};

export default RouterCmponent;

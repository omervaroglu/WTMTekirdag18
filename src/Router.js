import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import homeScreen from './Main';
import eventCalender from './Screens/EventCalender';
import speakers from './Screens/Speakers';
import sponsors from './Screens/Sponsors';
import team from './Screens/Team';

const RouterComponent = () => {
  return (
   <Router>
    <Scene key='menu'>
      <Scene
      component={homeScreen}
      key='HomeScreen'
      hideNavBar
      />
      <Scene
      key="CalenderScreen"
      component={eventCalender}
      hideNavBar
      />
      <Scene
      key="SpeakersScreen"
      component={speakers}
      hideNavBar
      />
      <Scene
      key="SponsorsScreen"
      component={sponsors}
      hideNavBar
      />
      <Scene
      key="TeamScreen"
      component={team}
      hideNavBar
      />
    </Scene>
   </Router>
  );
};

export default RouterComponent;

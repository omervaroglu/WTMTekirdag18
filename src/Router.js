import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './Components/Home';
import EventCalender from './Components/EventCalender';
import SideBar from './Drawer';

const RouterCmponent = () => {
  return (
   <Router sceneStyle={{ marginTop: 50 }}>
    <Scene key="Home" >
      <Scene
      onLeft={() => Actions.Drawer()}
      leftTitle="Menü"
      //leftButtonImage=require('./Components/img/menu_burger.png'),
      key="HomeScreen"
      component={Home}
      title="#WTMTek18'"
      initial
      />
      <Scene
      key="Drawer"
      component={SideBar}
      title="Drawer"
      />
    </Scene>
    <Scene key="menü">
      <Scene
      key="CalenderScreen"
      component={EventCalender}
      title="Etkinlik Takvimi"
      />
    </Scene>
   </Router>
  );
};

export default RouterCmponent;

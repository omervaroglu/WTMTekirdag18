import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Drawer from 'react-native-drawer';
import SideBarContent from './Components/SideBarContent';


class SideBar extends Component {

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 3 },
          };

        return (
            <Drawer
                type="static"
                content={<SideBarContent />}
                styles={drawerStyles}
                drawerWidth={150}
                openDrawerOffset={0.2}
                closedDrawerOffset={-3}
                tweenHandler={Drawer.tweenPresets.parallax}
            >
                <View><Text> </Text></View>
            </Drawer>
        );
    }
}
export default SideBar;

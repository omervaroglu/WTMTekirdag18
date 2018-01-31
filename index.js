import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Home from './src/Components/Home';
import SideBarContent from './src/Components/SideBarContent';
import Header from './src/common/Header';

class index extends Component {
  constructor(props) {
    super(props);
          this.state = {
              isOpen: false,
          };
        }
  toggle() {
          this.setState({
            isOpen: !this.state.isOpen
               });
           }
 updateMenu(isOpen) {
         this.setState({ isOpen });
         }

  render() {
   return (
      <SideMenu
      menu={<SideBarContent />}
      isOpen={this.state.isOpen}
      onchanged={(isopen) => this.updateMenu(isOpen)}
      >
    <View style={{ flex: 1 }}>
     <Header headerText="#WTMTek18'" toggle={this.toggle.bind(this)} />
     <Home />
    </View>
    </SideMenu>
  );
}
}


AppRegistry.registerComponent('WTM_18', () => index);

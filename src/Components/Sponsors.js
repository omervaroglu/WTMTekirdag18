import React, { Component } from 'react';
import { View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../common/Header';
import SideBarContent from './SideBarContent';

class Sponsors extends Component {
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
       onchanged={(isOpen) => this.updateMenu(isOpen)}//ikinci kez tıklandığında açma işlemi yapmıyor.Düzelt.
       disableGestures={true}//parmak kaydırma haraketiyle açılmaya kapalı
       >
       <View style={{ flex: 1, backgroundColor: '#fff' }}>
       <Header headerText="Sponsorlar" toggle={this.toggle.bind(this)} />
       </View>
       </SideMenu>
   );
 }
 }

export default Sponsors;

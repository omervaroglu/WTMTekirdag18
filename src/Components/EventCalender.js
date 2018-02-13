import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../common/Header';
import SideBarContent from './SideBarContent';

class EventCalender extends Component {

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
       onChange={(isOpen) => this.updateMenu(isOpen)}
       disableGestures={true}
       >
       <View style={{ flex: 1, backgroundColor: '#fff' }}>
       <Header headerText="Etkinlik Takvimi" toggle={this.toggle.bind(this)}ß />
       <Text >Henüz bir takvimimiz yok. Olur olmaz size haber vereceğiz.</Text>
       </View>
       </SideMenu>
   );
 }
 }
// text e güzel bir style ekle
export default EventCalender;

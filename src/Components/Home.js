import React, { Component } from 'react';
import { View, Image } from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import SideMenu from 'react-native-side-menu';
import SideBarContent from './SideBarContent';
import Button from '../common/Button';
import Header from '../common/Header';


class Home extends Component {
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


  handleGetDirections = () => {
    const data = {
      //  source: {
      //   latitude: null,
      //   longitude: null
      // },
      destination: {
        latitude: 41.182517,
        longitude: 27.817833
      },
      params: [
        {
          key: 'dirflg',
          value: 'w'
        }
      ]
    };

    getDirections(data);
  }
  render() {
  return (
    <SideMenu
    menu={<SideBarContent />}
    isOpen={this.state.isOpen}
    onchanged={(isopen) => this.updateMenu(isOpen)}//ikinci kez tıklandığında açma işlemi yapmıyor.Düzelt.
    disableGestures={true}//parmak kaydırma haraketiyle açılmaya kapalı
    >
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
     <Header headerText="#WTMTek18'" toggle={this.toggle.bind(this)} />
     <View>
     {/* eslint-disable-line global-require */}
     <Image
         style={{ width: 'auto', height: 250 }}
         source={require('../img/afis1.png')}
     />
     {/* eslint-enable global-require */}
     </View>
     <View>
      <Button> Hemen Bilet Al </Button>
     </View>
     <View>
      <Button onPress={this.handleGetDirections}> Konuma Bak </Button>
     </View>
     <View>
      <Button> Takvime Ekle </Button>
     </View>
    </View>
    </SideMenu>
  );
}
}
export default Home;

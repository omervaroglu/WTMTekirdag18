import React, { Component } from 'react';
import { View, Image } from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import Button from '../common/Button';


class Home extends Component {

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
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
  );
}
}
export default Home;

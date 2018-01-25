import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Button from '../common/Button';


class Home extends Component {
  render() {
  return (
    <View style={{ flex: 1 }}>
     <View>
     {/* eslint-disable-line global-require */}
     <Image
         style={{ width: 400, height: 250 }}
         source={require('../img/wtm.png')}
     />
     {/* eslint-enable global-require */}
     </View>
     <View>
       <Button> Hemen Bilet Al </Button>
     </View>
    </View>
  );
}
}
export default Home;

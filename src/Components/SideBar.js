import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideButton from '../common/SideButton';


class SideBar extends Component {
    render() {
    const { viewStyle, imageView } = styles;
    return (
      <View style={viewStyle}>
        <View style={{ marginTop: 10 }}>
          <View>
          <Image
              style={{ width: 'auto', height: 175 }}
              source={require('../img/afis1.png')}
          />
          </View>
            <SideButton
            onPress={() => Actions.CalenderScreen()}
            >
              Etkinlik Takvimi
            </SideButton>
            <SideButton
            onPress={() => Actions.SpeakersScreen()}
            >
              Konuşmacılar
            </SideButton>
            <SideButton
            onPress={() => Actions.SponsorsScreen()}
            >
              Sponsorlar
            </SideButton>
            <SideButton
            onPress={() => Actions.TeamScreen()}
            >
              Takım
            </SideButton>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', position: 'absolute', bottom: 30 }}>
              <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: '300' }}> Powered By GDG Tekirdağ </Text>
            </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    borderEndColor: '#019879',
    borderWidth: 0.5,
    borderLeftWidth: 1,
    borderRightColor: '#019879',
    height: Dimensions.get('window').height,
  },
};

export default SideBar;

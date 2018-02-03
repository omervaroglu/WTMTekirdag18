import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SideButton from '../common/SideButton';


class SideBarContent extends Component {

      render() {
        return (
            <View style={{ backgroundColor: '#ffffff' }} >
              <View>
              {/* eslint-disable-line global-require */}
              <Image
                  style={{ width: 'auto', height: 175 }}
                  source={require('../img/afis1.png')}
              />
              {/* eslint-enable global-require */}
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
            </View>
        );
    }
}

export default SideBarContent;

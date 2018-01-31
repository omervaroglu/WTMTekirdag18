import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SideButton from '../common/SideButton';
import EventCalender from './EventCalender';


class SideBarContent extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }} >
              <View>
              {/* eslint-disable-line global-require */}
              <Image
                  style={{ width: 'auto', height: 175 }}
                  source={require('../img/afis1.png')}
              />
              {/* eslint-enable global-require */}
              </View>
                <SideButton onPress={() => EventCalender()} >Etkinlik Takvimi</SideButton>
                <SideButton>Konuşmacılar</SideButton>
                <SideButton>Sposorlar</SideButton>
            </View>

        );
    }
}

export default SideBarContent;

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SideButton from '../common/SideButton';
import EventCalender from './EventCalender';


class SideBarContent extends Component {

      render() {
        const { navigate } = this.props.navigation;
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
                onPress={() => this.props.navigation.navigate('EventCalender')}
                >
                Etkinlik Takvimi
                </SideButton>
                <SideButton>Konuşmacılar</SideButton>
                <SideButton>Sposorlar</SideButton>
            </View>
        );
    }
}
// burda SideMenu kısmındaki componentleri yönlendirmek için React-navigation kullandım ama olmadı.
const AppRouter = StackNavigator({
  SideBarContent: { screen: SideBarContent },
  EventCalender: { screen: EventCalender },
});

export default AppRouter;

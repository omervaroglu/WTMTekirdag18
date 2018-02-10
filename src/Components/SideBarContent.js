import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SideButton from '../common/SideButton';


class SideBarContent extends Component {

      render() {
        const { viewStyle, imageView } = styles;
        return (
            <View style={viewStyle} >
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

                <View style={imageView}>
                {/* eslint-disable-line global-require */}
                <Image
                    style={{ width: 'auto', height: 70, }}
                    source={require('../img/gdg.jpg')}
                />
                {/* eslint-enable global-require */}
                </View>
            </View>
        );
    }
}

const styles = {
  viewStyle: {
    backgroundColor: '#ffffff',
    borderEndColor: '#019879',
    borderWidth: 0.5,
    borderLeftWidth: 1,
    borderRightColor: '#019879',
  },
  imageView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
};

export default SideBarContent;

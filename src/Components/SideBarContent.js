import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SideButton from '../common/SideButton';


class SideBarContent extends Component {

      render() {
        const { viewStyle, imageView } = styles;
        return (

            <View style={viewStyle} >
            <View>
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
                <View style={imageView}>
                {/* eslint-disable-line global-require */}
                <Image
                    style={{ width: 'auto', height: 'auto', justifyContent: 'flex-end', }}
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
    backgroundColor: '#fff',
    borderEndColor: '#019879',
    borderWidth: 0.5,
    borderLeftWidth: 1,
    borderRightColor: '#019879',
    height: Dimensions.get('window').height,
  },
  imageView: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 10,
    width: 'auto',
    height: 'auto',
    right: 0,
    backgroundColor: 'white',
    //height: Dimensions.get('window').height/2 ,
  }
};

export default SideBarContent;

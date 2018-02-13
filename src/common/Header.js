import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  if (props.headerText !== "#WTMTek18'") {
    return (
      <View style={viewStyle}>
      <View style={{ width: 25, height: 25, position: 'absolute', left: 10 }}>
      <TouchableOpacity onPress={() => props.toggle()} >
      {/* eslint-disable-line global-require */}
      <Image
          style={{ width: 25, height: 25 }}
          source={require('../img/menu.png')}
      />
      {/* eslint-enable global-require */}
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => Actions.HomeScreen()} >
      <Text style={textStyle} > {props.headerText} </Text>
      </TouchableOpacity>
      <View style={{ width: 25, height: 25, position: 'absolute', right: 10 }}>
      <TouchableOpacity>
      {/* eslint-disable-line global-require */}
      <Image
          style={{ width: 25, height: 25 }}
          source={require('../img/twitter.png')}
      />
      {/* eslint-enable global-require */}
      </TouchableOpacity>
      </View>
      </View>
    );
  } else {
    return (
      <View style={viewStyle}>
      <View style={{ width: 25, height: 25, position: 'absolute', left: 10 }}>
      <TouchableOpacity onPress={() => props.toggle()} >
      {/* eslint-disable-line global-require */}
      <Image
          style={{ width: 25, height: 25 }}
          source={require('../img/menu.png')}
      />
      {/* eslint-enable global-require */}
      </TouchableOpacity>
      </View>
      <Text style={textStyle} > {props.headerText} </Text>
      <View style={{ width: 25, height: 25, position: 'absolute', right: 10 }}>
      <TouchableOpacity>
      {/* eslint-disable-line global-require */}
      <Image
          style={{ width: 25, height: 25 }}
          source={require('../img/twitter.png')}
      />
      {/* eslint-enable global-require */}
      </TouchableOpacity>
      </View>
      </View>
    );
  }

};
const styles = {
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
  viewStyle: {
    backgroundColor: '#019879',
    width: Dimensions.get('window').width,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  //  padding: 10,
  alignSelf: 'center',
  }
};


export default Header;

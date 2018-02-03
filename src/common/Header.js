import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <TouchableOpacity onPress={() => props.toggle()} >
    {/* eslint-disable-line global-require */}
    <Image
        style={{ width: 25, height: 25 }}
        source={require('../img/menu.png')}
    />
    {/* eslint-enable global-require */}
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Actions.HomeScreen()} >
    <Text style={textStyle} > {props.headerText} </Text>
    </TouchableOpacity>
    <TouchableOpacity>
    {/* eslint-disable-line global-require */}
    <Image
        style={{ width: 25, height: 25 }}
        source={require('../img/twitter.png')}
    />
    {/* eslint-enable global-require */}
    </TouchableOpacity>
    </View>
  );
};
const styles = {
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
  viewStyle: {
    backgroundColor: '#019879',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }
};


export default Header;

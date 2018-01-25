import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
//import Icon from 'react-native-vector-icons';
//import Drawer from '../Drawer';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <TouchableWithoutFeedback onPress={() => props.toggle()} >
    {/* eslint-disable-line global-require */}
    <Image
        style={{ width: 25, height: 25 }}
        source={require('../img/menu.png')}
    />
    {/* eslint-enable global-require */}
    </TouchableWithoutFeedback>
    <Text style={textStyle} > {props.headerText} </Text>
    <TouchableWithoutFeedback onPress={() => console.log('tık')} >
    {/* eslint-disable-line global-require */}
    <Image
        style={{ width: 25, height: 25 }}
        source={require('../img/twitter.png')}
    />
    {/* eslint-enable global-require */}
    </TouchableWithoutFeedback>
    </View>
  );
};
const styles = {
  textStyle: {
    fontSize: 25,
    color: 'white',
  },
  viewStyle: {
    backgroundColor: '#A2A2A2',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
};


export default Header;

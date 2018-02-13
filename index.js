import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import Router from './src/Router';

class index extends Component {

  render() {
   return (
    <View style={{ flex: 1 }}>
          <Router />
    </View>
  );
}
}

AppRegistry.registerComponent('WTM_18', () => index);

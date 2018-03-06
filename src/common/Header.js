import React, { Component } from 'react';
import { Text, View, Image, Alert, Linking, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { shareOnTwitter } from 'react-native-social-share';

class Header extends Component {
  twitter() {
    shareOnTwitter({
      'text': "#IWD18' @WTMTekirdag",
      'link' : 'https://www.gdgtekirdag.org/',
      'imagelink' : 'https://pbs.twimg.com/profile_images/811589966820179968/GZig6BH6_400x400.jpg',
      },
      (results) => {
        Linking.openURL('https://twitter.com/WTMTekirdag');
      }
    );
  }
  render(props) {
    const { textStyle, viewStyle } = styles;
    if (this.props.headerText !== "#IWD18'") {
      return (
        <View style={viewStyle}>
        <StatusBar
           backgroundColor="#017c62"
           barStyle="light-content"
         />
        <View style={{ width: 25, height: 25, position: 'absolute', left: 10, bottom: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.props.toggle()} >
          {/* eslint-disable-line global-require */}
          <Image
              style={{ width: 25, height: 25 }}
              source={require('../img/menu.png')}
          />
          {/* eslint-enable global-require */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.HomeScreen({ panHandlers: null })}
          style={{ marginLeft: 5 }}
          >
          {/* eslint-disable-line global-require */}
          <Image
              style={{ width: 25, height: 25 }}
              source={require('../img/homepage.png')}
          />
          {/* eslint-enable global-require */}
          </TouchableOpacity>
        </View>
        </View>
        <Text style={textStyle} > {this.props.headerText} </Text>
        <View style={{ width: 25, height: 25, position: 'absolute', right: 10, bottom: 10 }}>
        <TouchableOpacity onPress={this.twitter.bind(this)}>
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
        <StatusBar
           backgroundColor="#017c62"
           barStyle="light-content"
         />
        <View style={{ width: 25, height: 25, position: 'absolute', left: 10, bottom: 10 }}>
        <TouchableOpacity onPress={() => this.props.toggle()} >
        {/* eslint-disable-line global-require */}
        <Image
            style={{ width: 25, height: 25 }}
            source={require('../img/menu.png')}
        />
        {/* eslint-enable global-require */}
        </TouchableOpacity>
        </View>
        <Text style={textStyle} > {this.props.headerText} </Text>
        <View style={{ width: 25, height: 25, position: 'absolute', right: 10, bottom: 10 }}>
        <TouchableOpacity onPress={this.twitter.bind(this)}>
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
  }
}

const styles = {
  textStyle: {
    fontSize: 25,
    color: 'white',
    position: 'absolute',
    bottom: 10
  },
  viewStyle: {
    paddingTop: 10,
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

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EventCalender extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.name,
});

   render() {
     const { goBack } = this.props.navigation;
     return (
    <View>
     <Button
      title="Go back"
      onPress={() => goBack()}
     />
     <Text>ETKİNLİK TAKVİMİ</Text>
     </View>
   );
 }
 }

export default EventCalender;

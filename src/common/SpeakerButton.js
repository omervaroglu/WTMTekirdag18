import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';


const SpeakerButton = ({ children, onPress, teamImage }) => {
  const { buttonStyle, textStyle, imageStyle } = styles;
  return (
    <View style={{ marginTop: 5 }}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image source={teamImage} style={imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
   textStyle: {
     color: '#000',
     fontSize: 13,
     fontWeight: '100',
     height: 30,
     width: Dimensions.get('window').width / 2 - 40,
     marginLeft: 35,
     marginRight: 35,
     marginBottom: 25,
     marginTop: 10,
     alignSelf: 'center',
     justifyContent: 'center',
     textAlign: 'center'
      },
buttonStyle: {
      backgroundColor: '#fff',
      borderRadius: (Dimensions.get('window').width / 2 - 40) / 2,
      borderWidth: 5,
      width: Dimensions.get('window').width / 2 - 40,
      height: Dimensions.get('window').width / 2 - 40,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderColor: '#1be9b6',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: (Dimensions.get('window').width / 2 - 50) / 2,
    width: Dimensions.get('window').width / 2 - 50,
    height: Dimensions.get('window').width / 2 - 50,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 25,
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'center'
  }
};
export default SpeakerButton;

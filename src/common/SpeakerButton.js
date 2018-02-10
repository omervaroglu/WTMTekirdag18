import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const SpeakerButton = ({ children, onPress }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <View>
        <View>
          <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}> {children}</Text>
          </TouchableOpacity>

          <Text style={textStyle}> Ömer Varoğlu </Text>

        </View>

    </View>
  );
};

const styles = {
   textStyle: {
     color: '#000',
     fontSize: 18,
     fontWeight: '100',
     height: 'auto',
     width: 'auto',
     marginLeft: 35,
     marginRight: 35,
     marginBottom: 25,
     alignSelf: 'center',
     justifyContent: 'center',
      },
buttonStyle: {
      backgroundColor: '#fff',
      borderRadius: 75,
      borderWidth: 5,
      width: 150,
      height: 150,
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      borderColor: '#1be9b6',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
};
export default SpeakerButton;

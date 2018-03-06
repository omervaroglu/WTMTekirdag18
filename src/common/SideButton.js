import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const SideButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}> {children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
   textStyle: {
     alignSelf: 'center',
     justifyContent: 'center',
     color: '#fff',
     fontSize: 20,
     fontWeight: '300',
     height: 'auto'
  },
  buttonStyle: {
      backgroundColor: '#019879',
      borderRadius: 25,
      width: 210,
      height: 40,
      alignSelf: 'center',
      justifyContent: 'center',
      borderColor: '#1be9b6',
      marginTop: 10,
    },
};

export default SideButton;

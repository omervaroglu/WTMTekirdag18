import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
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
     color: '#ffffff',
     fontSize: 25,
     fontWeight: '100',
     height: 'auto',
     width: 'auto'
      },
buttonStyle: {
      backgroundColor: '#019879',
      borderRadius: 25,
      width: 300,
      height: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderColor: '#1be9b6',
  },
};
export default Button;

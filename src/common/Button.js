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
     //paddingTop: 10,
     //paddingBottom: 10,
     height: 250
      },
buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#1be9b6',
      borderRadius: 25,
      borderColor: '#1be9b6',
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      paddingTop: 25,
      paddingBottom: 20,
  },
};
export default Button;

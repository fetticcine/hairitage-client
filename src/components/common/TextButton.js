import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const TextButton = ({ Pressed, children }) => {
  return (
    <TouchableOpacity onPress={Pressed}>
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    //color: '#800020',
    //fontSize: 18,
    //fontWeight: '600',
    fontFamily: 'Futura-CondensedMedium',
    paddingTop: 10,
    paddingBottom: 10,
    // new styles below
    color: '#c4c4c4',
    fontSize: 14,
  }
};

export { TextButton };

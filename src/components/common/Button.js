import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ Pressed, children }) => {
  return (
    <TouchableOpacity
      onPress={Pressed}
      style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

const styles = {
  buttonStyle: {
    //flex: 1,
    //alignSelf: 'stretch',
    //backgroundColor: '#800020',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    // new styles below
    marginBottom: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%',
    width: '15%',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Futura-CondensedMedium',
    fontSize: 14,
    //fontWeight: '600',
    //paddingTop: 10,
    //paddingBottom: 10,
  }
};

export { Button };

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection;

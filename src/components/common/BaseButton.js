import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../assets/colors';


class BaseButton extends Component {
  render() {
    const {
      backgroundColor,
      borderColor,
      borderRadius,
      borderWidth,
      textColor,
      textSize,
      textWeight,
      buttonAlign,
      text,
      onPress,
    } = this.props;

    const bgColor = backgroundColor || 'transparent';
    const bdColor = borderColor || colors.lightGrey;
    const bdRadius = borderRadius || 5;
    const bdWidth = borderWidth || 1;
    const color = textColor || colors.lightGrey;
    const fontSize = textSize || 16;
    const fontWeight = textWeight || '600';
    const alignSelf = buttonAlign || 'center';

    return (
      <TouchableOpacity
        style={[{
          alignSelf, backgroundColor: bgColor, borderColor: bdColor,
          borderRadius: bdRadius, borderWidth: bdWidth}, styles.buttonStyle]}
        onPress={onPress}
      >
        <Text
          style={[{ color, fontSize, fontWeight }, styles.textStyle]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

BaseButton.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderWidth: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  textWeight: PropTypes.string,
  buttonAlign: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

const styles = {
  buttonStyle: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textStyle: {
    fontFamily: 'Futura-CondensedMedium',
    alignSelf: 'center'
  }
};

export default BaseButton;

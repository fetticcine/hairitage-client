import React from 'react';
import { Text, View, Image } from 'react-native';

import PropTypes from 'prop-types';
import colors from '../../assets/colors';

const MessageRow = ({ image, senderName, msgPreviewText, timeStamp }) => {
  return (
    <View style={styles.rowCardStyle}>
      <View style={styles.rowContainerStyle}> 
       <View style={styles.iconNameContainerStyle}>
       {image}
       <View>
          <Text style={styles.senderNameStyle}>{senderName}</Text>
          <Text style={styles.msgPreviewStyle}>{msgPreviewText}</Text>
        </View>
       </View>
        <Text style={styles.timeStampStyle}>{timeStamp}</Text>
      </View>
    </View>
  );
}

MessageRow.propTypes = {
  senderName: PropTypes.string.isRequired,
  msgPreviewText: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

const styles = {
  rowCardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  rowContainerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    padding: 5,
  },
  iconNameContainerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  // TODO: make styles dynamic
  iconStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  senderNameStyle: {
    fontSize: 16,
    fontFamily: 'Futura-CondensedMedium',
    color: colors.lightGrey,
  },
  msgPreviewStyle: {
    fontSize: 14,
    fontFamily: 'Futura-CondensedMedium',
    color: colors.lightGrey,
  },
  timeStampStyle: {
    fontSize: 14,
    fontFamily: 'Futura-CondensedMedium',
    color: colors.lightGrey,
  },  
};

export default MessageRow;

import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import CardSection from './common/CardSection';
import colors from '../assets/colors';

const UserRow = ({ image, senderName, msgPreviewText, timeStamp }) => {
  return (
    <CardSection>
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
    </CardSection>
  );
}

UserRow.propTypes = {
  senderName: PropTypes.string.isRequired,
  msgPreviewText: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

const styles = {
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

export default UserRow;

import React from 'react';
import { Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import MessageRow from '../message/MessageRow';

// TODO: make styles dynamic
const imageStyle = {
  height: 40,
  width: 40,
  borderRadius: 20,
  marginRight: 10
};

// TODO: look at socialPost to mirror passing image urls as props and use gdrive for image hosting
class MessagesList extends React.Component {
  renderItem = ({ item }) => {
    return (
      <MessageRow
        senderName={item.senderName}
        msgPreviewText={item.msgPreviewText}
        image={
          <Image style={imageStyle} source={require('../../assets/fade.jpg')} />
        }
        timeStamp={item.timeStamp}
      />
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    );
  }
}

MessagesList.propTypes = {
  data: PropTypes.array.isRequired
};

export default MessagesList;

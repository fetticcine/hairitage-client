import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MessageListContainer from '../components/message/messageListContainer';

export default class Inbox extends React.Component {
  state = {
    onMessageView: true
  };

  onMessagesPress = () => {
    if (!this.state.onMessageView) this.setState({ onMessageView: true });
  };

  onNotificationsPress = () => {
    if (this.state.onMessageView) this.setState({ onMessageView: false });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <TouchableOpacity onPress={this.onMessagesPress}>
            <Text>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onNotificationsPress}>
            <Text>Notifications</Text>
          </TouchableOpacity>
        </View>
        {this.state.onMessageView ? (
          <MessageListContainer />
        ) : (
          <Text>Notifications screen</Text>
        )}
      </View>
    );
  }
}

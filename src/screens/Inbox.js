import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MessageListContainer from '../components/message/messageListContainer';
import BaseButton from '../components/common/BaseButton';

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
    const { tabsContainer, tabText, selectedButton, unselectedButton } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={tabsContainer}>
          <View style={this.state.onMessageView ? selectedButton : unselectedButton}>
            <TouchableOpacity onPress={this.onMessagesPress}>
              <Text style={tabText}>MESSAGES</Text>
            </TouchableOpacity>
          </View>
          <View style={this.state.onMessageView ? unselectedButton : selectedButton}>
            <TouchableOpacity onPress={this.onNotificationsPress}>
              <Text style={tabText}>NOTIFICATIONS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <BaseButton 
          text='NEW MESSAGE'
          pdgHorizontal={70}
          backgroundColor='#c4c4c4'
          textColor='#fff'
        />
        {this.state.onMessageView ? (<MessageListContainer />) : (<Text>Notifications screen</Text>)}
      </View>
    );
  }
}

const styles = {
  tabsContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 50,
      marginRight: 50,
  },
  tabText: {
      fontFamily: 'Futura-CondensedMedium',
      fontSize: 18,
      color: '#c4c4c4',
      paddingBottom: 2,
  },
  selectedButton: {
      borderColor: '#c4c4c4',
      borderBottomWidth: 2,
  },
  unselectedButton: {
      backgroundColor: 'transparent',
  },
};


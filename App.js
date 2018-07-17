import React from 'react';
import { View } from 'react-native';

import MessageListContainer from './src/components/message/MessageListContainer';
import BaseButton from './src/components/common/BaseButton';
import colors from './src/assets/colors';
import AppNavigator from './src/navigator';

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

import React from 'react';
import { View } from 'react-native';

import SocialPostList from '../components/post/SocialPostList';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <SocialPostList />
      </View>
      
    );
  }
}

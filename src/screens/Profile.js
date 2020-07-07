import React from 'react';
import { View } from 'react-native';

import MyProfile from '../components/profile/MyProfile';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <MyProfile />
      </View>
    );
  }
}

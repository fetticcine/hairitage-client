import HomeScreen from './screens/Home';
import DiscoverScreen from './screens/Discover';
import InboxScreen from './screens/Inbox';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';

import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

const Home = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: { 
      title: 'HOME',
      headerTintColor: '#C4C4C4',
      headerTitleStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        fontWeight: '600',
      },
    },
  },
});

const Discover = createStackNavigator({
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: { 
      title: 'DISCOVER',
      headerTintColor: '#C4C4C4',
      headerTitleStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        fontWeight: '600',
      }, 
    }
  }
});

const Inbox = createStackNavigator({
  Inbox: {
    screen: InboxScreen,
    navigationOptions: { 
      title: 'INBOX',
      headerTintColor: '#C4C4C4',
      headerTitleStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        fontWeight: '600',
      },
    }
  }
});

const Profile = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({ 
      title: 'PROFILE',
      headerRight: 
      <TouchableOpacity 
        onPress={() => navigation.navigate('Settings')}
        style={{ position: 'absolute', right: 0, marginRight: 5, }}>
          <Icon name="settings" size={20} color="#c4c4c4" />
      </TouchableOpacity>,
      headerTintColor: '#C4C4C4',
      headerTitleStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        fontWeight: '600',
      },
    })
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'SETTINGS',
      headerLeft:
      <TouchableOpacity onPress={() => navigation.goBack()} >
          <Icon name="chevron-left" size={30} color="#c4c4c4" />
      </TouchableOpacity>,
      headerTintColor: '#C4C4C4',
      headerTitleStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        fontWeight: '600',
      },
    })
  }
});

const AppNavigator = createBottomTabNavigator({
  Home,
  Discover,
  Inbox,
  Profile
});

export default AppNavigator;

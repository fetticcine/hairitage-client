import HomeScreen from './screens/Home';
import DiscoverScreen from './screens/Discover';
import InboxScreen from './screens/Inbox';
import ProfileScreen from './screens/Profile';

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
    navigationOptions: { 
      title: 'PROFILE',
      headerTintColor: '#C4C4C4',
      headerTitleStyle: {
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
        fontWeight: '600',
      },
    }
  }
});

const AppNavigator = createBottomTabNavigator({
  Home,
  Discover,
  Inbox,
  Profile
});

export default AppNavigator;

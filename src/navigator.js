import Home from './screens/Home';
import Discover from './screens/Discover';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

import { createBottomTabNavigator } from 'react-navigation';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Discover: {
    screen: Discover
  },
  Inbox: {
    screen: Inbox
  },
  Profile: {
    screen: Profile
  }
});

export default AppNavigator;

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
    navigationOptions: { title: 'Home' }
  }
});

const Discover = createStackNavigator({
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: { title: 'Discover' }
  }
});

const Inbox = createStackNavigator({
  Inbox: {
    screen: InboxScreen,
    navigationOptions: { title: 'Inbox' }
  }
});

const Profile = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: { title: 'Profile' }
  }
});

const AppNavigator = createBottomTabNavigator({
  Home,
  Discover,
  Inbox,
  Profile
});

export default AppNavigator;

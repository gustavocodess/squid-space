import Feed from '../screens/Feed'
import Notifications from '../screens/Notifications'
import Profile from '../screens/Profile'

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation'

const BottomNativation = createMaterialBottomTabNavigator({
  Feed: { screen: Feed },
  Notifications: { screen: Notifications },
  Profile: { screen: Profile },
}, {
  initialRouteName: 'Feed',
  activeColor: '#F44336',
});

export default createAppContainer(BottomNativation)


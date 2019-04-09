import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createAppContainer } from 'react-navigation'

import FeedNavigator from './FeedNavigator'
import Notifications from '../screens/Notifications'
import Profile from '../screens/Profile'

const BottomNativation = createMaterialBottomTabNavigator({
  Feed: {
    screen: FeedNavigator,
  },
  Notifications: { screen: Notifications },
  Profile: { screen: Profile },
}, {
  initialRouteName: 'Feed',
})

export default createAppContainer(BottomNativation)

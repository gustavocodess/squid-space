import { createAppContainer, createStackNavigator } from 'react-navigation'

import UserRegister from '../screens/UserRegister'
import Login from '../screens/Login'
import MainNavigator from './MainNavigator'

const FeedNavigation = createStackNavigator({
  Login: { screen: Login },
  UserRegister: {
    screen: UserRegister,
  },
  AppMain: {
    screen: MainNavigator,
  },
}, {
  initialRouteName: 'UserRegister',
  headerMode: 'none',
})

export default createAppContainer(FeedNavigation)

import { createAppContainer, createStackNavigator } from 'react-navigation'

import Feed from '../screens/Feed'
import PostDetail from '../screens/PostDetail'

const FeedNavigation = createStackNavigator({
  Feed: {
    screen: Feed,
  },
  PostDetail: { screen: PostDetail },

}, {
  initialRouteName: 'Feed',
  headerMode: 'none',
})

export default createAppContainer(FeedNavigation)

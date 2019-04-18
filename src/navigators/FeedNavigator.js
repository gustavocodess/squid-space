import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import Feed from '../screens/Feed'
import PostDetail from '../screens/PostDetail'

import getCurrentRouteName from './utils'

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

// const AppContainer = createAppContainer(FeedNavigation)

// export default () => (
//   <AppContainer
//     onNavigationStateChange={(prevState, currentState) => {
//       const currentScreen = getCurrentRouteName(currentState)
//       const prevScreen = getCurrentRouteName(prevState)

//       if (prevScreen !== currentScreen) {
//         // the line below uses the Google Analytics tracker
//         // change the tracker here to use other Mobile analytics SDK.
//         // tracker.trackScreenView(currentScreen)
//       }
//     }}
//   />
// )

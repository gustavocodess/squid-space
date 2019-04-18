import { createStore, combineReducers, applyMiddleware } from 'redux'
// import {
//   createReactNavigationReduxMiddleware,
//   createNavigationReducer,
// } from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'
// import MainNavigator from '../navigators/MainNavigator'
// import FeedNavigator from '../navigators/FeedNavigator'
import reducers from '../reducers'

// const navReducer = createNavigationReducer(MainNavigator)
// const feedNavReducer = createNavigationReducer(FeedNavigator)

// const navMiddleware = createReactNavigationReduxMiddleware(
//   state => state.nav,
// )

// const feedNavMiddleware = createReactNavigationReduxMiddleware(
//   state => state.feedNav,
// )

const reducer = combineReducers({
  // nav: navReducer,
  // feedNav: feedNavReducer,
  ...reducers,
})
const store = createStore(
  reducer,
  applyMiddleware(
    // navMiddleware,
    // feedNavMiddleware,
    thunk,
  ),
)

export default store

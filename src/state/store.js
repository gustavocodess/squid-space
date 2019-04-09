import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'

const reducer = combineReducers({ ...reducers })
const store = createStore(
  reducer,
  applyMiddleware(logger),
)

export default store

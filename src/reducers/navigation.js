import { Navigator } from '../navigators/MainNavigator'

const defaultScreen = Navigator.router.getActionForPathAndParams('Feed')
const initialNavState = Navigator.router.getStateForAction(defaultScreen)

export default (state = initialNavState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

import { createAction } from 'redux-actions'
import { NavigationActions } from 'react-navigation'
import * as types from './actionTypes'


let navigator

export const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef
}

export const resetToHome = () => (
  (dispatch) => {
    dispatch(createAction(types.IS_APPLICATION_LOADING)(false))
    dispatch(createAction(types.RESET_TO_HOME)())
  }
)


export const goBack = () => (
  () => {
    const backAction = NavigationActions.back()
    navigator.dispatch(backAction)
  }
)

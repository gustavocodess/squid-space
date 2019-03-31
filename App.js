import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import MainNavigator from './src/navigators/MainNavigator'

export default class App extends Component {
  state = {}

  render() {
    return (
      <PaperProvider>
        <MainNavigator />
      </PaperProvider>
    )
  }
}

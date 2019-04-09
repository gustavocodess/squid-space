import React, { Component } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigators/MainNavigator'
import Header from './src/ui/Header'
import store from './src/state/store'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4B307A',
    accent: '#B3A53C',
  },
}

export default class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Header />
          <MainNavigator />
        </PaperProvider>
      </Provider>
    )
  }
}

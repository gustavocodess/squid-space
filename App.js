import React, { Component } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import MainNavigator from './src/navigators/MainNavigator'
import Header from './src/ui/Header'

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
      <PaperProvider theme={theme}>
        <Header />
        <MainNavigator />
      </PaperProvider>
    )
  }
}

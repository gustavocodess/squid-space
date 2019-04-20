import React, { Component } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import MainNavigator from './src/navigators/MainNavigator'
import LoginNavigator from './src/navigators/LoginNavigator'
import Header from './src/ui/Header'
import store from './src/state/store'
import HeaderContext from './src/ui/Header/context'
import { setTopLevelNavigator } from './src/actions/navigation'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4B307A',
    accent: '#B3A53C',
  },
  fonts: {
    regular: 'GloberRegular',
    medium: 'GloberSemiBold',
    light: 'GloberLight',
    thin: 'GloberThin',
  },
}

// apollo client setup
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjuj6y3ym0xga01f4wz55hg24/master',
})

const getCurrentRouteName = (navState) => {
  if (navState.hasOwnProperty('index')) {  // eslint-disable-line
    return getCurrentRouteName(navState.routes[navState.index])
  }
  return navState.routeName
}

export default class App extends Component {
  state = {
    showBackButton: false,
  }

  displayBackButton = () => {
    this.setState({
      showBackButton: true,
    })
  }

  handleRouteChange = (newState) => {
    if (getCurrentRouteName(newState) === 'PostDetail') {
      if (!this.state.showBackButton) {
        this.setState({
          showBackButton: true,
        })
      }
    } else if (this.state.showBackButton === true) {
      this.setState({
        showBackButton: false,
      })
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PaperProvider theme={theme}>
            {/* <HeaderContext.Provider value={this.state}>
              <HeaderContext.Consumer>
                {
                  headerConfigs => (
                    <Header headerConfigs={headerConfigs} />
                  )
                }
              </HeaderContext.Consumer>
              <MainNavigator
                onNavigationStateChange={(prevState, newState) => {
                  this.handleRouteChange(newState)
                }}
                ref={(navigatorRef) => {
                  setTopLevelNavigator(navigatorRef)
                }}
              />
            </HeaderContext.Provider> */}
            <LoginNavigator />
          </PaperProvider>
        </Provider>
      </ApolloProvider>
    )
  }
}

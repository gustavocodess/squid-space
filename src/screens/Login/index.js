import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class Login extends Component {
  state = {}

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <Button
          mode="outlined"
          onPress={() => navigation.push('UserRegister')}
        >
          Sign Up
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.push('AppMain')}
          style={{ marginTop: 16 }}
        >
          Go to App
        </Button>
      </View>
    )
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
}

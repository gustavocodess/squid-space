import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

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

export default class Feed extends Component {
  state = {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Feed</Text>
        <Button icon="done" mode="contained" onPress={() => alert('Hello World @GustavoCodes')}>
          Press me
        </Button>
      </View>
    )
  }
}

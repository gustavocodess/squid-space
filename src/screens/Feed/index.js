import React, { Component } from 'react'
import cuid from 'cuid'
import { StyleSheet, View, FlatList } from 'react-native'

import FeedCard from '../../ui/FeedCard'

import cards from './mock'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
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
        <FlatList
          data={cards.map(item => ({ ...item, key: cuid() }))}
          renderItem={({ item }) => (
            <FeedCard
              title={item.title}
              description={item.description}
              mediaType={item.type}
              author={item.author}
              date={item.date}
              key={cuid()}
            />
          )}
        />
      </View>
    )
  }
}

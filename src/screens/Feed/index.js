import React, { Component } from 'react'
import cuid from 'cuid'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import { getPostsQuery } from '../../queries/post'

import FeedCard from '../../ui/FeedCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

class Feed extends Component {
  state = {}

  renderPosts = () => {
    const { data } = this.props
    if (data.loading) {
      return <Text>Buscando...</Text>
    }
    return (
      <FlatList
        data={data.posts.map(item => ({ ...item, key: cuid() }))}
        renderItem={({ item }) => (
          <FeedCard
            postId={item.id}
            title={item.title}
            description={item.description}
            mediaType={item.type}
            author={item.postCreator}
            date={item.createdAt}
            key={cuid()}
          />
        )}
      />
    )
  }

  render() {
    console.log('FEED PROPS HERE ', this.props)
    return (
      <View style={styles.container}>
        {this.renderPosts()}
      </View>
    )
  }
}

Feed.propTypes = {
  data: PropTypes.object.isRequired,
}

export default graphql(getPostsQuery)(Feed)

import React, { Component } from 'react'
import { Appbar } from 'react-native-paper'

export default class Header extends Component {
  goBack = () => console.log('Went back')

  onSearch = () => console.log('Searching')

  _onMore = () => console.log('Shown more')

  render() {
    return (
      <Appbar.Header>
        {/* <Appbar.BackAction
          onPress={this.goBack}
        /> */}
        <Appbar.Content
          title="SquidSpace"
          // subtitle="Subtitle"
        />
        <Appbar.Action icon="search" onPress={this.onSearch} />
        {/* <Appbar.Action icon="more-vert" onPress={this.onMore} /> */}
      </Appbar.Header>
    )
  }
}

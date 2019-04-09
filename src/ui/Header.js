import React, { Component } from 'react'
import { Appbar } from 'react-native-paper'
import { withNavigation } from 'react-navigation'

class Header extends Component {
  goBack = () => console.log('Went back')

  onSearch = () => console.log('Searching')

  _onMore = () => console.log('Shown more')

  render() {
    // console.log('NAVIGATIONN PROPS AQUI ', this.props)
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

export default Header

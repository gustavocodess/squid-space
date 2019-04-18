import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Appbar } from 'react-native-paper'
import PropTypes from 'prop-types'
import { goBack } from '../../actions/navigation'

class Header extends Component {
  state = {}

  goBack = () => {
    this.props.goBack()
  }

  onSearch = () => console.log('Searching')

  _onMore = () => console.log('Shown more')

  render() {
    return (
      <Appbar.Header>
        {
          this.props.headerConfigs.showBackButton ? (
            <Appbar.BackAction
              onPress={this.goBack}
            />
          ) : null
        }
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

const mapStateToProps = state => ({
  everything: state,
})

const mapDispatchToProps = dispatch => ({
  goBack() {
    dispatch(goBack())
  },
})

Header.propTypes = {
  headerConfigs: PropTypes.object,
  goBack: PropTypes.func,
}

Header.defaultProps = {
  headerConfigs: {},
  goBack: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

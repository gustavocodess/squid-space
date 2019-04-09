import React, { Component } from 'react'
import { View, Text } from 'react-native'
import get from 'lodash.get'
import PropTypes from 'prop-types'
import { Avatar } from 'react-native-paper'
import Video from 'react-native-video'
import YouTube from 'react-native-youtube'
import Config from 'react-native-config'
import { withStyles } from '../../styles'

const manAvatar = require('../../assets/images/man.jpg')

class PostDetail extends Component {
  state = {}

  onBuffer = () => {
    console.log('BUFFERED ')
  }

  onVideoError = (e) => {
    console.log('VIDEO ERROR  ', e)
  }

  renderMedia = () => {
    const { styles } = this.props
    const mediaType = get(this.props, 'navigation.state.params.mediaType', '')
    if (mediaType === 'VIDEO') {
      return (
        <YouTube
          apiKey={Config.YOUTUBE_API_KEY}
          videoId="KVZ-P-ZI6W4"
          play
          // fullscreen
          loop
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => {
            console.log(e.error)
          }}
          style={styles.videoContainer}
        />
      )
    }
    if (mediaType === 'BOOK') {
      return (
        <Text style={styles.bookContainer}>
          book
        </Text>
      )
    }
    if (mediaType === 'AUDIO') {
      return (
        <Text style={styles.audioContainer}>
          podcast
        </Text>
      )
    }
    if (mediaType === 'IMAGE') {
      return (
        <Text style={styles.imageContainer}>
          imagem
        </Text>
      )
    }
    return null
  }

  render() {
    const {
      styles,
    } = this.props
    const params = get(this.props, 'navigation.state.params', {})
    const {
      title,
      description,
      author,
      date,
    } = params
    return (
      <View style={styles.container}>
        {this.renderMedia()}
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
        <View style={{ marginTop: 36 }}>
          <Text style={styles.label}>Publicado por:</Text>
          <View style={styles.footer}>
            <Avatar.Image size={36} source={manAvatar} />
            <View style={{ marginLeft: 16 }}>
              <Text style={styles.authorName}>{author}</Text>
              <Text style={styles.date}>
                {`às ${date}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

PostDetail.propTypes = {
  styles: PropTypes.object.isRequired,
}

export default withStyles(({
  color, family, fontSize, wWidth, wHeight,
}) => ({
  container: {
    flexDirection: 'column',
    width: wWidth,
    padding: 16,
    backgroundColor: color.white,
    position: 'relative',
  },
  videoContainer: {
    alignSelf: 'stretch',
    height: 200,
    backgroundColor: '#e9e9e9',
  },
  bookContainer: {
    alignSelf: 'stretch',
    height: 200,
    backgroundColor: '#e9e9e9',
  },
  imageContainer: {
    alignSelf: 'stretch',
    height: 200,
    backgroundColor: '#eaea',
  },
  audioContainer: {
    alignSelf: 'stretch',
    height: 200,
    backgroundColor: '#e31ad3',
  },
  title: {
    fontFamily: family.bold,
    fontSize: fontSize.f4,
    color: color.darker,
    marginTop: 16,
  },
  description: {
    marginTop: 16,
    fontFamily: family.regular,
    fontSize: fontSize.f2,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  authorName: {
    fontFamily: family.semi,
    fontSize: fontSize.f3,
  },
  label: {
    fontFamily: family.regular,
    fontSize: fontSize.f1,
    color: color.alto,
  },
  date: {
    fontFamily: family.semi,
    fontSize: fontSize.f2,
    color: color.alto,
  },
}))(PostDetail)

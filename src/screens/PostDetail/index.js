import React, { Component } from 'react'
import {
  View, Text, Image, ScrollView,
} from 'react-native'
import get from 'lodash.get'
import PropTypes from 'prop-types'
import { Avatar, Button } from 'react-native-paper'
// import Video from 'react-native-video'
import YouTube from 'react-native-youtube'
import Pdf from 'react-native-pdf'
import Config from 'react-native-config'
import AudioPlayer from '../../ui/AudioPlayer'
import { withStyles } from '../../styles'

const manAvatar = require('../../assets/images/man.jpg')
const post = require('../../assets/images/react-native.png')

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
          // onReady={e => this.setState({ isReady: true })}
          // onChangeState={e => this.setState({ status: e.state })}
          // onChangeQuality={e => this.setState({ quality: e.quality })}
          // onError={e => {
          //   console.log(e.error)
          // }}
          style={styles.videoContainer}
        />
      )
    }
    if (mediaType === 'BOOK') {
      const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true }
      return (
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`)
          }}
          onError={(error) => {
            console.log(error)
          }}
          style={styles.bookContainer}
        />
      )
    }
    if (mediaType === 'AUDIO') {
      return (
        <AudioPlayer />
      )
    }
    if (mediaType === 'IMAGE') {
      return (
        <Image
          style={styles.imageContainer}
          source={post}
          resizeMode="contain"
        />
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
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        {this.renderMedia()}
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
        <Button
          onPress={() => this.props.navigation.goBack()}
          style={{ marginTop: 24, marginBottom: 56 }}
        >
          Go Back
        </Button>
      </ScrollView>
    )
  }
}

PostDetail.propTypes = {
  styles: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
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
    flex: 1,
  },
  videoContainer: {
    alignSelf: 'stretch',
    height: 200,
    backgroundColor: '#e9e9e9',
    borderRadius: 2,
  },
  bookContainer: {
    width: wWidth * 0.92,
    height: wHeight * 0.5,
    backgroundColor: '#e9e9e9',
    borderRadius: 3,
  },
  imageContainer: {
    // alignSelf: 'stretch',
    backgroundColor: '#e9e9e9',
    height: wWidth > 300 ? 200 : 150,
    width: wWidth * 0.92,
    borderRadius: 3,
  },
  title: {
    fontFamily: family.bold,
    fontSize: fontSize.f4,
    color: color.darker,
    marginBottom: 8,
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

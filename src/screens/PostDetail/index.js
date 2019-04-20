import React, { Component } from 'react'
import {
  View, Text, Image, ScrollView,
} from 'react-native'
import get from 'lodash.get'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Avatar } from 'react-native-paper'
// import Video from 'react-native-video'
import YouTube from 'react-native-youtube'
import Pdf from 'react-native-pdf'
import Config from 'react-native-config'
import { graphql } from 'react-apollo'
import AudioPlayer from '../../ui/AudioPlayer'
import { withStyles } from '../../styles'
import { getPostById } from '../../queries/post'


const post = require('../../assets/images/react-native.png')

class PostDetail extends Component {
  state = {}

  componentDidMount() {
  }

  onBuffer = () => {
    console.log('BUFFERED ')
  }

  onVideoError = (e) => {
    console.log('VIDEO ERROR  ', e)
  }

  renderMedia = () => {
    const { styles, data } = this.props
    const mediaType = get(this.props, 'navigation.state.params.mediaType', '')
    if (mediaType === 'VIDEO') {
      return (
        <YouTube
          apiKey={Config.YOUTUBE_API_KEY}
          videoId={get(data, 'post.videoUrl', '')}
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
      const source = { uri: get(data, 'post.bookUrl', ''), cache: true }
      return (
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            // console.log(`number of pages: ${numberOfPages}`)
          }}
          onPageChanged={(page, numberOfPages) => {
            // console.log(`current page: ${page}`)
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
        <AudioPlayer
          audioUrl={get(data, 'post.audioUrl', '')}
        />
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

    console.log('POST DETAILS PROPS ', this.props)
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
            <Avatar.Image size={36} source={{ uri: author.avatarPath }} />
            <View style={{ marginLeft: 16 }}>
              <Text style={styles.authorName}>{author.name}</Text>
              <Text style={styles.date}>
                {`às ${moment(date).format('DD/MM/YYYY HH:mm:ss')}`}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

PostDetail.propTypes = {
  styles: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

const PostDetailWithStyles = withStyles(({
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
    borderRadius: 2,
  },
  bookContainer: {
    width: wWidth * 0.92,
    height: wHeight * 0.45,
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

export default graphql(getPostById, {
  options: (props) => {
    const params = get(props, 'navigation.state.params', {})
    console.log('PRESTES A JORGAR OS PARAMS AQUI ', params.postId)
    return ({
      variables: {
        id: params.postId,
      },
    })
  },
})(PostDetailWithStyles)

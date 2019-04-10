import React, { Component } from 'react'
import { View, Image } from 'react-native'
import get from 'lodash.get'
import PropTypes from 'prop-types'
import cuid from 'cuid'
import { IconButton } from 'react-native-paper'
import TrackPlayer from 'react-native-track-player'
import { withStyles } from '../styles'

const audio = require('../assets/images/headphones.png')

const audioSong = 'http://www.hochmuth.com/mp3/Bloch_Prayer.mp3'
const track = {
  id: cuid(), // Must be a string, required

  // url: 'http://example.com/avaritia.mp3', // Load media from the network
  // url: require('./avaritia.ogg'), // Load media from the app bundle
  // url: 'file:///storage/sdcard0/Music/avaritia.wav', // Load media from the file system 
  url: audioSong,
  title: 'Ciello',
  artist: 'Gustavo Codes',
  album: 'while(1<2)',
  genre: 'Classical Music',
  date: '2019-03-20T07:00:00+00:00', // RFC 3339

  artwork: 'http://www.hochmuth.com/images/picture2small.jpg', // Load artwork from the network
  // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
  // artwork: 'file:///storage/sdcard0/Downloads/artwork.png' // Load artwork from the file system
}

class AudioPlayer extends Component {
  state = {}


  componentDidMount() {
    this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
      // const changedTrack = await TrackPlayer.getTrack(data.nextTrack)
      // this.setState({ trackTitle: changedTrack.title })
    })
    TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add(track)
      // Starts playing it
      TrackPlayer.play()
    })
  }

  componentWillUnmount() {
    // Removes the event handler
    this.onTrackChange.remove()
  }

  handlePlayPause = async () => {
    const state = await TrackPlayer.getState()
    if (state === 'playing') {
      TrackPlayer.pause()
      this.setState({
        paused: true,
      })
    } else if (state === 'stopped' || state === 'paused') {
      TrackPlayer.play()
      this.setState({
        paused: false,
      })
    }
  }

  render() {
    const {
      styles,
      theme,
    } = this.props
    const {
      paused,
    } = this.state
    return (
      <View style={styles.audioContainer}>
        <View style={styles.audioCard}>
          <Image
            style={styles.audioIcon}
            source={audio}
            resizeMode="contain"
          />
        </View>
        <View style={styles.row}>
          <IconButton
            icon="replay-10"
            color={theme.color.secLighter}
            size={36}
            onPress={() => console.log('Pressed')}
            style={{ marginLeft: 16 }}
          />
          <IconButton
            icon={paused ? 'play-circle-filled' : 'pause-circle-filled'}
            color={theme.color.secLight}
            size={60}
            onPress={() => this.handlePlayPause()}
            style={{ width: 80, height: 80 }}
          />
          <IconButton
            icon="forward-10"
            color={theme.color.secLighter}
            size={36}
            onPress={() => console.log('Pressed')}
            style={{ marginRight: 16 }}
          />
        </View>
      </View>
    )
  }
}

AudioPlayer.propTypes = {
  styles: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(({
  color,
}) => ({
  audioContainer: {
    alignSelf: 'stretch',
    height: 220,
    backgroundColor: color.darker,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioCard: {
    width: 80,
    height: 80,
    backgroundColor: color.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioIcon: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    alignSelf: 'stretch',
    margin: 16,
  },

}))(AudioPlayer)

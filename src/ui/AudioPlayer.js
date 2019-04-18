import React, { Component } from 'react'
import { View, Image } from 'react-native'
import get from 'lodash.get'
import PropTypes from 'prop-types'
import cuid from 'cuid'
import { IconButton } from 'react-native-paper'
import TrackPlayer from 'react-native-track-player'
import Slider from 'react-native-slider'
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
  state = {
    paused: false,
    positionInSeconds: 0,
    trackPosition: 0,
  }

  componentDidMount() {
    this.onTrackChange = TrackPlayer.addEventListener('playback-track-changed', async (data) => {
      // const changedTrack = await TrackPlayer.getTrack(data.nextTrack)
      // this.setState({ trackTitle: changedTrack.title })
      // console.log('TRACK DATA CHANGED ')
    })
    TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add(track)
      await this.startTimer()
      // Starts playing it
      // TrackPlayer.play()
      TrackPlayer.play()
    })
  }

  componentWillUnmount() {
    // Removes the event handler
    TrackPlayer.stop()
    this.onTrackChange.remove()
    clearInterval(this.timer)
  }

  startTimer = async () => {
    this.timer = await setInterval(async () => {
      const duration = await TrackPlayer.getDuration()
      if (!this.state.duration) {
        this.setState(() => ({
          duration,
        }))
      }
      const position = await TrackPlayer.getPosition()
      this.setState(() => ({
        positionInSeconds: position,
        trackPosition: 0.1 || Number((position / duration).toFixed(3)),
      }))
      if (this.state.positionInSeconds + 1 >= duration) {
        console.log('FUCKING HERE ', this.state.positionInSeconds, duration)
        this.setState({
          positionInSeconds: 0,
          trackPosition: 0.1,
        }, async () => {
          await TrackPlayer.reset()
        })
      }
    }, 1000)
  }

  pauseTimer = () => {
    clearInterval(this.timer)
  }

  handlePlayPause = async () => {
    const state = await TrackPlayer.getState()
    console.log('KDSPODKSAPODASKOP AQUI ', state)
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
    console.log('PLAYER STATE ', this.state)
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
            onPress={() => TrackPlayer.seekTo(this.state.positionInSeconds - 10)}
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
            onPress={() => TrackPlayer.seekTo(this.state.positionInSeconds + 10)}
            style={{ marginRight: 16 }}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            value={this.state.trackPosition}
            onValueChange={(value) => {
              TrackPlayer.seekTo(value * this.state.duration)
            }}
            minimumTrackTintColor="#B3A53C"
            maximumTrackTintColor="#FFF5A8"
            thumbTintColor="#B3A53C"
            thumbStyle={{
              height: 14,
              width: 14,
            }}
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
    marginBottom: 0,
    paddingBottom: 0,
    height: 76,
  },
  sliderContainer: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 12,
  },
}))(AudioPlayer)

import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { Avatar } from 'react-native-paper'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withStyles } from '../styles'

const manAvatar = require('../assets/images/man.jpg')
const audio = require('../assets/images/headphones.png')
const video = require('../assets/images/youtube.png')
const book = require('../assets/images/open-book.png')
const image = require('../assets/images/picture.png')

const mediaTypeMap = {
  AUDIO: {
    media: audio,
    label: 'Ouvir podcast',
  },
  VIDEO: {
    media: video,
    label: 'Assistir vídeo',
  },
  BOOK: {
    media: book,
    label: 'Ver artigo',
  },
  IMAGE: {
    media: image,
    label: 'Ver post',
  },
}


const FeedCard = ({
  author, date, title, description, mediaType, styles, navigation,
}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.push('PostDetail', {
        author, date, title, description, mediaType,
      })
    }}
  >
    <View
      style={styles.container}
    >
      <View style={styles.mediaContainer}>
        <View style={styles.mediaAvatar}>
          <Image
            source={mediaTypeMap[mediaType].media}
            style={styles.media}
          />
        </View>
        <Text style={styles.mediaLabel}>
          {mediaTypeMap[mediaType].label}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text
        numberOfLines={2}
        style={styles.description}
      >
        {description}
      </Text>
      <View style={styles.authorContainer}>
        <Avatar.Image size={36} source={manAvatar} />
        <Text style={styles.authorName}>{author}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

FeedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  mediaType: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
}

FeedCard.defaultProps = {
  description: '',
}

const sFeedCard = withStyles(({
  color, family, fontSize, wWidth,
}) => ({
  container: {
    flexDirection: 'column',
    borderRadius: 9,
    width: wWidth * 0.9,
    elevation: 4,
    padding: 16,
    backgroundColor: color.white,
    margin: 8,
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSize.f3,
    fontFamily: family.bold,
  },
  authorContainer: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  authorName: {
    marginLeft: 16,
    fontSize: fontSize.f2,
    fontWeight: 'bold',
    fontFamily: family.semi,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: fontSize.f0,
    fontFamily: family.regular,
  },
  mediaContainer: {
    flexDirection: 'column',
    position: 'absolute',
    top: 16,
    right: 16,
    alignItems: 'center',
  },
  mediaAvatar: {
    width: 60,
    height: 40,
    backgroundColor: color.secLighter,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  media: {
    height: 25,
    width: 25,
  },
  mediaLabel: {
    fontSize: fontSize.f0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    fontFamily: family.regular,
  },
  description: {
    width: wWidth * 0.6,
  },
}))(FeedCard)

export default withNavigation(sFeedCard)

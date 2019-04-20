import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Video from 'react-native-video'
import PropTypes from 'prop-types'
import { withStyles } from '../../styles'

const backgroundVideo = require('../../assets/videos/register-background.mp4')

class UserRegister extends Component {
  state = {}

  render() {
    const { styles, navigation } = this.props
    return (
      <View style={styles.container}>
        <Video
          source={backgroundVideo}
          rate={1.0}
          muted
          resizeMode="cover"
          repeat
          style={styles.videoContainer}
        />
        <Text style={styles.title}>SquidSpace</Text>
        <View style={styles.formContainer}>
          <View style={styles.formInnerContainer} />
          <TextInput
            label="Nome *"
            value={this.state.firstName}
            onChangeText={text => this.setState({ firstName: text })}
            type="outlined"
            style={styles.input}
          />
          <TextInput
            label="Sobrenome *"
            value={this.state.lastName}
            onChangeText={text => this.setState({ lastName: text })}
            type="outlined"
            style={styles.input}
          />
          <TextInput
            label="Email *"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            type="outlined"
            style={styles.input}
          />
          <TextInput
            label="Senha *"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            type="outlined"
            style={styles.input}
          />
          <TextInput
            label="Confirmar Senha *"
            value={this.state.passwordConfirmation}
            onChangeText={text => this.setState({ passwordConfirmation: text })}
            type="outlined"
            style={styles.input}
          />
        </View>

        <Button
          icon=""
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.registerButton}
        >
          Cadastrar
        </Button>

        <TouchableOpacity
          icon=""
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButton}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

UserRegister.propTypes = {
  styles: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default withStyles(({
  color, wWidth, family, fontSize,
}) => ({
  container: {
    padding: 16,
    paddingTop: 64,
    backgroundColor: color.lighter,
    width: wWidth,
    // backgroundColor: color.secLighter,
    flex: 1,
    position: 'relative',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  formContainer: {
    // backgroundColor: color.white,
    // backgroundColor: color.secLighter,
    borderRadius: 10,
    padding: 8,
    marginTop: 24,
    position: 'relative',
  },
  formInnerContainer: {
    backgroundColor: color.white,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    borderRadius: 10,
  },
  input: {
    borderColor: color.primary,
    borderWidth: 2,
    borderRadius: 3,
    margin: 8,
    backgroundColor: 'transparent',
    // backgroundColor: color.white,
    fontFamily: family.regular,
  },
  registerButton: {
    margin: 8,
    marginTop: 24,
    height: 40,
    paddingTop: 4,
  },
  title: {
    fontFamily: family.bold,
    fontSize: fontSize.f5,
    color: color.white,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 16,
    color: color.white,
    padding: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    fontSize: fontSize.f3,
  },
}))(UserRegister)

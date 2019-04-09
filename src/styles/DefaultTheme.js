import { Dimensions } from 'react-native'

export default {
  wWidth: Dimensions.get('window').width,
  wHeight: Dimensions.get('window').height,
  color: {
    primary: '#4B307A',
    lighter: '#907CB3',
    light: '#6A5095',
    dark: '#341A61',
    darker: '#1D0843',
    secondary: '#B3A53C',
    secLighter: '#FFF5A8',
    secLight: '#DBCE6B',
    secDark: '#8F811B',
    secDarker: '#635702',
    white: '#fff',
    black: '#131313',
    alto: '#979797',
  },
  fontSize: {
    f0: 10,
    f1: 12,
    f2: 14,
    f3: 16,
    f4: 18,
    f5: 20,
    f6: 22,
    f7: 24,
  },
  padding: {
    pa16: 16,
    pa36: 36,
    pa40: 40,
  },
  button: {
    back: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
  family: {
    regular: 'GloberRegular',
    semi: 'GloberSemiBold',
    bold: 'GloberBold',
    light: 'GloberLight',
    thin: 'GloberThin',
  },
}

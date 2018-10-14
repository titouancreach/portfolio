import {createMuiTheme} from '@material-ui/core/styles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import brown from '@material-ui/core/colors/brown'

export default createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[100],
      main: lightGreen[400],
      dark: lightGreen[600],
      contrastText: '#222',
    },
    secondary: brown,
  },
})

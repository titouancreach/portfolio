import {createMuiTheme} from 'material-ui/styles';
import lightGreen from 'material-ui/colors/lightGreen';
import brown from 'material-ui/colors/brown';

export default createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[100],
      main: lightGreen[400],
      dark: lightGreen[600],
      contrastText: '#222'
    },
    secondary: brown
  }
});

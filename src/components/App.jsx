import React from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import AppBar from './AppBar.jsx';
import Content from './Content.jsx';
import theme from '../styles/theme';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar />
        <Content />
      </div>
    </MuiThemeProvider>
  )
};

export default App;

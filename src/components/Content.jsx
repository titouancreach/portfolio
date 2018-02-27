import React from 'react';
import {withStyles} from 'material-ui/styles';
import {Switch, Route} from 'react-router-dom'

import AboutMe from './AboutMe.jsx';

const styles = {
  content: {
    margin: 24
  }
};


const Content = (props) => {
  const {classes} = props;
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <div className={classes.content}>
          <AboutMe />
        </div>
      )}/>
    </Switch>
  )
};

export default withStyles(styles)(Content);

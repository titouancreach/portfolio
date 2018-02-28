import React from 'react';
import {withStyles} from 'material-ui/styles';
import CardEpitech from './CardEpitech.jsx';
import CardExperience from './CardExperience.jsx';
import CardOpenSource from './CardOpenSource.jsx';

const Experience = (props) => {
  return (
    <React.Fragment>
      <CardEpitech />
      <CardExperience />
      <CardOpenSource />
    </React.Fragment>
  )
};

export default withStyles({})(Experience);


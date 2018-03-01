import React from 'react'
import {withStyles} from 'material-ui/styles';

const style = ({palette}) => {
  return {
    link: {
      color: palette.secondary.dark,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
};

const StyledLink = ({classes, children, ...props}) => {
  return (
    <a {...props} className={classes.link}>{children}</a>
  );
};

export default withStyles(style)(StyledLink);

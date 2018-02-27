import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    maxWidth: '60%',
    margin: 'auto',
  },
  paper: {
    padding: 16
  },
});

const Contact = (props) => {

  const {classes} = props;
  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <Typography variant="headline" component="h3">
          Get in touch
        </Typography>
        <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="email">email</InputLabel>
            <Input />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="object">object</InputLabel>
          <Input />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="message">Message</InputLabel>
          <Input multiline />
        </FormControl>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Contact);

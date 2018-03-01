import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    maxWidth: '60%',
    margin: 'auto'
  },
  paper: {
    padding: 16
  },
  iconButton: {
    marginLeft: theme.spacing.unit
  },
  inputContainer: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        validationStarted: false,
        text: ''
      },
      subject: {
        validationStarted: false,
        text: ''
      },
      message: {
        validationStarted: false,
        text: ''
      }
    };
  }

  isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  isEmpty(s) {
    return !s;
  }

  isShort(s) {
    return s.length < 10;
  }

  isValid(key) {
    const {text} = this.state[key];
    switch (key) {
      case 'email': {
        return this.isEmailValid(text) && !this.isEmpty(text);
      }
      case 'subject':
      case 'message':
        return !this.isShort(text);
    }
  }

  isAllValid() {
    return Object.keys(this.state).every(::this.isValid);
  }

  assignState(key) {
    return e => {
      this.setState({
        [key]: {
          text: e.target.value,
          validationStarted: true
        }
      });
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="headline" component="h3">
            Get in touch
          </Typography>
          <form action="https://jumprock.co/mail/titouancreach" method="post">
            <div className={classes.inputContainer}>
              <FormControl
                fullWidth
                className={classes.formControl}
                error={
                  !this.isValid('email') && this.state.email.validationStarted
                }
                margin="normal">
                <InputLabel htmlFor="email">email</InputLabel>
                <Input
                  id="email"
                  name="email"
                  value={this.state.email.text}
                  onChange={this.assignState('email')}
                />
                {!this.isValid('email') &&
                this.state.email.validationStarted ? (
                  <FormHelperText id="">Invalid email</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl
                fullWidth
                className={classes.formControl}
                error={
                  !this.isValid('subject') &&
                  this.state.subject.validationStarted
                }
                margin="normal">
                <InputLabel htmlFor="subject">subject</InputLabel>
                <Input
                  id="subject"
                  name="subject"
                  value={this.state.subject.text}
                  onChange={this.assignState('subject')}
                />
                {!this.isValid('subject') &&
                this.state.subject.validationStarted ? (
                  <FormHelperText id="">
                    Invalid subject, at least 10 characters
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl
                fullWidth
                className={classes.formControl}
                error={
                  !this.isValid('message') &&
                  this.state.message.validationStarted
                }
                margin="normal">
                <InputLabel htmlFor="message">message</InputLabel>
                <Input
                  id="message"
                  name="message"
                  value={this.state.message.text}
                  onChange={this.assignState('message')}
                />
                {!this.isValid('message') &&
                this.state.message.validationStarted ? (
                  <FormHelperText id="">
                    Invalid message, at least 10 characters
                  </FormHelperText>
                ) : null}
              </FormControl>
              <input
                type="hidden"
                name="after"
                value={`${window.location.origin}/portfolio`}
              />
            </div>
            <Button
              variant="raised"
              color="primary"
              type="submit"
              disabled={!this.isAllValid()}>
              Send
              <Icon className={classes.iconButton}>send</Icon>
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);

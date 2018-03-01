import React from 'react';

import {withStyles} from 'material-ui/styles';
import {withRouter} from 'react-router-dom';

import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import FontAwesome from 'react-fontawesome';

import Photo from '../images/photo.jpg';

const styles = {
  card: {
    maxWidth: '60%',
    margin: 'auto'
  },
  media: {
    height: 500
  },
  root: {
    margin: 24
  }
};

const AboutMe = props => {
  const {classes, history} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <React.Fragment>
              <IconButton href="https://github.com/titouancreach">
                <FontAwesome name="github" />
              </IconButton>
              <IconButton href="https://twitter.com/titouancreach">
                <FontAwesome name="twitter" />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/titouan-cr%C3%A9ac-h-6403a487/">
                <FontAwesome name="linkedin" />
              </IconButton>
              <IconButton href="https://stackoverflow.com/users/2190535/epitouille">
                <FontAwesome name="stack-overflow" />
              </IconButton>
            </React.Fragment>
          }
        />
        <CardMedia
          className={classes.media}
          image={Photo}
          title="titouancreach"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Hey!
          </Typography>
          <Typography component="p">
            I'm Titouan, full stack web developer. I love new technology and I
            spend my time writing functional code in React and Vue.
            <br />
            <br />
            Curious ?
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => history.push('/experience')}>
            Experience
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://github.com/titouancreach/portfolio">
            website source code
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withRouter(withStyles(styles)(AboutMe));

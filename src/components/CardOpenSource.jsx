import React from 'react';
import {withStyles} from 'material-ui/styles';
import OpenSource from '../images/opensource.png';
import Hyperapp from '../images/hyperapp.jpg';
import Vue from '../images/vue.png';
import Github from '../images/github.png';

import {withRouter} from 'react-router-dom';

import Card, {CardContent, CardMedia, CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

import CardStyle from '../styles/experienceCards';

import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';

const style = theme => ({
  ...CardStyle,
  media: {
    ...CardStyle.media,
    backgroundSize: 'contain'
  },
  button: {
    github: {
      margin: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit * 2
    }
  }
});


const CardExperience = (props) => {
  const {classes, history} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={OpenSource}
          title="OpenSource"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Contribution
          </Typography>
          <Typography component="p">
            I love open source and I try to contribute to it when I got some time. Here is some contribution I made
          </Typography>
          <List dense>
            <ListItem>
              <Avatar src={Vue} />
              <ListItemText
                primary={<p>(creator) <a href="https://github.com/titouancreach/vuejs-redux">vuejs-redux</a></p>}
                secondary="Highly scalable Redux connector to Vuejs component using render props"/>
            </ListItem>
            <ListItem>
              <Avatar src={Hyperapp} />
              <ListItemText
                primary={<p>(contributor) <a href="https://github.com/hyperapp/hyperapp">Hyperapp</a> and <a href="https://github.com/hyperapp/fx">Hyperapp/fx</a></p>}
                secondary="1 kB JavaScript library for building web applications / Effect as data, pattern from ELM to handle side effects in functional applications"/>
            </ListItem>
          </List>
          <Typography component="p">
            Most of the time, I use Vuejs, React in a esNext environment. I love trying some other language such as <a href="http://elm-lang.org/">Elm</a> or
            <a href="https://reasonml.github.io/">Reason</a>.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button.github} href="https://github.com/titouancreach" color="default">
            My github profile
            <img className={classes.button.rightIcon} style={{marginLeft: 12}} src={Github}></img>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withRouter(withStyles(style)(CardExperience));

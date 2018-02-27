import React from 'react';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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

const AboutMe = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Hey!
          </Typography>
          <Typography component="p">
            I'm Titouan, full stack web developer. I love new technology and I spend my time
            writing functional code in React or Vue.
            <br/><br/>
            Curious ?
            <br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Experience
          </Button>
          <Button size="small" color="primary">
            website source code
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(AboutMe);


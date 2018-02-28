import React from 'react';
import {withStyles} from 'material-ui/styles';
import Work from '../images/work.jpg';
import Cbs from '../images/cbs.png';
import Eegle from '../images/eegle.png';
import NeotecVision from '../images/ntv.png';

import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import CardStyle from '../styles/experienceCards';

import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';


const CardExperience = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Work}
          title="Work"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Experience
          </Typography>
          <List dense>
            <ListItem>
              <Avatar src={Cbs} />
              <ListItemText
                primary="CBS Interactive (artificial intelligence in python and java)"
                secondary="intern - 2012-2013"/>
            </ListItem>
            <ListItem>
              <Avatar src={NeotecVision} />
              <ListItemText
                primary="Neotec vision (image processing in C and C++)"
                secondary="intern - 2014-2015 & 2016-2017"/>
            </ListItem>
            <ListItem>
              <Avatar src={Eegle} />
              <ListItemText
                primary="Eegle (Geographic data processing, modern stack using Vuejs and python)"
                secondary="Lead dev - 2017-now"/>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(CardStyle)(CardExperience);


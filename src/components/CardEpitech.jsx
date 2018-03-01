import React from 'react';
import {withStyles} from 'material-ui/styles';
import Epitech from '../images/epitech.png';
import Python from '../images/python.svg';
import Ocaml from '../images/ocaml.svg';
import CPP from '../images/cpp.png';
import C from '../images/c.png';
import Java from '../images/java.png';
import StyledLink from './StyledLink.jsx';

import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import CardStyle from '../styles/experienceCards';

import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';


const CardEpitech = (props) => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={Epitech}
          title="Epitech"
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            Epitech
          </Typography>
          <Typography component="p">
            Graduated from Epitech Rennes (promotion 2017). I saw the basis of programming. <br/>
            At the menu:
          </Typography>
          <List dense>
            <ListItem>
              <Avatar src={C} />
              <ListItemText primary="C (memory management)"/>
            </ListItem>
            <ListItem>
              <Avatar src={CPP} />
              <ListItemText primary="C++ (object oriented programming)"/>
            </ListItem>
            <ListItem>
              <Avatar src={Python} />
              <ListItemText primary="Python (dynamic programming)"/>
            </ListItem>
            <ListItem>
              <Avatar src={Ocaml} />
              <ListItemText primary="Ocaml (functional programming)"/>
            </ListItem>
            <ListItem>
              <Avatar src={Java} />
              <ListItemText primary="Java (web services)"/>
            </ListItem>
          </List>
          <Typography component="p">
            Beside, I had the opportunity to spent one year in Dublin (Ireland) where I was graduated from <StyledLink href="https://www.griffith.ie/"> Griffith College </StyledLink>(Business certification) <br/>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(CardStyle)(CardEpitech);


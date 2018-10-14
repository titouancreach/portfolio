import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function Appbar(props) {
  const {classes, history} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.title}
            onClick={() => history.push('/')}
          >
            Portfolio
          </Typography>
          <Button color="inherit" onClick={() => history.push('/')}>
            About me
          </Button>
          <Button color="inherit" onClick={() => history.push('/experience')}>
            Education and Experience
          </Button>
          <Button color="inherit" onClick={() => history.push('/contact')}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(withStyles(styles)(Appbar))

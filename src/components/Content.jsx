import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Switch, Route} from 'react-router-dom'

import AboutMe from './AboutMe.jsx'
import Contact from './Contact.jsx'
import Experience from './Experience.jsx'

const styles = {
  content: {
    margin: 24,
  },
}

const Content = props => {
  const {classes} = props
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className={classes.content}>
              <AboutMe />
            </div>
          )}
        />
        <Route
          path="/contact"
          render={() => (
            <div className={classes.content}>
              <Contact />
            </div>
          )}
        />
        <Route
          path="/experience"
          render={() => (
            <div className={classes.content}>
              <Experience />
            </div>
          )}
        />
      </Switch>
    </main>
  )
}

export default withStyles(styles)(Content)

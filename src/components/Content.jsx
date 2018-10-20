import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Layout} from 'antd'
import {css, cx} from 'emotion'

import AboutMe from './AboutMe.jsx'
import Contact from './Contact.jsx'
import Experience from './Experience.jsx'

export default props => {
  return (
    <Layout.Content
      className={cx(
        'pa4 flex flex-column items-center',
        css`
          margin-top: 64px;
        `
      )}
    >
      <Switch>
        <Route exact path="/" render={() => <AboutMe />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/experience" render={() => <Experience />} />
      </Switch>
    </Layout.Content>
  )
}

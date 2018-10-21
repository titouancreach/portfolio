import React from 'react'
import AppBar from './AppBar.jsx'
import Content from './Content.jsx'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faStackOverflow,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'
import {Layout} from 'antd'

import {HashRouter} from 'react-router-dom'

library.add(faGithub, faTwitter, faStackOverflow, faLinkedin, faAt)

const App = () => {
  return (
    <HashRouter>
      <Layout className="min-h-100">
        <AppBar />
        <Content />
      </Layout>
    </HashRouter>
  )
}

export default App

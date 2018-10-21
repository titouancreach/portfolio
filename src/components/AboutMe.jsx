import React from 'react'

import {Link} from 'react-router-dom'
import {Card, Button, Icon} from 'antd'

import Photo from '../images/photo.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {css, cx} from 'emotion'

const GithubIcon = () => {
  return <FontAwesomeIcon icon={['fab', 'github']} />
}

const TwitterIcon = () => {
  return <FontAwesomeIcon icon={['fab', 'twitter']} />
}

const LinkedinIcon = () => {
  return <FontAwesomeIcon icon={['fab', 'linkedin']} />
}

const StackoverflowIcon = () => {
  return <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
}

const HighlightIconLink = ({color, icon, href}) => {
  return (
    <a href={href} className={cx('mr3 gray', css({':hover': {color: color}}))}>
      <Icon component={icon} />
    </a>
  )
}

export default function() {
  return (
    <Card
      className="mw7 pa3 mb3"
      cover={<img alt="me" src={Photo} />}
      extra={
        <div className="f3">
          <HighlightIconLink
            href="https://github.com/titouancreach"
            color="#000"
            icon={GithubIcon}
          />
          <HighlightIconLink
            href="https://twitter.com/titouancreach"
            color="#00ACED"
            icon={TwitterIcon}
          />
          <HighlightIconLink
            href="https://fr.linkedin.com/in/titouan-cr%C3%A9ac-h-6403a487"
            color="#2671B1"
            icon={LinkedinIcon}
          />
          <HighlightIconLink
            href="https://stackoverflow.com/users/2190535/epitouille"
            color="#F48024"
            icon={StackoverflowIcon}
          />
        </div>
      }
    >
      <h2>Hey!</h2>
      <p>
        I'm Titouan, full stack web developer. I love new technology and I spend
        my time writing functional code in React and Vue.
        <br />
        <br />
        Curious ?<br />
      </p>

      <Link to="/experience">
        <Button className="mt2">Experience</Button>
      </Link>
      <a href="https://github.com/titouancreach/portfolio" className="ml2-ns">
        <Button className="mt2">Website source code</Button>
      </a>
    </Card>
  )
}

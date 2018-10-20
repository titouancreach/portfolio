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

export default function() {
  return (
    <Card
      className="mw7 pa3 mb3"
      cover={<img alt="me" src={Photo} />}
      extra={
        <div className="f3">
          <a
            href="https://github.com/titouancreach"
            className={cx(
              'mr3 gray',
              css`
                &:hover {
                  color: #000;
                }
              `
            )}
          >
            <Icon component={GithubIcon} />
          </a>
          <a
            href="https://twitter.com/titouancreach"
            className={cx(
              'mr3 gray',
              css`
                &:hover {
                  color: #00aced;
                }
              `
            )}
          >
            <Icon component={TwitterIcon} />
          </a>
          <a
            href="https://fr.linkedin.com/in/titouan-cr%C3%A9ac-h-6403a487"
            className={cx(
              'mr3 gray',
              css`
                &:hover {
                  color: #2671b1;
                }
              `
            )}
          >
            <Icon component={LinkedinIcon} />
          </a>
          <a
            href="https://stackoverflow.com/users/2190535/epitouille"
            className={cx(
              'mr3 gray',
              css`
                &:hover {
                  color: #f48024;
                }
              `
            )}
          >
            <Icon component={StackoverflowIcon} />
          </a>
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
        <Button>Experience</Button>
      </Link>
      <a href="https://github.com/titouancreach/portfolio" className="ml2-ns">
        <Button>Website source code</Button>
      </a>
    </Card>
  )
}

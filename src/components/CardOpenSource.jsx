import React from 'react'
import OpenSource from '../images/opensource.png'
import Hyperapp from '../images/hyperapp.svg'
import Vue from '../images/vue.svg'

import {Avatar, Card, Button, List} from 'antd'

const items = [
  {
    avatar: Vue,
    title: (
      <p>
        (author){' '}
        <a href="https://github.com/titouancreach/vuejs-redux">vuejs-redux</a>
      </p>
    ),
    description:
      'Highly scalable Redux connector to Vuejs component using render props',
  },
  {
    avatar: Hyperapp,
    title: (
      <p>
        (contributor){' '}
        <a href="https://github.com/hyperapp/hyperapp">Hyperapp</a> and{' '}
        <a href="https://github.com/hyperapp/fx">Hyperapp/fx</a>
      </p>
    ),
    description:
      '1 kB JavaScript library for building web applications / Effect as data, pattern from ELM to handle side effects in functional applications',
  },
]

export default function() {
  return (
    <Card
      className="mw7 pa3 mb3"
      cover={<img alt="opensource" src={OpenSource} />}
    >
      <h2>Contribution</h2>
      <p>
        I love open source and I try to contribute to it when I got some time.
        Here are some contributions I made
      </p>
      <List
        className="mv3"
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <p>
        Most of the time, I use Vuejs, React in a esNext environment. I love
        trying some other languages such as{' '}
        <a href="http://elm-lang.org/">Elm</a> or
        <a href="https://reasonml.github.io/"> Reason </a>
      </p>
      <a href="https://github.com/titouancreach/">
        <Button icon="github">Checkout my Github profile</Button>
      </a>
    </Card>
  )
}

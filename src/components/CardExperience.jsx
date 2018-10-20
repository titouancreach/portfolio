import React from 'react'
import Work from '../images/work.jpg'
import Cbs from '../images/cbs.png'
import Eegle from '../images/eegle.png'
import NeotecVision from '../images/ntv.png'
import Klaxoon from '../images/klaxoon.png'

import {Avatar, Card, List} from 'antd'

const items = [
  {
    avatar: Cbs,
    description: 'CBS Interactive (artificial intelligence in python and java)',
    duration: 'intern - 2012-2013',
  },
  {
    avatar: NeotecVision,
    description: 'Neotec vision (image processing in C and C++)',
    duration: 'intern - 2014-2015 & 2016-2017',
  },
  {
    avatar: Eegle,
    description:
      'Eegle (Geographic data processing, modern stack using Vuejs and python)',
    duration: 'Fullstack web developper - 2017-2018',
  },
  {
    avatar: Klaxoon,
    description: 'Klaxoon',
    duration: 'Web developper - 2018-now',
  },
]

const CardExperience = props => {
  return (
    <Card className="mw7 pa3 mb3" cover={<img alt="work" src={Work} />}>
      <h2> Experience </h2>
      <List
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.description}
              description={item.duration}
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

export default CardExperience

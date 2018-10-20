import React from 'react'
import Epitech from '../images/epitech.jpg'
import Python from '../images/python.svg'
import Ocaml from '../images/ocaml.svg'
import CPP from '../images/cpp.png'
import C from '../images/c.png'
import Java from '../images/java.png'

import {Card, List, Avatar} from 'antd'

const list = [
  {
    avatar: C,
    description: 'C (memory management)',
  },
  {
    avatar: CPP,
    description: 'C++ (object oriented programming)',
  },
  {
    avatar: Python,
    description: 'Python (dynamic programming)',
  },
  {
    avatar: Ocaml,
    description: 'Ocaml (functional programming)',
  },
  {
    avatar: Java,
    description: 'Java (web services)',
  },
]

const CardEpitech = () => {
  return (
    <Card className="mw7 pa3 mb3" cover={<img alt="epitech" src={Epitech} />}>
      <h2> Education </h2>
      Graduated from Epitech Rennes (promotion 2017). I saw the basics of
      programming. <br />
      At the menu:
      <List
        className="mv3"
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.description}
            />
          </List.Item>
        )}
      />
      <p>
        Beside, I had the opportunity to travel one year in Dublin (Ireland)
        where I was graduated from{' '}
        <a href="https://www.griffith.ie/">Griffith College</a> (Business
        certification) <br />
      </p>
    </Card>
  )
}

export default CardEpitech

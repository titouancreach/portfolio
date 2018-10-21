import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Layout, Menu} from 'antd'
import {css, cx} from 'emotion'

function Appbar(props) {
  const path = props.location.pathname
  return (
    <Layout.Header className="w-100 fixed z-1  w-100 flex justify-between ph3-ns ph1">
      <Link
        to="/"
        className={cx(
          'mr6',
          css({
            ':focus': {
              textDecoration: 'none',
            },
          })
        )}
      >
        <h1 className="ma0 white no-underline">Portfolio</h1>
      </Link>
      <Menu
        selectedKeys={[path]}
        mode="horizontal"
        className={cx(css({lineHeight: '64px', minWidth: 0}))}
        theme="dark"
      >
        <Menu.Item key="/">
          <Link to="/">About me</Link>
        </Menu.Item>
        <Menu.Item key="/experience">
          <Link to="/experience">Education & Experience</Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )
}

export default withRouter(Appbar)

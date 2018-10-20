import React from 'react'
import {Card, Form, Button, Input, Icon} from 'antd'
import {css} from 'emotion'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EmailIcon = () => {
  return (
    <FontAwesomeIcon
      icon="at"
      className={css`
        color: #bebebe;
      `}
    />
  )
}
class Contact extends React.Component {
  handleSumbit = e => {
    this.props.form.validateFields((err, values) => {
      if (err) {
        e.preventDefault()
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Card className="pa3 w-60-ns">
        <Form
          onSubmit={this.handleSumbit}
          action="https://jumprock.co/mail/titouancreach"
          method="post"
        >
          <Form.Item label="email" htmlFor="email">
            {getFieldDecorator('email', {
              rules: [
                {required: true, message: 'Email is required'},
                {type: 'email', message: 'Invalid email'},
              ],
            })(
              <Input
                prefix={<Icon component={EmailIcon} />}
                type="email"
                name="email"
                placeholder="example@domain.com"
              />
            )}
          </Form.Item>
          <Form.Item label="subject" htmlFor="subject">
            {getFieldDecorator('subject', {
              rules: [{required: true, message: 'Subject is required'}],
            })(<Input type="text" placeholder="[Subject]" name="subject" />)}
          </Form.Item>
          <Form.Item label="message" htmlFor="message">
            {getFieldDecorator('message', {
              rules: [{required: true, message: 'Email is required'}],
            })(
              <Input.TextArea
                type="text"
                placeholder="Dear Titouan, ..."
                name="message"
                autosize
              />
            )}
          </Form.Item>
          <input
            type="hidden"
            name="after"
            value={`${window.location.origin}/portfolio`}
          />
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(Contact)

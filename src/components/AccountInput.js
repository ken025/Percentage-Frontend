import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/accountAction'

import {Button, Form} from 'react-bootstrap'

class AccountInput extends React.Component {

  state = {
    name: '',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
    this.setState({
      name: '',
      balance: ''
    })
    this.props.history.push('/accounts');
  }

  render() {
    return (
      <div><br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Account Name: </Form.Label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <Form.Label>Available Balance: </Form.Label>
          <input type='number' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
          <Button type="submit"> Submit </Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, {addAccount})(AccountInput)
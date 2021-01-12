import React from 'react'
import {connect} from 'react-redux'
import { editAccount } from '../actions/accountAction'

import {Button} from 'react-bootstrap'

class AccountEdit extends React.Component {

  state = {
    name: "",
    balance: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    let account = {...this.state, id: this.props.account.id}
    this.props.editAccount(account)
    this.setState({
      name: '',
      balance: ''
    })
  }

  render() {
    console.log("edit props", this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Edit Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Edit Balance: </label>
          <input type='number' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
          <Button type="submit"> Submit </Button>
        </form>
      </div>
    )
  }
}

AccountEdit.defaultProps = {
  accounts: {}
}


export default connect(null, {editAccount})(AccountEdit)
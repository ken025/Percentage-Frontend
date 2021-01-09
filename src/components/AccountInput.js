import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/accountAction'

class AccountInput extends React.Component {

  state = {
    name: '',
    balance: 0
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
      balance: 0
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Account Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Available Balance: </label>
          <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addAccount})(AccountInput)
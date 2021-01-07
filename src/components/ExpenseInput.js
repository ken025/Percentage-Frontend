import React from 'react'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenseAction'

class ExpenseInput extends React.Component {

  state = {
    kind: 'deposit',
    charge: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addExpense(this.state, this.props.account.id)
    this.setState({
        kind: 'deposit',
        charge: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Transaction Type:</label>
          <select name="kind" value={this.state.kind} onChange={this.handleChange}>
            <option>deposit</option>
            <option>withdraw</option>
          </select>
          <label>Transaction charge:</label>
          <input type="text" name="charge" value={this.state.charge} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )

  }
}


export default connect(null, {addExpense})(ExpenseInput)
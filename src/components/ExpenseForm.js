import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addExpense } from '../actions/expenseAction' 
//forms have controlled states because react likes local components 
//the value of our input fields are controlled by state

class ExpenseForm extends Component {

    state = { 
        name: "",
        charge: 0,
        user_id: 1
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addExpense(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>Bill: </label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>

                <label>Charge: </label>
                <input type="number" value={this.state.charge} onChange={this.handleChange} name="charge"/>
                <input type='submit' value="Add Expense" />
            </form>
        );
    }
}

export default connect(null, { addExpense })(ExpenseForm);
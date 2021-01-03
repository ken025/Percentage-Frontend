import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addExpense } from '../actions/expenseAction' 
//forms have controlled states because react likes local components 
//the value of our input fields are controlled by state

class ExpenseForm extends Component {

    state = { 
        name: "",
        charge: 0,
        user_id: null
    }

    handleChange = e => {
        const { name, value } = e.target
        const userId = this.props.user.id
        this.setState({
            [name]: value,
            user_id: userId
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addExpense(this.state)
    }

    render() {
        console.log(this.props.user.id)
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

const mapStateToProps = (state) => (
    {user: state.user}
)

export default connect(mapStateToProps, { addExpense })(ExpenseForm);
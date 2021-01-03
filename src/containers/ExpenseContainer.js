import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchExpenses } from '../actions/expenseAction'
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';


class ExpenseContainer extends Component {

    componentDidMount(){
        this.props.fetchExpenses()
    }

    render() {
        return (
            this.props.user.id 
             ?
            <div>
                Expense Container
                <ExpenseForm/>
                <ExpenseList/>
            </div>
            :
            <>
            </>
        );
    }
}

const mapStateToProps = (state) => (
    {user: state.user}
  )

export default connect(mapStateToProps, { fetchExpenses })(ExpenseContainer);
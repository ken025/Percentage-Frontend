import React, { Component } from 'react';
import { connect } from 'react-redux'

import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';


class ExpenseContainer extends Component {

    render() {
        return (
            this.props.user.id 
             ?
            <div>
                Expense Container
                <ExpenseForm/>
                <br />
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

export default connect(mapStateToProps)(ExpenseContainer);
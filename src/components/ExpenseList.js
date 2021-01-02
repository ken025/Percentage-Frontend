import React from 'react';
import { connect } from 'react-redux'
import ExpenseCard from './ExpenseCard'


const ExpenseList = ( {expenses} ) => {
    
    return (
        <div>
            {expenses.map(expense => <ExpenseCard key = {expense.id} {...expense} />)}
        </div>
    );
};

const mapStateToProps = state => {
    return { expenses: state.expenses}
}

export default connect(mapStateToProps)(ExpenseList);
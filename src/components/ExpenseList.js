import React from 'react';
import { connect } from 'react-redux'
import ExpenseCard from './ExpenseCard'


const ExpenseList = ( {expenses} ) => {
    
    return (
        <div>
            {expenses.map(expense => <ExpenseCard key = {expense.id} {...expense} />)}
            {/* {goals.map(goal => <GoalItems key = {goal.id} {...goal}/> )} */}
        </div>
    );
};

const mapStateToProps = state => {
    return { expenses: state.expenses}
}

export default connect(mapStateToProps)(ExpenseList);
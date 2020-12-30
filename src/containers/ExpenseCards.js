import React from 'react'
import { connect } from 'react-redux'
import { expensesReducer } from '../reducers/expensesReducer'
import ExpenseCard from '../components/ExpenseCard'
 
const ExpenseCards = (props) => {
    console.log(props.expenses)
    return(
        <div className="cards"> 
        Expense Cards Go Here!
        {props.expenses.map(expense => <ExpenseCard key = {expensesReducer.id} {...expense} />)}
        </div>
        )
}

const msp = (state) => ({
    expenses: state.expenses.expenses
})
export default connect(msp)(ExpenseCards);
// import React from 'react';
// import { connect } from 'react-redux'
// import ExpenseCard from './ExpenseCard'


// const ExpenseList = ( {expenses} ) => {
    
//     return (
//         <div>
//             {expenses.map(expense => <ExpenseCard key = {expense.id} {...expense} />)}
//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return { expenses: state.expenses}
// }

// export default connect(mapStateToProps)(ExpenseList);

import React from 'react'
import {connect} from 'react-redux'
import {deleteExpense} from '../actions/expenseAction'

class ExpenseList extends React.Component {

state = {}

 handleDelete = (expense) => {
    this.props.deleteExpense(expense.id, expense.account_id)
  }

vote = (id) => {
  this.state[id] ? this.setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
}

render() {
  return (
      <div>
        {this.props.expenses && this.props.expenses.map(expense =>
          <li key={expense.id}>{expense.date} - {expense.kind} - {expense.charge}
            <button onClick={() => this.vote(expense.id)}>Vote {this.state[expense.id] ? this.state[expense.id] : 0}</button>
            <button onClick={() => this.handleDelete(expense)}>Delete</button></li>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteExpense})(ExpenseList)
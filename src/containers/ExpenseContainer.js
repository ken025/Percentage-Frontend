// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import Demo from '../components/DoughnutChart';

// import ExpenseInput from '../components/ExpenseInput'
// import ExpenseForm from '../components/ExpenseForm';
// import ExpenseList from '../components/ExpenseList';


// class ExpenseContainer extends Component {

//     render() {
//         return (
//             this.props.user.id 
//              ?
//             <div>
//                 Expense Container
//                 {/* <ExpenseForm account={this.props.account}/> */}
//                 <ExpenseInput account={this.props.account}/>
//                 <br />
//                 <ExpenseList expenses={this.props.account && this.props.account.expenses}/>
//                 <br />
//                 <Demo/>
//             </div>
//             :
//             <>
//             </>
//         );
//     }
// }

// const mapStateToProps = (state) => (
//     {user: state.user}
//   )

// export default connect(mapStateToProps)(ExpenseContainer);

import React from 'react'
import ExpenseInput from '../components/ExpenseInput'
import ExpenseList from '../components/ExpenseList'

class ExpensesContainer extends React.Component {


  render() {
    return (
      <div>
          <ExpenseInput account={this.props.account}/><br/>
          <ExpenseList expenses={this.props.account && this.props.account.Expenses}/>
      </div>

    )

  }

}

export default ExpensesContainer
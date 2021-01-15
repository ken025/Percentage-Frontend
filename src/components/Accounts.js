import React from 'react'
import { connect } from 'react-redux'
import {Route, Link} from 'react-router-dom'
import Account from './Account'
import {ListGroup, Button} from 'react-bootstrap'

import {deleteAccount} from '../actions/accountAction'

class Accounts extends React.Component {

  // stored internally 
  state = {
  sorted: false
  }

  handleToggle = () =>{
    this.setState({sorted: !this.state.sorted})
  }


// console.log("accnt", props)
render(){
  return (
    <>
    {this.state.sorted
    ?
    <>
      <ListGroup>
      <Button onClick={this.handleToggle}>Sort</Button>
      {[...this.props.accounts].sort((a, b) => (a.balance > b.balance) ? 1 : -1).map(account =>
        <ListGroup.Item key={account.id} id="list">
         <h3><Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link></h3> 
         {/* anonymous function */}
          <Button onClick={() => this.props.deleteAccount(account.id)}>Delete</Button>
        </ListGroup.Item>
        )}
        <Link to='/accounts/new'><Button>Add Account</Button> </Link>  
        </ListGroup>
    </>
    :
    <>
    <ListGroup>
    <Button onClick={this.handleToggle}>UnSort</Button>
    {[...this.props.accounts].map(account =>
      <ListGroup.Item key={account.id} id="list">
       <h3><Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link></h3> 
       {/* anonymous function */}
        <Button onClick={() => this.props.deleteAccount(account.id)}>Delete</Button>
      </ListGroup.Item>
      )}
      <Link to='/accounts/new'><Button>Add Account</Button> </Link>  
      </ListGroup>
      </>

} 
</>
)
}
}

const mapStateToProps = (state) => ({
  accounts: state.accounts
})

export default connect(mapStateToProps, {deleteAccount})(Accounts)
import React from 'react'
import { connect } from 'react-redux'
import {Route, Link} from 'react-router-dom'
import Account from './Account'
import {ListGroup, Button} from 'react-bootstrap'

import {deleteAccount} from '../actions/accountAction'

const Accounts = (props) => {
console.log("accnt", props)

  return (
    <>
      <ListGroup>
      {props.accounts.map(account =>
        <ListGroup.Item key={account.id} id="list">
         <h3><Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link></h3> 
         {/* anonymous function */}
          <Button onClick={() => props.deleteAccount(account.id)}>Delete</Button>
        </ListGroup.Item>
        )}
        <Link to='/accounts/new'><Button>Add Account</Button> </Link>  
        </ListGroup>
    </>
  )
}

const mapStateToProps = (state) => ({
  accounts: state.accounts
})

export default connect(mapStateToProps, {deleteAccount})(Accounts)
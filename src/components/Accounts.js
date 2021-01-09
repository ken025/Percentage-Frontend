import React from 'react'
import {Route, Link} from 'react-router-dom'
import Account from './Account'
import {ListGroup, Button} from 'react-bootstrap'

const Accounts = (props) => {

  return (
    <>
      <ListGroup>
      {props.accounts.map(account =>
        <ListGroup.Item key={account.id} id="list">
         <h3><Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link></h3> 
        </ListGroup.Item>
        )}
        <Link to='/accounts/new'><Button>Add Account</Button> </Link>  
        </ListGroup>
    </>
  )
}

export default Accounts
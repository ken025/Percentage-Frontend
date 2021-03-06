import React from 'react'

import { connect } from 'react-redux'; 
import { Redirect } from 'react-router-dom'
import AccountEdit from './AccountEdit'

const Account = (props) => {

  console.log(props)
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
  console.log("account", account)


  return (
    <div>
      <h2>
        <h1 id="form-title">
          {account ? account.name : null} - {account ? account.balance : null}
        </h1> 
      </h2>
      <h4>Edit Account</h4>
      <AccountEdit account={account} />
    </div>
  )
}

const mapStateToProps = state => {
  return { accounts: state.accounts }
}

export default connect(mapStateToProps, {})(Account)
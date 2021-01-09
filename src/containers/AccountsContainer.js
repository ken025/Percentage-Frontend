import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/accountAction'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'
import NavigationBar from '../components/NavigationBar'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
      return (
          <div>
            <NavigationBar/>
            <Switch>
              <Route path='/accounts/new' component={AccountInput}/>
                                                                            {/* Passing in props */}
              <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
              <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
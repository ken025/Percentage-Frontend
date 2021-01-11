import React, { Component } from 'react'
import './App.css';

import { autoLogin, logout } from './actions/userActions';
import Login from './components/Login';

import { connect } from "react-redux";
import NavigationBar from './components/NavigationBar';

import Router from './components/Router'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import AccountsContainer from './containers/AccountsContainer'
import { fetchAccounts } from './actions/accountAction';


class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()

    // this.props.fetchResoucers()
    this.props.fetchAccounts()
  }

  renderMainContainer = () => {
    return(
      this.props.user.id 
      ?
         <NavigationBar logout={this.props.logout}/>
         
      :
        <Login/>

    )
  }  

  render() {
    return (
    <div className="App">
      <main>{this.renderMainContainer()}</main>
      <Router />
    </div>
    );
  }
}
  
const mapStateToProps = (state) => (
  {user: state.user}
)
  


export default connect(mapStateToProps, { fetchAccounts, autoLogin, logout})(App);
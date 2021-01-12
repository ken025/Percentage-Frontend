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
import { fetchResources } from './actions/resourceAction'
import Home from './components/Home';

class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()

    this.props.fetchResources()
    this.props.fetchAccounts()
  }

  renderMainContainer = () => {
    return(
      this.props.user.id 
      ?
      <>
      <NavigationBar logout={this.props.logout}/>
        <Router />
      </>
         
      :
        <Login/>

    )
  }  

  render() {
    return (
    <div className="App">
      <main>{this.renderMainContainer()}</main>
    </div>
    );
  }
}
  
const mapStateToProps = (state) => (
  {user: state.user}
)
  


export default connect(mapStateToProps, { fetchAccounts, fetchResources, autoLogin, logout})(App);
import React, { Component } from 'react'
import './App.css';

import { autoLogin, logout, toggleSignup } from './actions/userActions';
import Login from './components/Login';

import { connect } from "react-redux";
import NavigationBar from './components/NavigationBar';

import Router from './components/Router'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchAccounts } from './actions/accountAction';
import { fetchResources } from './actions/resourceAction'
import Footer from './components/Footer';

class App extends Component {

  componentDidMount(){
    // checks for token to autologin
    localStorage.token && this.props.autoLogin()

    // makes these actions (fetch) available globally
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
      <>
        <Login/>
        <br /><br />
        <Footer/>
        </>
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
 
// used to provide the store data to the component
const mapStateToProps = (state) => (
  {user: state.user}
)

export default connect(mapStateToProps, { fetchAccounts, fetchResources, autoLogin, logout })(App);
import React, { Component } from 'react'
import './App.css';

import { autoLogin, logout } from './actions/userActions'
// import { autoLogin, logout } from './actions/userActions';
import Login from './components/Login';

import { connect } from "react-redux";
import { fetchExpenses } from './actions/expenseAction'
import NavigationBar from './components/Navbar';

import Router from './components/Router'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()

    // this.props.setSavings()
    this.props.fetchExpenses()
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
  


export default connect(mapStateToProps, { fetchExpenses, autoLogin, logout})(App);
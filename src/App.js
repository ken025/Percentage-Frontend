import React, { Component } from 'react'
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {autoLoginRequest} from './services/requests'
import { connect } from "react-redux";
import { setSavings, setExpenses, logout } from './actions/actionCreator'
import NavigationBar from './components/Navbar';

import Router from './components/Router'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  // state = {
  //   user: {
  //     id: null,
  //     name: "",
  //     username: "",
  //     email: "",
  //     profile_img: "",
  //     income: null,
  //     balance: null
  //   },
  //   signup: false
  // }

  componentDidMount(){

    // this.props.setSavings()
    this.props.setExpenses()

    if (localStorage.token){
      autoLoginRequest()
      .then(response => {
        console.log(response)
        if (!response.errors){
          this.setUser(response)
        } else {
          alert(response.errors)
        }
      })
    }
  }

  renderMainContainer = () => {
    return(
      // we cannot use if statements in jsx
      this.state.user.id ? 
      <NavigationBar logout={this.logout}/> : this.state.signup ?
          <Signup setUser={this.setUser} toggleSignup={this.toggleSignup}/> :
          <Login setUser={this.setUser} toggleSignup={this.toggleSignup}/>
    );
  }

  setUser = (response) => {
    this.setState({user: response.user}) 
    localStorage.token = response.token
  }

  toggleSignup = () => this.setState({signup: !this.state.signup})

  // logout = () => {
  //   this.setState({
  //     user: {
  //       id: null,
  //       name: "",
  //       username: "",
  //       email: "",
  //       profile_img: "",
  //       income: null
  //     }
  //     })
  //     localStorage.clear("user_id")
  // }

  render() {
    return (
    <div className="App">
            <main><this.renderMainContainer/></main>
            <Router />
            <button onClick={this.props.logout}>Logout!</button>
    </div>
    );
  }
}


export default connect(null, { setSavings, setExpenses, logout})(App);
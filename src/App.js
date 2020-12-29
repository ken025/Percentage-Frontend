import React, { Component } from 'react'
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import {autoLoginRequest} from './services/requests'
import { connect } from "react-redux";
import { setSavings } from './actions/actionCreator'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  state = {
    user: {
      id: null,
      name: "",
      username: "",
      email: "",
      profile_img: "",
      income: null
    },
    signup: false
  }

  componentDidMount(){

    this.props.setSavings()

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
      <Welcome/> :
        this.state.signup ?
          <Signup setUser={this.setUser} toggleSignup={this.toggleSignup}/> :
          <Login setUser={this.setUser} toggleSignup={this.toggleSignup}/>

      // this.state.channel ?
      //   <MessageContainer channel={this.state.channel}/> :
      //   <Welcome/>
      // :
      //   this.state.signup ?
      //     <Signup setUser={this.setUser} toggleSignup={this.toggleSignup}/> :
      //     <Login setUser={this.setUser} toggleSignup={this.toggleSignup}/>
    );
  }

  setUser = (response) => {
    this.setState({user: response.user}) 
    localStorage.token = response.token
  }

  toggleSignup = () => this.setState({signup: !this.state.signup})

  logout = () => {
    this.setState({
      user: {
        id: null,
        name: "",
        username: "",
        email: "",
        profile_img: "",
        income: null
      }
      })
      localStorage.clear("user_id")
  }

  render() {
    return (
    <div className="App">
      <main><this.renderMainContainer/></main>
    </div>
    );
  }
}


export default connect(null, { setSavings})(App);
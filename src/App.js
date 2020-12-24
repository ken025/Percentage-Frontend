import React, {Component} from 'react'
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';


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

  setUser = (user) => this.setState({user: user.user})

  toggleSignup = () => this.setState({signup: !this.state.signup})

  render() {
    return (
    <>
      <h1>
        PERCENTAGE
      </h1>
      <main><this.renderMainContainer/></main>
    </>
    );
  }
}
export default App;
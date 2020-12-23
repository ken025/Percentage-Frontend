import React, {Component} from 'react'
import './App.css';
import Welcome from './components/Welcome';
// import Login from './components/Login';
// import Signup from './components/Signup';


class App extends Component {

  state = {
    user: {
      id: null,
      name: "",
      username: "",
      email: "",
      profile_img: "",
      income: null
    }
  }
  

  render() {
    return (
    <>
      <h1>
        PERCENTAGE
      </h1>
      <main><Welcome/></main>
    </>
    );
  }
}
export default App;
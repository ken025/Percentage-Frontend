// import React, { Component} from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { loginRequest } from '../services/requests';

// export default class Login extends Component {
   
//     // state makes this a controlled component
//     state = {
//         username: "",
//         password: ""
//     }

//     handleChange = (e) => setState({[e.target.name]: e.target.value})

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const { username, password} = this.state
//         // backend is expecting username and password params
//         const body = {user: {username: username, password: password}}
//             loginRequest(body)
//         .then(resp => {
//             if (!resp.errors) {
//                 this.props.setUser(resp)
//             } else {
//                 alert(resp.errors)
//             }
//         })
//     }

//     render(){
//         return(
//             <>
            //     <h1>This is my Login Component</h1>
            //     <Form onSubmit={this.handleSubmit}>
            //         <Form.Group controlId="formUsername" className="mx-sm-5 mb-2">
            //             <Form.Control type="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username"></Form.Control>
            //         </Form.Group><br />
            //         <Form.Group controlId="formPassword" className="mx-sm-5 mb-2">
            //             <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"></Form.Control>
            //         </Form.Group>
            //         <br/>
            //         <Button variant="secondary" type="submit" id="form-button">Login</Button> 
            //     </Form>
            //     <br/>
            //     Or
            //     <Button onClick={this.props.toggleSignup}>Sign Up!</Button>
            // </>
//         )
//     }
// }


import React from 'react'
import { connect } from 'react-redux'
import {Button, Form} from 'react-bootstrap'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../actions/userActions'

const Login = (props) => {
    const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
    const { username, password, passwordConfirmation, email, profile_img, name, income, balance } = form
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (signup){
        if (password === passwordConfirmation){
          sendSignup({username, password, email, profile_img, name, income, balance})
        } else {
          alert("Those passwords don't match!")
        }
      } else {
        sendLogin({username: username, password: password})
      }
    }

    return(
        <>
          {signup ?
          <>
           <h1 id="form-title" style={{background: '#82c7a5a9'}} >PERCENTAGE</h1> 
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className="mx-sm-5 mb-1">
                        <Form.Control type="text" name="name" onChange={handleLoginFormChange} value={name} placeholder="Name"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formEmail" className="mx-sm-5 mb-1">
                        <Form.Control type="email" name="email" onChange={handleLoginFormChange} value={email} placeholder="Email"></Form.Control>
                    </Form.Group><br/>
                    <Form.Group controlId="formUsername" className="mx-sm-5 mb-1">
                        <Form.Control type="text" name="username" onChange={handleLoginFormChange} value={username} placeholder="Username"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formPassword" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="password" onChange={handleLoginFormChange} value={password} placeholder="Password"></Form.Control>
                    </Form.Group><br/>
                    <Form.Group controlId="formPasswordConfirmation" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="passwordConfirmation" onChange={handleLoginFormChange} value={passwordConfirmation} placeholder="Confirm Password"></Form.Control>
                    </Form.Group><br/>
                    <Button variant="secondary" type="submit" id="form-button" >Sign Up</Button> 
                    </Form><br/>
                <br/>
                Already have an account? 
               <Button onClick={toggleSignup} id="form-toggle">Log In</Button> 
                </>
                :
                <>
                 <h1>This is my Login Component</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername" className="mx-sm-5 mb-2">
                        <Form.Control type="username" name="username" onChange={handleLoginFormChange} value={username} placeholder="Username"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formPassword" className="mx-sm-5 mb-2">
                        <Form.Control type="password" name="password" onChange={handleLoginFormChange} value={password} placeholder="Password"></Form.Control>
                    </Form.Group><br/>
                        <Button variant="secondary" type="submit" id="form-button">Login</Button> 
                </Form>
                <br/>
                Or
                <Button onClick={toggleSignup}>Sign Up!</Button>
                </>

            } 
        </>
    )
}

const mapStateToProps = (state) => ({
    signup: state.user.signup,
    form: state.user.loginForm
  })
  
  export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)
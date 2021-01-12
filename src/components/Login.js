import React from 'react'
import { connect } from 'react-redux'
import {Button, Form} from 'react-bootstrap'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../actions/userActions'

import { FaPercentage } from 'react-icons/fa'
import Home from './Home'

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
          {signup 
          ?
          <>
           <h1 id="form-title">PERCENTAGE <FaPercentage/></h1> 
            <Home/> <br />
            <h3>Sign Up</h3>
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
                     <h1 id="form-title"> PERCENTAGE <FaPercentage/> </h1>
                     <Home/> <br />
                        <h3> Log In</h3>
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
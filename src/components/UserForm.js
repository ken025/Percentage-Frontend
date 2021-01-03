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
           <h1 id="form-title" style={{background: '#82c7a5a9'}} >Edit Info</h1> 
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className="mx-sm-5 mb-1">
                        <Form.Control type="text" name="name" onChange={handleLoginFormChange} value={name} placeholder="Name"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formUsername" className="mx-sm-5 mb-1">
                        <Form.Control type="text" name="username" onChange={handleLoginFormChange} value={username} placeholder="Username"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formPassword" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="password" onChange={handleLoginFormChange} value={password} placeholder="Password"></Form.Control>
                    </Form.Group><br/>
                    <Form.Group controlId="formPasswordConfirmation" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="passwordConfirmation" onChange={handleLoginFormChange} value={passwordConfirmation} placeholder="Confirm Password"></Form.Control>
                    </Form.Group><br/>
                    <Button variant="secondary" type="submit" id="form-button" >Update</Button> 
                    </Form><br/>
                </>
    )
}

const mapStateToProps = (state) => ({
    form: state.user.loginForm
  })
  
  export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)
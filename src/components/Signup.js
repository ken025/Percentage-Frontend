import React, { Component} from 'react';
import { Button, Form } from 'react-bootstrap';
import { signupRequest } from '../services/requests';

export default class Signup extends Component {
   
    // state makes this a controlled component
    state = {
        name: "",
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, username, password, passwordConfirmation} = this.state   
        if (password === passwordConfirmation){
        // backend is expecting username and password params
        const body = {user: {name, email, username, password}}
        signupRequest(body)
        .then(resp => {
            if (!resp.errors) {
                this.props.setUser(resp)
                console.log(resp)
            } else {
                alert(resp.errors)
            }
        })
    } else {
        alert("Passwords do not match")
    }
}
      

    render(){
        return(
            <>
                    <h1 id="form-title">PERCENTAGE</h1> 
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formName" className="mx-sm-5 mb-1">
                        <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formEmail" className="mx-sm-5 mb-1">
                        <Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email"></Form.Control>
                    </Form.Group><br/>
                    <Form.Group controlId="formUsername" className="mx-sm-5 mb-1">
                        <Form.Control type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formPassword" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"></Form.Control>
                    </Form.Group><br/>
                    <Form.Group controlId="formPasswordConfirmation" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder="Confirm Password"></Form.Control>
                    </Form.Group><br/>
                    <Button variant="secondary" type="submit" id="form-button">Sign Up</Button> 
                    </Form><br/>
                <br/>
                Already have an account? 
               <Button onClick={this.props.toggleSignup} id="form-toggle">Log In</Button> 
            </>
        )
    }
}
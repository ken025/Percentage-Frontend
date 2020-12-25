import React, { Component} from 'react';
import { Button, Form } from 'react-bootstrap';

export default class Login extends Component {
   
    // state makes this a controlled component
    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, password} = this.state
        // backend is expecting username and password params
        const body = {user: {username: username, password: password}}
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        .then(resp => resp.json())
        .then(resp => {
            if (!resp.errors) {
                this.props.setUser(resp)
            } else {
                alert(resp.errors)
            }
        })
    }

    render(){
        return(
            <>
                <h1>This is my Login Component</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formUsername" className="mx-sm-5 mb-2">
                        <Form.Control type="username" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Username"></Form.Control>
                    </Form.Group><br />
                    <Form.Group controlId="formPassword" className="mx-sm-5 mb-2">
                        <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password"></Form.Control>
                    </Form.Group>
                    <br/>
                    <Button variant="secondary" type="submit" id="form-button">Login</Button> 
                </Form>
                <br/>
                Or
                <Button onClick={this.props.toggleSignup}>Sign Up!</Button>
            </>
        )
    }
}
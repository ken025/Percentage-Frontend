import React, { Component} from 'react';

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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username:
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </label>
                    <input type="submit" value="Login" />
                </form>
                <br/>
                <button onClick={this.props.toggleSignup}>Or Sign Up!</button>
            </>
        )
    }
}
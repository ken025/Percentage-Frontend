import React, { Component} from 'react';

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
        fetch('http://localhost:3000/api/v1/users', {
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
                <h1>This is my Signup Component</h1>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                        <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </label><br /><br />
                    <label> 
                        Name:
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    </label><br /><br />
                    <label>
                        Username:
                        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                    </label><br /><br />
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    </label><br /><br />
                    <label>
                        Password Confirmation:
                        <input type="password" name="passwordConfirmation" onChange={this.handleChange} value={this.state.passwordConfirmation}/>
                    </label>
                    <input type="submit" value="Signup" />
                </form>
                <br />
                Already have an account?
                <button onClick={this.props.toggleSignup}> Login!</button>
            </>
        )
    }
}
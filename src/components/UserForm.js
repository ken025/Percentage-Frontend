import React from 'react'
import { connect } from 'react-redux'
import {Button, Form} from 'react-bootstrap'
import { handleLoginFormChange, sendUpdateProfile } from '../actions/userActions'

const UserForm = (props) => {
    const { form, handleLoginFormChange, sendUpdateProfile, user } = props
    const { balance, email, id, income, loginForm, name,  profile_img, signup, username } = user
    const {lFBalance, lFEmail, lFIncome, lFName, password, lFPasswordConfirmation, lFProfile_img, lFUsername} = loginForm
    const password = loginForm.password
    // const originalPassword = password

    const handleSubmit = (e) => {
      e.preventDefault()
        // if (password === originalPassword){
          if (true){
          sendUpdateProfile([{balance: balance, email: email, income: income, name: name, password: password, profile_img: profile_img, username: username}, user.id])
        } else {
          alert("Those passwords don't match!")
        }
    }
console.log("Info", props)
console.log("PW", password)
    return(
          <>
<h1 id="form-title" style={{background: '#82c7a5a9'}} >Edit Income</h1><br />

           <h1 id="form-title" style={{background: '#82c7a5a9'}} >Edit Info</h1><br />
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
                    {/* <Form.Group controlId="formPasswordConfirmation" className="mx-sm-5 mb-1">
                        <Form.Control type="password" name="passwordConfirmation" onChange={handleLoginFormChange} value={passwordConfirmation} placeholder="Confirm Password"></Form.Control>
                    </Form.Group><br/> */}
                    <Button variant="secondary" type="submit" id="form-button" >Update</Button> 
                    </Form><br/>
                </>
    )
}

const mapStateToProps = (state) => ({
  user: state.user
    // form: state.user.loginForm,
    // user: state.user.id
  })
  
  export default connect(mapStateToProps, { handleLoginFormChange, sendUpdateProfile })(UserForm)
import React from 'react'
import { connect } from 'react-redux'
import {Button, Form, Card, CardDeck} from 'react-bootstrap'
import { handleLoginFormChange, sendUpdateProfile } from '../actions/userActions'

const UserForm = (props) => {
    const { form, handleLoginFormChange, sendUpdateProfile, user_id } = props
    const { balance, email, income, name, password, passwordConfirmation, profile_img, username } = form
    const originalPassword = password

    const handleSubmit = (e) => {
      e.preventDefault()
        if (password === originalPassword){
          sendUpdateProfile([{balance: balance, email: email, income: income, name: name, password: password, profile_img: profile_img, username: username}, user_id])
        } else {
          alert("Those passwords don't match!")
        }
    }
console.log("Info", props)
    return(
          <>
            <CardDeck>
                <Card style={{ width: '18rem', background: 'black' }}>
                <h1 id="form-title">Proile</h1><br />
                    <h2> {props.user.income}</h2>
                    <h2> {props.user.name}</h2>
                    <h2> {props.user.username}</h2>
                    <h2> {props.user.email}</h2>
                </Card>

                <Card style={{ width: '40rem', background: 'black' }}>
                    <h1 id="form-title" >Update Income</h1><br />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formIncome" className="mx-sm-5 mb-1">
                            <Form.Control type="number" name="income" onChange={handleLoginFormChange} value={income} placeholder="Income"></Form.Control>
                            </Form.Group><br />
                            <Button variant="secondary" type="submit" id="form-button" >Update</Button> 
                        </Form><br/>`
                </Card>

                <Card style={{ width: '80rem', background: 'black' }}>
                    <h1 id="form-title" >Edit Info</h1><br />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName" className="mx-sm-5 mb-1">
                            <Form.Control type="text" name="name" onChange={handleLoginFormChange} value={name} placeholder="Name"></Form.Control>
                            </Form.Group><br />
                            <Form.Group controlId="formUsername" className="mx-sm-5 mb-1">
                                <Form.Control type="text" name="username" onChange={handleLoginFormChange} value={username} placeholder="Username"></Form.Control>
                            </Form.Group><br />
                            <Button variant="secondary" type="submit" id="form-button" >Update</Button> 
                    </Form><br/>
                </Card>
            </CardDeck>
        </>
    )
}

const mapStateToProps = (state) => ({
    form: state.user.loginForm,
    user_id: state.user.id,
    user: state.user
  })
  
  export default connect(mapStateToProps, { handleLoginFormChange, sendUpdateProfile })(UserForm)
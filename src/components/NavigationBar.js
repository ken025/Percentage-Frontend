import {Navbar, Nav, Button} from 'react-bootstrap'
import React from 'react'

const NavigationBar = (props) => {
    return (
    <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="#" id="nav-brand">
            <img
            src = 'https://www.freelogodesign.org/file/app/client/thumb/cafb1edc-efd8-4c6f-bbc1-db858578ed43_200x200.png?1610318399285'
            width="60"
            height="60"
            className="d-inline-block align-top"
            />
            PERCENTAGE</Navbar.Brand>
        <Nav className="justify-content-end" >
             <Nav.Link href="http://localhost:3001/" id="nav-text">Home</Nav.Link>
             <Nav.Link href="http://localhost:3001/accounts/" id="nav-text" >Accounts</Nav.Link>
             <Nav.Link href="http://localhost:3001/resources/" id="nav-text" >Saving Resources</Nav.Link>
             <Button inline="true" variant="outline-light" onClick={props.logout} id="nav-logout">Logout</Button>
         </Nav>
     </Navbar>
    )
}

export default NavigationBar
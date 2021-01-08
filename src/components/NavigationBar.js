import {Navbar, Nav, Button, NavLink} from 'react-bootstrap'


// function NavigationBar(props){
//     return (
//     <Navbar sticky="top" id="navbar">
//         <Navbar.Brand href="#" id="nav-brand">PERCENTAGE</Navbar.Brand>
//         <Nav className="justify-content-end" >
//             <Nav.Link href="http://localhost:3001/" id="nav-text">Home</Nav.Link>
//             <Nav.Link href="http://localhost:3001/expenses/" id="nav-text">Expenses</Nav.Link>
//             <Nav.Link href="http://localhost:3001/expenses/" id="nav-text">Expenses</Nav.Link>
//             <Nav.Link href="http://localhost:3001/accounts/" id="nav-text" >Accounts</Nav.Link>
//             <Nav.Link href="#" id="nav-text" >Resources</Nav.Link>
//             <Nav.Link href="http://localhost:3001/profile/" id="nav-text"> Profile </Nav.Link>
//             <Button inline="true" variant="outline-light" onClick={props.logout} id="nav-logout">Logout</Button>
//         </Nav>
//     </Navbar>
//     )
// }

// export default NavigationBar;

import React from 'react'

const NavigationBar = (props) => {
    return (
    <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="#" id="nav-brand">PERCENTAGE</Navbar.Brand>
        <Nav className="justify-content-end" >
             <Nav.Link href="http://localhost:3001/" id="nav-text">Home</Nav.Link>
             <Nav.Link href="http://localhost:3001/accounts/" id="nav-text" >Accounts</Nav.Link>
             <Button inline="true" variant="outline-light" onClick={props.logout} id="nav-logout">Logout</Button>
         </Nav>
     </Navbar>
    )
}

export default NavigationBar
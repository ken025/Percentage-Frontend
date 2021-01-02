import {Navbar, Nav} from 'react-bootstrap'


function NavigationBar(){
    return (
    <Navbar sticky="top" id="navbar">
        <Navbar.Brand href="#" id="nav-brand">PERCENTAGE</Navbar.Brand>
        <Nav className="justify-content-end" >
            <Nav.Link href="http://localhost:3001/" id="nav-text">Home</Nav.Link>
            <Nav.Link href="http://localhost:3001/expenses/" id="nav-text">Expenses</Nav.Link>
            <Nav.Link href="http://localhost:3001/savings/" id="nav-text" >Savings</Nav.Link>
            <Nav.Link href="#" id="nav-text" >Resources</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default NavigationBar;
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {

    
    render() {
        return (
            <Navbar bg="auto" expand="lg" variant='dark'>
            <Navbar.Brand href="#home">HornedBeast</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="HornedBeast">Home</Nav.Link>
            </Nav>
            </Navbar.Collapse>
           </Navbar>
           
            
        )
    }
}

export default Header;
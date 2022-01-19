import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';


const NavBar = () => {

    return <>
        <Navbar expand= "lg" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img className= "miLogo" src="pure.jpg" alt="" /></Navbar.Brand>
                <Nav className="me-auto miNav">
                    <Nav.Link className="links" href="#home">Productos</Nav.Link>
                    <Nav.Link className="links" href="#features">Tips</Nav.Link>
                    <Nav.Link className="links" href="#pricing"> <CartWidget /> </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>            
}

export default NavBar;
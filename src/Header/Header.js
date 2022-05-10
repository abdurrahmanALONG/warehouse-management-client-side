import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../images/logo.jpg'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="HOME"><span><img height={30} src={Logo} alt="" /> MANAGMENT</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="HOME">HOME</Nav.Link>
                            <Nav.Link href="ITEMS">ITEMS</Nav.Link>
                            <Nav.Link href="SERVICES">SERVICES</Nav.Link>                
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="MY-ITEMS">MY-ITEMS</Nav.Link>
                            <Nav.Link href="BLOGS-QA">BLOGS-QA</Nav.Link>
                            <Nav.Link href="LOGIN">LOGIN</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
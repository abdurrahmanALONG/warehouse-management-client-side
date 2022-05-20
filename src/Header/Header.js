import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Logo from '../images/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="Home"><span><img height={30} src={Logo} alt="" /> MANAGMENT HOUSE</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="Home">HOME</Nav.Link>
                            <Nav.Link href="Items">ITEMS</Nav.Link>
                            <Nav.Link href="Servics">SERVICES</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="Blogs-QA">BLOGS-QA</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link href="AddInventory">Add Item</Nav.Link>
                                    <Nav.Link href="Items">Manage Items</Nav.Link>
                                    <Nav.Link href="My-Items">MY-ITEMS</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button onClick={handelSignOut}> Sign Out </button>
                                    : <Nav.Link href="Login">
                                        LOGIN
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
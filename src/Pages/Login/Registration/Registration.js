import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();



    const navigateLoginPage =event =>{
        navigate('/LOGIN')
    }
    return (
           <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Register</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="userName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already Do have an account? <Link to="/LOGIN" className='text-primary pe-auto text-decoration-none' onClick={navigateLoginPage }>Please Login</Link> </p>

        </div>
    );
};

export default Registration;
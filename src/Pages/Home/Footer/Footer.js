import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();



    return (
        <div>
            <Container>
                <footer className='Footer mt-5'>
                    <h6><small>Copyright @ {year}</small></h6>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
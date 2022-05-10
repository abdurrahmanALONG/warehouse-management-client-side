import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const today= new Date();
    const year = today.getFullYear();
    return (
        <div>
           <Container>
               <footer className='Footer'>
                   <h6>Copyright @ {year} </h6>
               </footer>
           </Container>
        </div>
    );
};

export default Footer;
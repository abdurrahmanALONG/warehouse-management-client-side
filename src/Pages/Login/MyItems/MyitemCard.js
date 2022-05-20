import React from 'react';
import { Card } from 'react-bootstrap';
import './MyItems.css'

const MyitemCard = ({ myitemDelete, handelDelete }) => {
    const { name, img, price, quantity, suppliername, details, email } = myitemDelete;
    console.log(email);



    return (
        <div>
            <Card className='myitem'>
                <Card.Img className='deleteImg' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Price:{price}</h6>
                    <h6>Quantity:{quantity}</h6>
                    <h6>Supplier Name: {suppliername}</h6>
                    <h6>Supplier Email: {email}</h6>
                    <p>{details}</p>
                </Card.Body>
                <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center' onClick={() => handelDelete(myitemDelete._id)} >
                        Delete
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyitemCard;
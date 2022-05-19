import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css'



const ItemDetail = ({ item }) => {
    const { _id, name, img, price, quantity, suppliername, details } = item;
    const navigate = useNavigate();
    const navigateToFullDetails = id => {
        navigate(`/ITEM/${id}`)
    }



    return (
        <div>
            <Card className='items'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Price:{price}</h6>
                    <h6>Quantity:{quantity}</h6>
                    <h6>Supplier Name: {suppliername}</h6>
                    <p>{details}</p>
                </Card.Body>
                <Card>
                    <Button onClick={() => navigateToFullDetails(_id)} variant="primary" type="submit">
                        Stock Update
                    </Button>
                </Card>
            </Card>
        </div>
    );
};

export default ItemDetail;
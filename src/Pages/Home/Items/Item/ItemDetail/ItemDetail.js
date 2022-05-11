import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.css'



const ItemDetail = ({ item }) => {
    const { id, name, img, price } = item;
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
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card>
                <Button onClick={() =>navigateToFullDetails(id)} variant="primary" type="submit">
                    Manage
                </Button>
                </Card>
            </Card>
        </div>
    );
};

export default ItemDetail;
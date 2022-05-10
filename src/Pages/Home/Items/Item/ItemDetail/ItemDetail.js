import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ItemDetail.css'



const ItemDetail = ({ item }) => {
    const { name, img, price } = item;
    // const navigate = useNavigate();
    // console.log(img);

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
                <Button variant="primary" type="submit">
                    Booking
                </Button>
                </Card>
            </Card>












            {/* <Col className="items">
                <Card>
                    <Card.Img src={img} alt=""/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h5>Price:{price}</h5>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col> */}
        </div>
    );
};

export default ItemDetail;
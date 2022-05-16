import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const FullDetails = () => {
    const { ItemID } = useParams();
    // const quantityRef = useRef('');
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${ItemID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, []);

    const handleUpdateQuantity = event => {
        event.preventDefault();
        const updatedQuentity = item.quantity;


        const url = `http://localhost:5000/item/${ItemID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuentity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                const exists = item.find(updateItem => updateItem.temID === event);
                exists.quantity = exists.quantity + 1;
                alert('users added successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div className='mt-3'>
            <h1 className='text-center my-4'>This is the full Details about the product no: {item._id}</h1>
            <div className='px-auto'>
                <Card>
                    <Card.Img className='w-50 mx-auto text-center' variant="top" src={item.img} />
                    <Card.Body className='w-50 mx-auto text-center'>
                        <Card.Title>Product Name: {item.name} </Card.Title>
                        <Card.Text>Price: {item.price}</Card.Text>
                        <Card.Text>Quentity: {item.quantity}</Card.Text>
                        <Card.Text>Supplier Name: {item.suppliername}</Card.Text>
                        <Card.Text>Details: {item.details}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link className='btn btn-primary mx-2 ' onClick={handleUpdateQuantity}>
                            Delivered
                        </Card.Link>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicnewQuantity">
                                <Form.Control type="number" placeholder="newQuantity" />
                            </Form.Group>
                            <Button variant="primary" type="input">
                                Add New Quantity
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='my-3 text-center'>
                    <Link to="/Items" className='btn btn-primary pe-auto text-center'>
                        Manage Inventories
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;
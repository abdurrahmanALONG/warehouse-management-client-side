import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ItemsAll = ({ item }) => {
    const { _id, name, img, price, quantity, suppliername, details } = item;
    const [itemsDelete, setItemsDelete] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItemsDelete(data));
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = itemsDelete.filter(itemDelete => itemDelete._id !== id);
                    setItemsDelete(remaining);
                })
        }
    }

    return (
        <div>
            <Card className='itemsdelete'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Price:{price}</h6>
                    <h6>Quantity:{quantity}</h6>
                    <h6>Supplier Name: {suppliername}</h6>
                    <p>{details}</p>
                </Card.Body>
                <Card.Body className='mx-auto'>
                    <Card.Link className='btn btn-primary pe-auto mx-2 text-center' onClick={() => handelDelete(item._id)}>
                        Delete
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemsAll;
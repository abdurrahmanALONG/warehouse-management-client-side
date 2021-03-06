import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = () => {
    const [items, setItems] = useState([]);
    console.log(items);
    useEffect(() => {
        fetch('https://still-inlet-24305.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    return (
        <div className='my-4'>
            <h1 className=' mb-3 text-center'>OUR ITEMS</h1>
            <div className='itemsshow'>
                {
                    items.slice(0, 6).map(item => <ItemDetail
                        key={item._id}
                        item={item}
                    // handleUpdateQuantity = {handleUpdateQuantity}
                    ></ItemDetail>)
                }
            </div>
            <div className='my-3 text-center'>
                <Link to="/Items" className='btn btn-primary pe-auto text-center'>
                    Manage Inventories
                </Link>
            </div>
        </div>
    );
};

export default Item;
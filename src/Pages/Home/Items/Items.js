import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemsAll from './ItemsAll';
import './Items.css'

const Items = () => {
    const [itemsall, setItemsall] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data =>setItemsall(data));
    }, [])

    return (
        <div>
            <h2 className='text-center'>All items</h2>
            <div className='itemsallshow'>
                {
                    itemsall.map(item =><ItemsAll
                    key ={item._id}
                    item ={item}
                    ></ItemsAll>)
                }
            </div>
            <div className='my-3 text-center'>
            <Link to="/AddInventory" className='btn btn-primary pe-auto text-center'>
            Add New Inventories
            </Link>
            </div>
        </div>
    );
};

export default Items;
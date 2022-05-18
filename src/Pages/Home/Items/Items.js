import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemsAll from './ItemsAll';
import './Items.css'
import { toast, ToastContainer } from 'react-toastify';

const Items = () => {
    const [itemsall, setItemsall] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItemsall(data));
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
                    const remaining = itemsall.filter(itemDelete => itemDelete._id !== id);
                    setItemsall(remaining);
                    toast('Delete Successfully');
                })
        }
    }

    return (
        <div>
            <h2 className='text-center'>All items</h2>
            <div className='itemsAllshow'>
                {
                    itemsall.map(item => <ItemsAll
                        key={item._id}
                        item={item}
                        handelDelete={handelDelete}
                    ></ItemsAll>)
                }
            </div>
            <div className='my-3 text-center'>
                <Link to="/AddInventory" className='btn btn-primary pe-auto text-center'>
                    Add New Inventories
                </Link>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Items;
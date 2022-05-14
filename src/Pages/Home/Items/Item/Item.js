import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import './Item.css'

const Item = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data =>setItems(data));
    }, [])
  

    return (
        <div className='my-4'>
            <h1 className=' mb-3 text-center'>OUR ITEMS</h1>
            <div className='itemsshow'>
                {
                    items.map(item  =><ItemDetail
                    key={item._id}
                    item={item}
                    ></ItemDetail>)
                }

            </div>

        </div>
    );
};

export default Item;
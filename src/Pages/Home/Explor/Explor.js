import React, { useEffect, useState } from 'react';
import ExplorItems from './ExplorItems';
import './Explor.css'

const Explor = () => {
    const [exporItems, setExplorItems] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/explor')
        .then(res => res.json())
        .then(data => setExplorItems(data))
    },[]);



    return (
        <div className='my-5'>
            <h1 className='text-center mb-3'>EXPLOR US</h1>
           <div className='exploritem'>
           {
                exporItems.map( explorItem =><ExplorItems
                key={explorItem._id}
                explorItem = {explorItem}
                ></ExplorItems>)
            }
           </div>
        </div>
    );
};

export default Explor;
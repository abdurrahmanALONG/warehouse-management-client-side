import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explor.css'

const ExplorItems = ({ explorItem }) => {
    const { name, img } =  explorItem;

    const navigate = useNavigate();

    const handelExplorItemsDetails = event =>{
        navigate('/ExplorItemsDetails');
    }
    return (
        <div>
            <button className='explorbtn' onClick={handelExplorItemsDetails}>
            <h5>{name}</h5>
            <img className='d-block w-100 hight' src={img} alt="" ></img>
            </button>
        </div>
    );
};

export default ExplorItems;
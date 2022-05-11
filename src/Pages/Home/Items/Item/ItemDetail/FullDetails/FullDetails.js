import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FullDetails = () => {
const { ITEMID } = useParams();

    return (
        <div>
            <h1>This is the fulldetails id:{ITEMID}</h1>
            <Link to="/CheckOut">
                <button className='btn btn-primary'> Checout</button>
            </Link>
        </div>
    );
};

export default FullDetails;
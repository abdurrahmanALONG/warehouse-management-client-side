import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FullDetails = () => {
const { ItemID } = useParams();

    return (
        <div className='mt-3 text-center'>
            <h1 className='text-center'>This is the full Details id no:{ItemID}</h1>
            <Link to="/CheckOut" className='btn btn-primary pe-auto text-center'>
            CheckOut
            </Link>
        </div>
    );
};

export default FullDetails;
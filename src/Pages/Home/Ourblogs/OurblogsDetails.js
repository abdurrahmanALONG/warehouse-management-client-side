import React from 'react';
import './Ourblogs.css'

const OurblogsDetails = () => {
    return (
        <div className='my-5'>
        <h1 className='text-center mb-4 '>Our Wearhouse Blogs</h1>
        <div className='ourblogsDetail'>
            <div className='blogitem-detail'>
                <h5>WAREHOUSING</h5>
            </div>
            <div className='blogitem-detail'>
            <h5>PAKAGING & STORAGE</h5>
            </div>
            <div className='blogitem-detail'>
            <h5>TIME BOUND DELIVERIES</h5>
            </div>
            <div className='blogitem-detail'>
            <h5>ECONOMICAL AIR FREIGHT</h5>
            </div>
            <div className='blogitem-detail'>
            <h5>SAME DAY DELIVERY</h5>
            </div>
            <div className='blogitem-detail'>
            <h5>MULTI-MODAL TRANSPORT</h5>
            </div>
        </div>

    </div>
    );
};

export default OurblogsDetails;
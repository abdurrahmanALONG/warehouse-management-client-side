import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Ourblogs.css'

const Ourblogs = () => {
    const navigate = useNavigate();
    const navigateOurblogsDetailsPage = event => {
        navigate('/OurblogsDetails');
    }

    return (
        <div className='my-5'>
            <h1 className=' mb-4 '>Our Wearhouse Blogs</h1>
            <div className='ourblogs'>
                <div className='blogitem'>
                    <h5>WAREHOUSING</h5>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' onClick={navigateOurblogsDetailsPage}>Learn more..</Link> </p>
                </div>
                <div className='blogitem'>
                    <h5>PAKAGING & STORAGE</h5>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' onClick={navigateOurblogsDetailsPage} >Learn more..</Link> </p>
                </div>
                <div className='blogitem'>
                    <h5>TIME BOUND DELIVERIES</h5>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' onClick={navigateOurblogsDetailsPage}>Learn more..</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Ourblogs;
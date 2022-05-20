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
            <h1 className=' mb-4 text-center'>Our Wearhouse Blogs</h1>
            <div className='ourblogs'>
                <div className='blogitem'>
                    <h5>WAREHOUSING</h5>
                    <p>Warehousing is the process of storing physical inventory for sale or distribution......</p>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' onClick={navigateOurblogsDetailsPage}>Learn more..</Link> </p>
                </div>
                <div className='blogitem'>
                    <h5>PACKAGING & STORAGE</h5>
                    <p>Packaging is essential to protect the product and therefore is very important to choose the best types of packing materials....</p>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' onClick={navigateOurblogsDetailsPage} >Learn more..</Link> </p>
                </div>
                <div className='blogitem'>
                    <h5>TIME BOUND DELIVERIES</h5>
                    <p>In short wherever you keep up your commitment with your customer, they are called time bound deliveries....</p>
                    <p><Link to="/OurblogsDetails" className='text-primary pe-auto text-decoration-none' onClick={navigateOurblogsDetailsPage}>Learn more..</Link> </p>
                </div>
            </div>

        </div>
    );
};

export default Ourblogs;
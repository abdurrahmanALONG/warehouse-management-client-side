import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import MyitemCard from './MyitemCard';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const [myitems, setMyItems] = useState([]);
    useEffect(() => {
            fetch(`http://localhost:5000/item?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyItems(data));
      

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
                    const remaining = myitems.filter(itemDelete => itemDelete._id !== id);
                    setMyItems(remaining);
                    toast('Delete Successfully');
                })
        }
    }



    return (
        <div>
            <h1>This is my items section</h1>
            <div className='myitemsAllshow'>
                {
                    myitems.map(myitem => <MyitemCard
                        key={myitem._id}
                        myitem={myitem}
                        handelDelete={handelDelete}
                    ></MyitemCard>
                    )}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyItems;
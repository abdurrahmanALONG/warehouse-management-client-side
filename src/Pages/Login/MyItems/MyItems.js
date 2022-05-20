import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import axios from 'axios';
import auth from '../../../firebase.init';
import MyitemCard from './MyitemCard';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const navigate = useNavigate();
    const [myitems, setMyItems] = useState([]);
    console.log(myitems);

    useEffect(() => {
        const handelMyItem = async () => {
            const email = user.email;
            const url = `https://still-inlet-24305.herokuapp.com/item?email=${email}`;
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            handelMyItem();
        }, [user]);

            // try {
            //     const { data } = await axiosPrivate.get(url);
            //     setMyItems(data);

            // }
            // catch (error) {
            //     console.log(error.message);
            //     if (error.response.status === 401 || error.response.status === 403) {
            //         signOut(auth);
            //         navigate('/login')
            //     }

            // }
    //     }
    //     handelMyItem();

    // }, [user]);




    const [myitemsDelete, setMyItemsDelete] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://still-inlet-24305.herokuapp.com/item?email=${user?.email}`)
                .then(res => res.json())
                .then(data => setMyItemsDelete(data));
        }
    }, [user])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://still-inlet-24305.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myitemsDelete.filter(myitemDelete => myitemDelete._id !== id);
                    setMyItemsDelete(remaining);
                    toast('Delete Successfully');
                    window.location.reload();
                })
        }
    }



    return (
        <div>
            <h1 className='text-center'>Your items: {myitems.length}</h1>
            {/* <div>
            {
                myitems.map(myitem =><div key={myitem._id}>
                    <p>{myitem.email} : {myitem.name}</p>
                </div>)
            }
            </div> */}
            <div className='myitemsAllshow'>
                {
                    myitemsDelete.map(myitemDelete => <MyitemCard
                        key={myitemDelete._id}
                        myitemDelete={myitemDelete}
                        handelDelete={handelDelete}
                    ></MyitemCard>
                    )}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyItems;
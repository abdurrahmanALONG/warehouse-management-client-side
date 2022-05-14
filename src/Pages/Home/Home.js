import React from 'react';
import Banner from './Banner/Banner';
import Explor from './Explor/Explor';
import Item from './Items/Item/Item';
import Ourblogs from './Ourblogs/Ourblogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Item></Item>
            </div>
            <div>
                <Ourblogs></Ourblogs>
            </div>
            <div>
                <Explor></Explor>
            </div>
        </div>
    );
};

export default Home;
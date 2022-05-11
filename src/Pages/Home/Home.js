import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Item from './Items/Item/Item';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Item></Item>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
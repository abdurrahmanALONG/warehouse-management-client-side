import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Item from './Items/Item/Item';
import ItemDetail from './Items/Item/ItemDetail/ItemDetail';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Item></Item>
                {/* <ItemDetail></ItemDetail> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
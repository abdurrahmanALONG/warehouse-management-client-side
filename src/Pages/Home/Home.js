import React, { useEffect, useState } from 'react';
import Loding from '../../Loding/Loding';
import Banner from './Banner/Banner';
import Explor from './Explor/Explor';
import Item from './Items/Item/Item';
import Ourblogs from './Ourblogs/Ourblogs';

const Home = () => {
    const [isLoding, setIsLoding] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false);
        }, 2500);
    }, [])
    return (
        <div>
            {isLoding === true ? <Loding></Loding> :
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

            }
        </div>
    );
};

export default Home;
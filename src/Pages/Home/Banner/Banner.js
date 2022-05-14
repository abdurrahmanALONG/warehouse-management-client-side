import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/banner/banner-1.jpg'
import Banner2 from '../../../images/banner/banner-2.jpg'
import Banner3 from '../../../images/banner/banner-3.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hights"
                        src={Banner3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hights"
                        src={Banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hights"
                        src={Banner1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
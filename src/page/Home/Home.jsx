import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>

            <div className='max-w-7xl mx-auto'>

            <Products></Products>
            </div>
        </div>
    );
};

export default Home;
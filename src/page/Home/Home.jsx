import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <HeroCarousel></HeroCarousel>
            <Products></Products>
        </div>
    );
};

export default Home;
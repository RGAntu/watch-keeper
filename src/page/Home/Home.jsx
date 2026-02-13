import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import Products from '../../components/Products/Products';
import { useLoaderData } from 'react-router';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <HeroCarousel></HeroCarousel>

            <div className='max-w-7xl mx-auto'>

            <Products products= {products}></Products>
            </div>
        </div>
    );
};

export default Home;
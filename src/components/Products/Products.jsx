import React, { useState } from 'react';
import Product from './Product/Product';

const Products = ({ products }) => {

    const [showAll, setShowAll] = useState(false);

    const displayProducts = showAll 
        ? products 
        : products.slice(0, 8);

    const handleToggle = () => {
        setShowAll(prev => !prev);
        window.scrollTo(0, 0);
    };

    return (
       <div>
        <h2 className='text-3xl text-center'>Feature Product</h2>

         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3'>
            {displayProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>

        <div className='text-center py-5'>
            <button 
                onClick={handleToggle}
                className="btn btn-primary border-none hover:bg-blue-500"
            >
                {showAll ? "Show less" : "Show all"}
            </button>
        </div>
       </div>
    );
};

export default Products;
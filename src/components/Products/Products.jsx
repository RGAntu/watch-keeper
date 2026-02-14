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

    // search 
    const [search, setSearch] = useState("");
    console.log(search)

    return (
       <div className='py-10'>
        <h2 className='text-3xl text-center'>Feature Product</h2>
        {/* search  */}
        <div className='ml-5 my-5'>
        <form >
            <input 
            value={setSearch}
            onChange={ (e) => setSearch(e.target.value)}
            type="text" 
            placeholder='Search Product by Name'
            className='w-2/5 border rounded-lg p-3 focus:outline-none'
            />
        </form>
        </div>

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
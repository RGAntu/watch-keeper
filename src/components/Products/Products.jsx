import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("../../../public/Products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
       <div>
        <h2 className='text-3xl text-center'>Feature Product</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3'>
            {
                products.map((product)=>  <Product key={product.id} product={product}></Product>)
            }
        </div>
       </div>
    );
};

export default Products;
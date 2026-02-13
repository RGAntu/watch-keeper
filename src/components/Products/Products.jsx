import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = ({products}) => {

    const [displayProducts, setDisplayProducts] = useState([]);
    const[showAll, setShowAll] = useState(false);

    useEffect(() => {
        if(showAll) {
            setDisplayProducts(products)
            if(showAll){
                window.scrollTo(0, 0)
            }
        } else{
            setDisplayProducts(products.slice(0, 8))
            
        }
    },[products, showAll])

    return (
       <div>
        <h2 className='text-3xl text-center'>Feature Product</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3'>
            {
                displayProducts.map((product)=>  <Product key={product.id} product={product}></Product>)
            }
        </div>

        <div className='text-center py-5'>
            <button onClick={()=> setShowAll(prv => !prv)} className="btn btn-primary">
                { showAll ? "Show less " : "Show all" }
            </button>
        </div>
       </div>
    );
};

export default Products;
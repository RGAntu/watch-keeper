import React, { useEffect, useState } from 'react';

const Products = () => {
const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("../../../public/Products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div>
            <h1>All products</h1>
            <p>{products.length}</p>
        </div>
    );
};

export default Products;
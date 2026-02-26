import React, { useEffect, useState } from 'react';
import { getFavorites } from '../../utils';
import Product from '../../components/Products/Product/Product';

const Favorite = () => {
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    const savedProducts = getFavorites();
    setDisplayProducts(savedProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3">
      {displayProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Favorite;
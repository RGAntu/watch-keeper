import React, { useEffect, useState } from 'react';
import { getFavorites, removeFavorite } from '../../utils';
import Product from '../../components/Products/Product/Product';
import EmptyState from '../../components/EmptyState/EmptyState';

const Favorite = () => {
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    const savedProducts = getFavorites();
    setDisplayProducts(savedProducts);
  }, []);

  const handleDelete = id => {
    removeFavorite(id)
    setDisplayProducts(getFavorites())
  }

  if(displayProducts.length < 1) return <EmptyState></EmptyState>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3">
      {displayProducts.map((product) => (
        <Product key={product.id} product={product} deleteAble={true} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Favorite;
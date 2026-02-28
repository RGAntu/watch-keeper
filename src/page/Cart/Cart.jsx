import React, { useEffect, useState } from "react";
import { getCart, removeCart } from "../../utils";
import Product from "../../components/Products/Product/Product";
import EmptyState from "../../components/EmptyState/EmptyState";

const Cart = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    const savedCartProduct = getCart();
    setDisplayProducts(savedCartProduct);
  }, []);

  const handleDelete = (id) => {
    removeCart(id);
    setDisplayProducts(getCart());
  };

  if (displayProducts.length < 1) return <EmptyState></EmptyState>;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3">
        {displayProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            deleteAble={true}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

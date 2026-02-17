import React, { useState } from "react";
import Product from "./Product/Product";

const Products = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const handleToggle = () => {
    setShowAll(prev => !prev);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // filter by search text
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // show only 8 or all
  const displayProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="py-10">
      <h2 className="text-3xl text-center">Feature Product</h2>

      <div className="ml-5 my-5">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search Product by Name"
          className="w-2/5 border rounded-lg p-3 "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-5 gap-3">
        {displayProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center py-5">
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

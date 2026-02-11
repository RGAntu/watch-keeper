import React from "react";

const Product = ({ product }) => {
  const { id, name, brand, image, category, description } = product;
  return (
    <div className="flex justify-between">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Product Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

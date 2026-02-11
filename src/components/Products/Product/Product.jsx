import React from "react";

const Product = ({ product }) => {
  const { name, brand, image, priceUSD  } = product;
  console.log(product)
  return (
    
      <div className="card bg-base-100  shadow-sm px-5">
        <figure>
          <img  src={image} className="h-50 w-full object-cover" alt="watch" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{name}</h2>
          <h4 className="">{brand}</h4>
          <p className="">{priceUSD}<span>$</span></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
  );
};

export default Product;

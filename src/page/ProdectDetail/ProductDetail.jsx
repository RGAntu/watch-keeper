import React from "react";
import { useLoaderData, useParams } from "react-router";

const ProductDetail = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id)
//   console.log(data);
  const singleProduct = data.find((product) => product.id === parseInt(id));
//   console.log(singleProduct);
  const {
    image,
    availability,

    brand,
    category,
    color,
    description,
    movement,
    priceUSD,
    quantity,
    size,
    strap,
    type,
    warranty,
    waterResistance,
  } = singleProduct;
  return (
    <div className="text-center">
    <h1 className="text-4xl">Name: {brand}</h1>
      <h2 className="text-xl">Price: ${priceUSD}</h2>
      <p>Color: {color}</p>
      <p>Category: {category}</p>
    
    </div>
  );
};

export default ProductDetail;

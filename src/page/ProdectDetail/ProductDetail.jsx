import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../../components/button/Button";
import { FaBookmark, FaCartShopping } from "react-icons/fa6";
import { addCart, addFavorite, getCart } from "../../utils";
import { CartContext } from "../../providers/Contexts";

const ProductDetail = () => {
  const {setCart} = useContext(CartContext);
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(id)
  //   console.log(data);
  const singleProduct = data.find((product) => product.id === parseInt(id));
  console.log(singleProduct);
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

  const handleFavorite = () => {
  addFavorite(singleProduct)
  }

  const handleCart = () => {
    addCart(singleProduct)

    setCart(getCart())
  }

  return (
    <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl mx-auto gap-x-8 my-5 justify-center ">
      <div className="col-span-1">
        <img src={image} className="w-[25rem] rounded-lg p-5" alt={id} />
      </div>
      <div className="col-span-1 p-5 ">
        <h1 className="text-3xl">Name: {brand}</h1>
        <h2 className="text-xl">Price: ${priceUSD}</h2>
        <p>Color: {color}</p>
        <p>Category: {category}</p>
        <p>Quantity: {quantity}</p>
        <p>Availability: {availability}</p>
        <p>Movement: {movement}</p>
        <p className="">Description: {description}</p>
        <p>Size: {size}</p>
        <p>Strap: {strap}</p>
        <p>Type: {type}</p>
        <p>Water Resistance: {waterResistance}</p>
        <p>Warranty: {warranty}</p>

        <div>
          <Button onClick={ handleCart } label={<FaCartShopping />}> </Button>
          <Button onClick={handleFavorite} label={<FaBookmark />} />
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

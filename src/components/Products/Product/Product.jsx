import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const Product = ({ product, deleteAble, handleDelete }) => {
  const { id, name, brand, image, priceUSD } = product;
  // console.log(product)

  return (
    <div className="card bg-base-100  shadow-sm px-5 relative">
      <div onClick={() => handleDelete(id)}>
        {deleteAble && (
          <MdDelete className="text-3xl text-red-500 absolute top-0 right-5" />
        )}
      </div>
      <figure>
        <img src={image} className="h-50 w-full object-cover" alt="watch" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
        <h4 className="">{brand}</h4>
        <p className="">
          {priceUSD}
          <span>$</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/productDetail/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

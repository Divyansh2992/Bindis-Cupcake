import React, { useState } from "react";
import "./Product_desc.css";

const Desc = ({ name, image, description, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container mb-5">
      <h1 className="text-center fw-bold">{name}</h1>

      <div className="row justify-content-center text-center">
        {/* Product Image */}
        <div className="col-lg-6 col-md-8 col-sm-10">
          <img
            src={image}
            className="img-fluid item_image"
            alt="Product"
            style={{ height: "400px", width: "500px" }}
          />
        </div>

        {/* Product Description & Actions */}
        <div className="col-lg-6 col-md-8 col-sm-10 align-self-center">
          <p className="fs-5">{description}</p>
          <p className="price fw-bold fs-4">&#8377; {price}</p>

          {/* Add to Cart Button */}
          <button className="badge rounded-pill buy ">Add to Cart</button>

          {/* Quantity Selector (Pill-Shaped) */}
          <div className="quantity-selector">
            <button className="qty-btn" onClick={decreaseQuantity}>−</button>
            <span className="qty-text">{quantity}</span>
            <button className="qty-btn" onClick={increaseQuantity}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;

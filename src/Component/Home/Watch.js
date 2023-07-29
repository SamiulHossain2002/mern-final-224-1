import React from "react";
import "./Watch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Watch = ({ watch, handleAddToCart }) => {
  const { name, img, company, price, about } = watch;
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Company: {company}</p>
            <div className="card-place">
              <p className="card-details">{about}</p>
            </div>
            <p className="card-text"> Quantity : In Stock</p>
            <p className="card-text">Price: $ {price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(watch)}
            className="add-to-cart-btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="ms-3">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;

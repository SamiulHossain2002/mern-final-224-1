import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cart, clearCart } = props;

  let total = 0;
  let quantity = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <div className="mt-1">
        <h4 className="text-center">Order Summary</h4>
        <p className="mt-1">Selected Items:$ {quantity}</p>
        <p className="mt-1">Total Price:$ {total}</p>
        <p className="mt-1">Shipping Charge:$ {shipping}</p>
        <p className="mt-1">Tax:$ {tax}</p> <br />
        <h6>Grand Total: $ {grandTotal}</h6>
        <button onClick={clearCart} className="btn btn-danger mt-2">
          Clear Cart
        </button>{" "}
        <br />
        <Link to="/orders">
          <button className="btn btn-warning mt-2 p">
            Proceed to payment <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </Link>
        <br />
        <Link to="/review">
          <button className="btn btn-warning mt-2 pb-5 ">
            Review Us <br />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

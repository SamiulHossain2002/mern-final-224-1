import React from "react";
import { toast } from "react-hot-toast";
import img from "../../Assets/images/logo-img/bkash.jpg";

const Order = () => {
  const handleClick = () => {
    toast.loading("Payment is coming soon!");
  };

  return (
    <div className="form-main  ">
      <div className="ms-4 mx-auto  ">
        <img src={img} height="300px" alt="" />
      </div>
      <div>
        <h1 className="mb-5 pb-5 ">
          <button class="btn btn-primary" onClick={handleClick}>
            Pay Us
          </button>
        </h1>
      </div>
    </div>
  );
};

export default Order;

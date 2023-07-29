import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Watch from "./Watch";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [noElement, setElement] = useState(3);
  const [cart, setCarts] = useState([]);

  //loader seemore:
  const loadMore = () => {
    setElement(noElement + 3);
  };

  const watches = useLoaderData();
  console.log(watches);

  const slice = watches.slice(0, noElement);

  /*  //useEffect is for loadind data:
  useEffect(() => {
    fetch(<Home></Home>)
      .then((resp) => resp.json())
      .then((data) => setElement(data));
  }, []); */

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
  };
  const clearCart = () => {
    setCarts([]);
  };

  return (
    <>
      <div className="shop-container ms-4 ">
        <div className="product-container mx-auto  my-5 row row-cols-1  row-cols-md-3 g-4 ">
          {slice.map((watch) => (
            <Watch
              key={watch.id}
              watch={watch}
              handleAddToCart={handleAddToCart}
            ></Watch>
          ))}
        </div>

        <div className="card-container">
          <Cart cart={cart} clearCart={clearCart}></Cart>
        </div>
      </div>

      <button onClick={() => loadMore()} className=" see-more ">
        See More
      </button>
    </>
  );
};

export default Home;

import React from "react";
import Amazon from "../../components/amazon";
import Cart from "../../components/cart";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";

const Home = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <React.Fragment>
        <Navbar setShow={setShow} size={cart.length} />
        {show ? (
          <Amazon handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}

        <Footer />
      </React.Fragment>
    </>
  );
};

export default Home;

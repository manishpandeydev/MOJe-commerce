// Cart.js

import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, removeFromCart, decrementFromCart, IncrementFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  return (
    <div className="cart">
      <h2>Cart</h2><button className="btn btn-success">Checkout</button>
      <h5>Total-${totalPrice}</h5>


      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          decrementFromCart={decrementFromCart}
          IncrementFromCart={IncrementFromCart}
        />
      ))}


    </div>
  );
}

export default Cart;

// CartItem.js

import React from "react";

function CartItem({
  item,
  removeFromCart,
  decrementFromCart,
  IncrementFromCart,
}) {
  return (
    <div
      className="cart-item"
      style={{
        margin: "0.3rem",
        borderBottom: "1px solid black",
        textAlign: "center",
      }}
    >
      <p style={{ margin: "0.3rem", fontSize: "1.2rem", fontWeight: "bolder" }}>
        {item.name}
        <br />${item.price}
      </p>
      <h5>Items - {item.count}</h5>
      <button
        className="btn btn-secondary"
        onClick={() => decrementFromCart(item.id)}
      >
        -
      </button>

      <button
        className="btn btn-danger"
        style={{ margin: "0.3rem" }}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => IncrementFromCart(item.id)}
      >
        +
      </button>
    </div>
  );
}

export default CartItem;

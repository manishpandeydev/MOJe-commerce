// Product.js
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Product({ product, addToCart }) {


  return (

    <div
      className="product"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        style={{
          width: "8rem",
          margin: "0px",
          height: "8rem",
          marginBottom: "1rem",
        }}
        src={product.imageSrc}
      ></img>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button
        className="btn btn-primary "
        style={{ fontWeight: "bolder" }}
        onClick={() =>{

         addToCart(product);
}}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

// src/components/Plant.jsx
import React from "react";

function Plant({ name, price, image, addToCart }) {
  return (
    <div className="card" style={{ width: "200px", margin: "10px" }}>
      <img
        src={`/images/${image}`}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Plant;

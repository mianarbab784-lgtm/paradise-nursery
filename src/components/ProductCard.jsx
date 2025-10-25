import React from "react";

function ProductCard({ plant, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/${plant.image}`}
        alt={plant.name}
        style={{ width: "150px", borderRadius: "8px" }}
      />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => onAdd(plant)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

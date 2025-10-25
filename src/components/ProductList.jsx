import React from "react";
import ProductCard from "./ProductCard.jsx";
import plants from "../data/plants.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice.js";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: "flex" }}>
            {plants.filter(p => p.category === cat).map(p => (
              <ProductCard key={p.id} plant={p} onAdd={handleAdd} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

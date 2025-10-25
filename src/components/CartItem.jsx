import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/cartSlice.js";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <img src={item.product.image} alt={item.product.name} style={{ width: "80px" }} />
      <h3>{item.product.name}</h3>
      <p>Unit Price: ${item.product.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(increase(item.product.id))}>+</button>
      <button onClick={() => dispatch(decrease(item.product.id))}>-</button>
      <button onClick={() => dispatch(removeItem(item.product.id))}>Delete</button>
    </div>
  );
}

export default CartItem;

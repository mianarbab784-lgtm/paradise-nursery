import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const items = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const totalItems = Object.values(items).reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = Object.values(items).reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>

      {Object.values(items).map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
        <button onClick={() => navigate("/products")} style={{ marginLeft: "10px" }}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartPage;

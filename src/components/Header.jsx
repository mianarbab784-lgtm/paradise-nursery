import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const items = useSelector(state => state.cart.items);
  const totalQuantity = Object.values(items).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 50px", borderBottom: "1px solid #ccc" }}>
      <h2>Paradise Nursery</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart ({totalQuantity})</Link>
      </nav>
    </header>
  );
}

export default Header;

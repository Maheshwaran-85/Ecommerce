import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart } = useContext(CartContext);
  let nav = useNavigate();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="back-btn" onClick={() => nav("/Dashboard")}>
        Back to Shop
      </button>
    </div>
  );
}

export default Cart;

import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import "./View.css";

function View() {
    const product = useLocation();
    const { image, title, price, description, rating } = product.state;
    const { cart, dispatch } = useContext(CartContext);
    let nav = useNavigate();

    // Function to add item to cart
    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART", payload: product.state });
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <span className="logo">E-Shop</span>
                </div>

                <div className="navbar-center">
                    <input type="text" placeholder="Search for products..." />
                </div>

                <div className="navbar-right">
                    <button className="icon-button" onClick={() => nav("/")}>
                        <FiUser size={20} />
                        <span>Logout</span>
                    </button>
                    <button className="icon-button" onClick={() => nav("/cart")}>
                        <FiShoppingCart size={20} />
                        <span>Cart ({cart.length})</span> {/* Cart count */}
                    </button>
                </div>
            </nav>

            {/* Product View Section */}
            <div className="view-container">
                <div className="product-details">
                    <img className="product-image" src={image} alt="product" />
                    <div className="product-info">
                        <h2 className="product-title">{title}</h2>
                        <p className="product-price">${price}</p>
                        <p className="product-description">{description}</p>
                        <div className="product-rating">
                            <p><strong>Rating:</strong> {rating.rate} / 5</p>
                            <p><strong>Reviews:</strong> {rating.count}</p>
                        </div>
                        <button className="add-to-cart-btn" onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;

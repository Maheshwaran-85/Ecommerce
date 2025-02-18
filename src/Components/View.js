import React from 'react';
import { useLocation } from 'react-router-dom';
import './View.css';

function View() {
    const product = useLocation();
    const { image, title, price, description, rating } = product.state;

    return (
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
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default View;

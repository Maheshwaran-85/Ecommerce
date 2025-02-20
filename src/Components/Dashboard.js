import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext"; 

function Dashboard() {
  const [apidata, setapidata] = useState([]);
  const { cart } = useContext(CartContext);
  let nav = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setapidata(res.data);
  };

  let handleView = (item) => {
    nav("/view", { state: item });
  };

  return (
    <div>
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
            <span>Cart ({cart.length})</span>
          </button>
        </div>
      </nav>

      <h1 className="page-title">Dashboard</h1>

      <div className="grid-container">
        {apidata.map((item) => (
          <div className="grid-item" key={item.id} onClick={() => handleView(item)}>
            <img src={item.image} alt="product" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

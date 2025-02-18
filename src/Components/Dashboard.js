import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [apidata, setapidata] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  let nav=useNavigate()

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setapidata(res.data);
  };

  let handleview=(item)=>{
    nav('/view',{state:item})
  }

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
          <button className="icon-button" onClick={()=>nav('/')}>
            <FiUser size={20} />
            <span>logout</span>
          </button>
          <button className="icon-button">
            <FiShoppingCart size={20} />
            <span>Cart</span>
          </button>
        </div>

      
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button>Sign In</button>
          <button>Cart</button>
        </div>
      )}

      <h1 className="page-title">Dashboard</h1>

      {/* Grid Container for Products */}
      <div className="grid-container">
        {apidata.map((item) => (
          <div className="grid-item" key={item.id}onClick={()=>handleview(item)}>
            <img src={item.image} alt="product" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import View from "./Components/View";
import Cart from "./Components/Cart"; // Import Cart Page
import { CartContext } from "./CartContext";

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/view" element={<View />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart Route */}
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;

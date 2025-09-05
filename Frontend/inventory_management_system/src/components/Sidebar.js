import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <h3 className="mb-4">📦 Inventory</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/">🏠 Home</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/products">📋 Products</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/insert">➕ Add Product</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/about">ℹ️ About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

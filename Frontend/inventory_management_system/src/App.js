import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import InsertProduct from "./components/InsertProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <Router>
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-grow-1 p-4" style={{ marginLeft: "220px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/insert" element={<InsertProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

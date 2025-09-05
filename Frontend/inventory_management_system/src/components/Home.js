import React from "react";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 fw-bold">📦 Inventory Management System</h1>
      <p className="lead mt-3">
        A simple <b>MERN CRUD application</b> to manage your products efficiently.  
        You can <span className="text-success">add</span>, <span className="text-primary">view</span>, 
        <span className="text-warning"> update</span>, and <span className="text-danger">delete</span> products easily.
      </p>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">➕ Add Products</h5>
              <p className="card-text">
                Quickly add new items with name, price, and quantity.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">📋 View Products</h5>
              <p className="card-text">
                See all your products in a simple and organized table.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">✏️ Update & ❌ Delete</h5>
              <p className="card-text">
                Keep your inventory updated with easy edit and delete options.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5 text-muted">
        <p>Built using MongoDB, Express, React, and Node.js</p>
      </footer>
    </div>
  );
}

export default Home;

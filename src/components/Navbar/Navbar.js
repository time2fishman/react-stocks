import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav-container">
      <h1>React Stocks</h1>
      <div id="nav-link-container">
        <Link className="nav-link" to="/stocks">
          <h3>Home</h3>
        </Link>
        <Link className="nav-link" to="/about">
          <h3 className="about-heading">About</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

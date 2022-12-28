import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import StockDetails from "./components/StockDetails";
import About from "./components/About";
import stockData from "./data/stock-data.json";
import "./App.css";

function App() {
  return (
    <div id="app-container">
      <nav id="nav-container">
        <h1>React Stocks</h1>
        <Link to="/stocks">
          <h2>Home</h2>
        </Link>
        <Link to="about">
          <h2>About</h2>
        </Link>
      </nav>
      <div>
        <Routes>
          <Route path="/stocks" element={<Dashboard stockData={stockData} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  ) 
}

export default App;

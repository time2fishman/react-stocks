import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import StockDetails from "./components/StockDetails";
import About from "./components/About";
import stockData from "./data/stock-data.json";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div id="app-container">
      <Navbar />
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

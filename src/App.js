import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StockDetails from "./components/StockDetails";
import About from "./components/About";
import stockData from "./data/stock-data.json";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [clickedStock, setClickedStock] = useState(stockData);
  console.log(stockData)
  console.log(clickedStock)

  return (
    <div id="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/stocks"
          element={<Dashboard stockData={stockData} clickedStock={clickedStock} setClickedStock={setClickedStock} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<StockDetails stockData={stockData} clickedStock={clickedStock} />} />
      </Routes>
    </div>
  );
}

export default App;

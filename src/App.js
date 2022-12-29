import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import StockDetails from "./components/StockDetails/StockDetails";
import About from "./components/About";
import stockData from "./data/stock-data.json";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [clickedStock, setClickedStock] = useState(stockData);

  return (
    <div id="app-container">
      <Navbar />
      <Routes>
        <Route
          path="/stocks"
          element={<Dashboard stockData={stockData} setClickedStock={setClickedStock} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<StockDetails clickedStock={clickedStock} />} />
      </Routes>
    </div>
  );
}

export default App;

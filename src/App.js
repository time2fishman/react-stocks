import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import StockDetails from "./components/StockDetails/StockDetails";
import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [stockData, setStockData] = useState()
  const [clickedStock, setClickedStock] = useState();

  useEffect(() => {
    const apiToken = process.env.REACT_APP_API_TOKEN
    const url = `https://cloud.iexapis.com/stable/tops?token=${apiToken}&symbols=aapl,msft,googl,fb,orcl,intl`
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setStockData(res)
      })
      .catch((error) => console.error(error))
  }, []);

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
        <Route index element='' />
      </Routes>
    </div>
  );
}

export default App;

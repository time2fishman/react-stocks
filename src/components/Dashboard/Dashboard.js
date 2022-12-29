import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'

const Dashboard = ({ stockData, setClickedStock }) => {

    return (
        <div id="dashboard-container">
            {stockData.map((stock, index) => {
                return (
                    <Link onClick={() => setClickedStock(stockData[index])} to={"/stocks/" + stock.symbol} className='stock' key={index}>
                        <p>
                            <strong className="dashboard-stock-symbol">{stock.symbol}</strong> - {stock.name}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Dashboard;

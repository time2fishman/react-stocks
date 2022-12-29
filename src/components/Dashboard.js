import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Dashboard = ({ stockData, clickedStock, setClickedStock }) => {
    return (
        <div id='dashboard-container'>
            {stockData.map((stock) => {
                return (
                    <Link
                        to={"/stocks/" + stock.symbol}
                        key={stock.symbol}>
                            <p>
                                {stock.name} - <strong>{stock.symbol}
                                </strong>
                            </p>
                    </Link>
                )
            })}
        </div>
    );
};

export default Dashboard;
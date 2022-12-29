import React from 'react';
import './StockDetails.css'

const StockDetails = ({ clickedStock }) => {
    return (
        <div id='stock-details-container'>
            <h2>{clickedStock.symbol} - {clickedStock.name}</h2>
            <p><span className='category-title'>Open: </span>${clickedStock.open}</p>
            <p><span className='category-title'>LastPrice: </span>${clickedStock.lastPrice}</p>
            <p><span className='category-title'>Low: </span>${clickedStock.low}</p>
            <p><span className='category-title'>High: </span>${clickedStock.high}</p>
            <p><span className='category-title'>Change: </span>{clickedStock.change}</p>

        </div>
    );
};

export default StockDetails;
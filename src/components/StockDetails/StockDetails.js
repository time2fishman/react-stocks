import React from 'react';
import './StockDetails.css'

const StockDetails = ({ clickedStock }) => {
    return (
        <div id='stock-details-container'>
            <h2>{clickedStock.symbol} - {clickedStock.sector}</h2>
            <p><span className='category-title'>Ask Price: </span>${clickedStock.askPrice}</p>
            <p><span className='category-title'>Bid Price: </span>${clickedStock.bidPrice}</p>
            <p><span className='category-title'>Last Sale Price: </span>${clickedStock.lastSalePrice}</p>
            <p><span className='category-title'>Security Type: </span>{clickedStock.securityType}</p>

        </div>
    );
};

export default StockDetails;
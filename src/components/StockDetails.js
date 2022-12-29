import React from 'react';

const StockDetails = ({ stockData, clickedStock }) => {
    // console.log(clickedStock)
    return (
        <div id='stock-details-container'>
            <p>{clickedStock.name}</p>
            
        </div>
    );
};

export default StockDetails;
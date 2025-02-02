import React from 'react';

const MerchBuy = ({ cost, handleDialog }) => (
  <div className="list-item">
    <a className="merch-buy-link" href="#buyForm" onClick={handleDialog}>
      {`BUY: ${cost} UAH`}
    </a>
  </div>
);

export default MerchBuy;

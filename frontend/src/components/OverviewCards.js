import React from 'react';

function OverviewCards() {
  return (
    <div className="overview-cards">
      <div className="card">
        <h3>Cash Deposits</h3>
        <p>$1.7M</p>
        <p className="negative">-54.1% less earnings</p>
      </div>
      <div className="card">
        <h3>Invested Dividends</h3>
        <p>$9M</p>
        <p className="positive">+14.1% growth rate</p>
      </div>
      <div className="card">
        <h3>Capital Gains</h3>
        <p>$563</p>
        <p className="positive">+7.35% increased</p>
      </div>
    </div>
  );
}

export default OverviewCards;

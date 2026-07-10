import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center p-5 mt-4">
        <h1>Pricing</h1>
        <p className="text-muted mt-2">
          Free equity investment and flat 20 intraday and F&O trades
        </p>
      </div>
      <div className="row text-center mt-5">
        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-responsive"
            style={{ maxWidth: "150px" }}
          />
          <h3 className="mb-3">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-responsive"
            style={{ maxWidth: "150px" }}
          />
          <h3 className="mb-3">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free direct mutual funds"
            className="img-responsive"
            style={{ maxWidth: "150px" }}
          />
          <h3 className="mb-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

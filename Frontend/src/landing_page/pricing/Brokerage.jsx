import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row text-center mt-5 p-5 border-top">
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h5 className="mb-4">Brokerage claculator</h5>
          </a>
          <ul
            className="text-muted"
            style={{
              textAlign: "left",
              lineHeight: "2",
              fontSize: "0.85rem",
            }}
          >
            <li>
              Call & trade and RMS auto-squareoff and Digital contract notes
              will be sent via e-mail
            </li>
            <li>
              Equity Intraday: Flat Rs 20 or 0.03% (whichever is lower) per
              executed order.
            </li>
            <li>
              Futures (Equity/Currency/Commodity): Flat Rs 20 or 0.03%
              (whichever is lower) per executed order.
            </li>
            <li>
              Options (Equity/Currency/Commodity): Flat Rs 20 or 0.03%
              (whichever is lower) per executed order (on turnover).
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h5>List of charges</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

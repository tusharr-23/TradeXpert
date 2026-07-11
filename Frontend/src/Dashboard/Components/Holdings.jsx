import React, { useState, useEffect } from "react";
import axios from "axios";

import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Portfolio Summary
  const totalInvestment = allHoldings.reduce((total, stock) => {
    return total + stock.avg * stock.qty;
  }, 0);

  const currentValue = allHoldings.reduce((total, stock) => {
    return total + stock.price * stock.qty;
  }, 0);

  const totalPnL = currentValue - totalInvestment;

  const totalPnLPercent =
    totalInvestment === 0 ? 0 : (totalPnL / totalInvestment) * 100;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock) => {
              const currVal = stock.price * stock.qty;

              const pnl = currVal - stock.avg * stock.qty;

              const isProfit = pnl >= 0;

              const profClass = isProfit ? "profit" : "loss";

              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock.name}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>{stock.avg.toFixed(2)}</td>

                  <td>{stock.price.toFixed(2)}</td>

                  <td>{currVal.toFixed(2)}</td>

                  <td className={profClass}>{pnl.toFixed(2)}</td>

                  <td className={profClass}>{stock.net}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {Math.floor(totalInvestment)}
            <span>
              .{((totalInvestment % 1) * 100).toFixed(0).padStart(2, "0")}
            </span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            {Math.floor(currentValue)}
            <span>
              .{((currentValue % 1) * 100).toFixed(0).padStart(2, "0")}
            </span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            {totalPnL.toFixed(2)} ({totalPnLPercent.toFixed(2)}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

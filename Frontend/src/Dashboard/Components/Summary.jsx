import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

import "./Summary.css";

const Summary = () => {
  const { user } = useAuth();

  const [stockWatchlist, setStockWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/allWatchlist")
      .then((res) => {
        setStockWatchlist(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const topGainer = [...stockWatchlist]
    .filter((stock) => !stock.isDown)
    .sort((a, b) => parseFloat(b.percent) - parseFloat(a.percent))[0];

  const topLoser = [...stockWatchlist]
    .filter((stock) => stock.isDown)
    .sort((a, b) => parseFloat(a.percent) - parseFloat(b.percent))[0];

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="summary-container">
      {/* Welcome Card */}
      <div className="summary-card welcome-card">
        <h2>
          Welcome back,{" "}
          <span className="user-name">{user?.name || "Guest"}</span>
        </h2>

        <p>
          Here's a quick overview of your trading dashboard and today's market
          activity.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="summary-grid">
        {/* Watchlist */}
        <div className="summary-card">
          <h3>Watchlist Overview</h3>

          {loading ? (
            <p className="loading-text">Loading market data...</p>
          ) : (
            <>
              <div className="stat-box">
                <span className="stat-value">{stockWatchlist.length}</span>
                <span className="stat-label">Stocks Tracked</span>
              </div>

              <div className="market-info">
                <div>
                  <p className="info-title">Top Gainer</p>

                  {topGainer ? (
                    <>
                      <span>{topGainer.name}</span>

                      <span className="profit">{topGainer.percent}</span>
                    </>
                  ) : (
                    <span>—</span>
                  )}
                </div>

                <div>
                  <p className="info-title">Top Loser</p>

                  {topLoser ? (
                    <>
                      <span>{topLoser.name}</span>

                      <span className="loss">{topLoser.percent}</span>
                    </>
                  ) : (
                    <span>—</span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Market Summary */}
        <div className="summary-card">
          <h3>Market Summary</h3>

          <div className="market-summary">
            <div>
              <span className="summary-label">Status</span>

              <span className="market-open">● Live</span>
            </div>

            <div>
              <span className="summary-label">Last Updated</span>

              <span>{currentTime}</span>
            </div>

            <div>
              <span className="summary-label">Tracked Stocks</span>

              <span>{loading ? "..." : stockWatchlist.length}</span>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="summary-card portfolio-card">
          <h3>Watchlist Summary</h3>

          <p className="coming-soon">
            Real-time market data for all tracked stocks.
          </p>

          <p className="portfolio-description">
            TradeXpert continuously monitors every stock in the watchlist and
            provides live prices, daily percentage changes, and quick
            identification of the top gaining and losing stocks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;

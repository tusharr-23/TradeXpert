// // import React from "react";
// // import { useAuth } from "../../context/AuthContext";

// // const Summary = () => {
// //   const { user } = useAuth();
// //   return (
// //     <>
// //       <div className="username">
// //         <h6>Hi, {user?.name || "Guest"}</h6>
// //         <hr className="divider" />
// //       </div>

// //       <div className="section">
// //         <span>
// //           <p>Equity</p>
// //         </span>

// //         <div className="data">
// //           <div className="first">
// //             <h3>3.74k</h3>
// //             <p>Margin available</p>
// //           </div>
// //           <hr />

// //           <div className="second">
// //             <p>
// //               Margins used <span>0</span>{" "}
// //             </p>
// //             <p>
// //               Opening balance <span>3.74k</span>{" "}
// //             </p>
// //           </div>
// //         </div>
// //         <hr className="divider" />
// //       </div>

// //       <div className="section">
// //         <span>
// //           <p>Holdings (13)</p>
// //         </span>

// //         <div className="data">
// //           <div className="first">
// //             <h3 className="profit">
// //               1.55k <small>+5.20%</small>{" "}
// //             </h3>
// //             <p>P&L</p>
// //           </div>
// //           <hr />

// //           <div className="second">
// //             <p>
// //               Current Value <span>31.43k</span>{" "}
// //             </p>
// //             <p>
// //               Investment <span>29.88k</span>{" "}
// //             </p>
// //           </div>
// //         </div>
// //         <hr className="divider" />
// //       </div>
// //     </>
// //   );
// // };

// // export default Summary;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../../context/AuthContext";

// const Summary = () => {
//   const { user } = useAuth();
//   const [stockWatchlist, setStockWatchlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3002/allWatchlist")
//       .then((res) => {
//         setStockWatchlist(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   const topGainer = stockWatchlist
//     .filter((s) => !s.isDown)
//     .sort((a, b) => parseFloat(b.percent) - parseFloat(a.percent))[0];

//   const topLoser = stockWatchlist
//     .filter((s) => s.isDown)
//     .sort((a, b) => parseFloat(a.percent) - parseFloat(b.percent))[0];

//   return (
//     <>
//       <div className="username">
//         <h6>Hi, {user?.name || "Guest"}</h6>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Watchlist</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3>{loading ? "…" : stockWatchlist.length}</h3>
//             <p>Stocks tracked</p>
//           </div>
//           <hr />

//           <div className="second">
//             {stockWatchlist.length === 0 && !loading ? (
//               <p>Add stocks to see them here</p>
//             ) : (
//               <>
//                 {topGainer && (
//                   <p>
//                     Top gainer{" "}
//                     <span className="profit">
//                       {topGainer.name} {topGainer.percent}
//                     </span>
//                   </p>
//                 )}
//                 {topLoser && (
//                   <p>
//                     Top loser{" "}
//                     <span className="loss">
//                       {topLoser.name} {topLoser.percent}
//                     </span>
//                   </p>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Positions</p>
//         </span>
//         <div className="data">
//           <p className="text-muted">
//             Position tracking is on the roadmap — coming soon.
//           </p>
//         </div>
//         <hr className="divider" />
//       </div>
//     </>
//   );
// };

// export default Summary;
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
          {/* <h3>Portfolio Insights</h3>

          <p className="coming-soon">
            Portfolio analytics and investment insights are coming soon.
          </p>

          <p className="portfolio-description">
            Future updates will include portfolio value, total investment,
            overall profit & loss, and detailed performance analytics.
          </p> */}
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

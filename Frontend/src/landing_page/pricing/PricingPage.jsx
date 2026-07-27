import React from "react";

function PricingPage() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Pricing</h1>

        <p
          className="text-muted mx-auto"
          style={{
            maxWidth: "700px",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          TradeXpert is an educational stock trading platform. All features are
          available free of cost, allowing you to explore trading concepts and
          portfolio management without any brokerage fees.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto" style={{ maxWidth: "1000px" }}>
        {/* Card 1 */}
        <div className="card shadow-sm border-0 rounded-4 mb-4">
          <div className="row align-items-center gx-4">
            <div className="col-md-9">
              <div className="card-body px-5 py-4">
                <h3 className="mb-3" style={{ color: "#387ed1" }}>
                  Virtual Trading
                </h3>

                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  Buy and sell stocks in a simulated environment to understand
                  how modern trading platforms work without investing real
                  money. Practice placing orders, build your portfolio, and
                  learn the complete trading workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card shadow-sm border-0 rounded-4 mb-4">
          <div className="row align-items-center gx-4">
            <div className="col-md-9">
              <div className="card-body px-5 py-4">
                <h3 className="mb-3" style={{ color: "#387ed1" }}>
                  Real-Time Market Data
                </h3>

                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  Monitor live stock prices and track your portfolio using
                  real-time market data powered by the Yahoo Finance API. Stay
                  informed with up-to-date market movements while practicing
                  investment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card shadow-sm border-0 rounded-4">
          <div className="row align-items-center gx-4">
            <div className="col-md-9">
              <div className="card-body px-5 py-4">
                <h3 className="mb-3" style={{ color: "#387ed1" }}>
                  Portfolio Management
                </h3>

                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  Manage your holdings, review order history, and analyze your
                  portfolio performance through a clean, intuitive dashboard
                  designed to provide a seamless trading experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="text-center mt-5 pt-5 border-top mx-auto"
        style={{ maxWidth: "850px" }}
      >
        <h3 className="mb-4">Why is TradeXpert Free?</h3>

        <p
          className="text-muted"
          style={{
            lineHeight: "1.9",
            fontSize: "1.05rem",
          }}
        >
          TradeXpert is developed as a full-stack MERN project for learning and
          portfolio purposes. It demonstrates secure authentication, RESTful
          APIs, real-time stock data integration, and user-specific dashboard
          management. Since it is a simulated trading platform, every feature is
          available without any charges.
        </p>
      </div>
    </div>
  );
}

export default PricingPage;

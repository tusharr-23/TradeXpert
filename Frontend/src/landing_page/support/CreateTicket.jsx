import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 mb-5">
        <h3 className="text-center mb-5">Explore TradeXpert Features</h3>

        <div className="col-lg-4 p-4">
          <h5>Authentication</h5>

          <p className="text-muted">
            Secure signup, login, JWT authentication, protected routes and
            logout functionality.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <h5>Trading</h5>

          <p className="text-muted">
            Place virtual buy and sell orders while maintaining user-specific
            holdings and order history.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <h5>Portfolio</h5>

          <p className="text-muted">
            View holdings, profit & loss, investment value and live stock prices
            in one dashboard.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <h5>Market Data</h5>

          <p className="text-muted">
            Live stock prices and market movements are fetched using the Yahoo
            Finance API.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <h5>Technology Stack</h5>

          <p className="text-muted">
            React.js, Node.js, Express.js, MongoDB, JWT Authentication and
            Material UI.
          </p>
        </div>

        <div className="col-lg-4 p-4">
          <h5>Purpose</h5>

          <p className="text-muted">
            TradeXpert is an educational MERN project created to simulate the
            workflow of a modern stock trading platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;

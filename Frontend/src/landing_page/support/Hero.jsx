import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div id="supportWrapper">
        <h4 className="mt-4">Need Help?</h4>

        <p className="mt-3" style={{ color: "white", maxWidth: "700px" }}>
          TradeXpert is a stock trading simulator developed using the MERN
          stack. If you'd like to understand how the project works or explore
          its features, you'll find everything below.
        </p>
      </div>

      <div className="row p-4" id="supportCont">
        <div className="col-lg-7 p-3 mb-4">
          <h5 className="mb-4">What can you do with TradeXpert?</h5>

          <ul style={{ lineHeight: "2", color: "white" }}>
            <li>Create your own account securely.</li>
            <li>Buy and sell stocks in a virtual environment.</li>
            <li>View real-time market prices.</li>
            <li>Track holdings and order history.</li>
            <li>Manage your portfolio through an intuitive dashboard.</li>
          </ul>
        </div>

        <div className="col-lg-5 p-4">
          <h5>Project Overview</h5>

          <p style={{ color: "white", lineHeight: "1.8" }}>
            This project demonstrates JWT authentication, protected routes,
            RESTful APIs, MongoDB integration, and real-time stock market data
            using the Yahoo Finance API.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

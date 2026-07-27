import React from "react";

function Hero() {
  return (
    <div className="container section-hero">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-lg-8">
          <img
            src="media/images/dashboard.png"
            alt="TradeXpert dashboard preview"
            className="mb-5 mx-auto img-responsive"
          />
          <h1>Trade smarter, track better</h1>
          <p className="mb-4">
            A full-stack trading dashboard to manage your watchlist, monitor
            positions, and stay on top of the market — built end-to-end with the
            MERN stack.
          </p>
          <div className="flex-center">
            <button className="btn btn-primary">Sign up Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

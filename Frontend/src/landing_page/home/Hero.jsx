import React from "react";

function Hero() {
  return (
    <div className="container section-hero">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Invest in everything"
          className="mb-5 img-responsive"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <div className="flex-center mb-5" style={{ minHeight: "60px" }}>
          <button className="btn btn-primary">Sign up Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

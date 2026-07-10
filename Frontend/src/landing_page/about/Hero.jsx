import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-4 mb-5 mt-5">
        <h1 className="text-center fs-2">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row p-4 mt-5 border-top text-muted">
        <div className="col-6 p-5">
          <p
            style={{
              lineHeight: "var(--line-height-relaxed)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            TradeXpert, a combination of Trade and Expert insights, our vision
            for barrier-free trading.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#">Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#">blog</a> or see what the media
            is <a href="#">saying about us</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

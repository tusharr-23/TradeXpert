import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-4">
        <h1 className="text-center text-muted">People</h1>
      </div>

      <div className="row p-4">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath - Founder & CEO"
            className="img-responsive"
            style={{ borderRadius: "50%", maxWidth: "200px" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p
            style={{
              lineHeight: "var(--line-height-relaxed)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Nithin bootstrapped and founded TradeXpert in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            TradeXpert has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a>
            <a href="#">/ TradingQnA</a>
            <a href="#">/ Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

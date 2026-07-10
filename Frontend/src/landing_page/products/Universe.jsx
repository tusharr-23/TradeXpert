import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="p-1">The TradeXpert Universe</h2>
        <p className="mb-4 p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-responsive"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-responsive"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-responsive"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">Option trading platform</p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media/images/tradexpertFundhouse.png"
            alt="TradeXpert Fundhouse"
            className="img-responsive"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-1">Asset Management</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-responsive"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-1">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-responsive"
            style={{ maxWidth: "120px" }}
          />
          <p className="text-small text-muted mt-2">Health insurance</p>
        </div>

        <div className="flex-center mb-5 mt-5" style={{ minHeight: "60px" }}>
          <button className="btn btn-primary">Sign up Now</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;

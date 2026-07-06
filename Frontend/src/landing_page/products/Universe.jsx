import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="p-1">The Zerodha Universe</h2>
        <p className="mb-4 p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-small text-muted">Algo & strtegy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-2">Option trading platform</p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "55%" }}
          />
          <p className="text-small text-muted mt-1">Asset Management</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-1">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "37%" }}
          />
          <p className="text-small text-muted mt-2">Health insurance</p>
        </div>

        <button
          className="p-1.75 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;

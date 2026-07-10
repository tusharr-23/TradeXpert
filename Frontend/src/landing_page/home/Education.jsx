import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Market education"
            className="img-responsive"
            style={{ maxWidth: "80%" }}
          />
        </div>

        <div className="col-6">
          <h2 className="fs-2 mb-5">Free and open market education</h2>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

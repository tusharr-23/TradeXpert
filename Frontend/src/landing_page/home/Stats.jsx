import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5">
          <h2 className="fs-2 mb-5">Trust with confidence</h2>

          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust TradeXpert with ₹4.5+ lakh
            crores of equity investments.
          </p>

          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-4">The TradeXpert universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="fs-4">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 mt-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-responsive"
          />
          <div
            className="text-center"
            style={{ marginTop: "var(--spacing-lg)" }}
          >
            <a href="#">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{ marginLeft: "var(--spacing-2xl)" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

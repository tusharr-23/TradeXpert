import React from "react";

const features = [
  {
    icon: "fa-chart-line",
    title: "Live Watchlist",
    description: "Track market movements with a fast and responsive watchlist.",
  },
  {
    icon: "fa-briefcase",
    title: "Position Monitoring",
    description: "Keep an eye on your holdings and portfolio performance.",
  },
  {
    icon: "fa-shield-halved",
    title: "Secure Access",
    description: "Protected authentication with secure user sessions.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Responsive UI",
    description: "Enjoy a clean experience across desktop, tablet, and mobile.",
  },
  {
    icon: "fa-user-clock",
    title: "Session Dashboard",
    description: "Your personalized dashboard is available after login.",
  },
  {
    icon: "fa-arrow-trend-up",
    title: "Trading Workflow",
    description: "Designed to simulate a real-world trading experience.",
  },
];

function Features() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-3">
              Everything you need, in one dashboard
            </h1>

            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              TradeXpert brings your watchlist and portfolio together in a
              single, fast interface built for quick decisions.
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    transition: "0.3s ease",
                    borderRadius: "15px",
                  }}
                >
                  <div className="card-body p-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 mb-3"
                      style={{
                        width: "55px",
                        height: "55px",
                      }}
                    >
                      <i
                        className={`fa-solid ${feature.icon} text-primary fs-4`}
                      ></i>
                    </div>

                    <h5 className="fw-semibold">{feature.title}</h5>

                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

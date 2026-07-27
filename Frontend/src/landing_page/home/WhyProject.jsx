import React from "react";

function WhyProject() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Section Heading */}
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3">Built with care, end to end</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
                TradeXpert isn't just a UI clone. It is a complete full-stack
                application designed with security, scalability, and usability
                in mind.
              </p>
            </div>

            {/* Features */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="ps-3 border-start border-4 border-primary h-100">
                  <h4 className="fw-semibold">Secure by Design</h4>
                  <p className="text-muted mb-0">
                    JWT-based authentication and authorization protect every
                    route, ensuring all data and actions remain tied to the
                    authenticated user.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ps-3 border-start border-4 border-primary h-100">
                  <h4 className="fw-semibold">No Clutter, No Noise</h4>
                  <p className="text-muted mb-0">
                    Focus on what matters with a clean interface that includes
                    only the essential trading tools and portfolio insights.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ps-3 border-start border-4 border-primary h-100">
                  <h4 className="fw-semibold">A Real Full-Stack Build</h4>
                  <p className="text-muted mb-0">
                    From MongoDB schemas and REST APIs to authentication and the
                    React frontend, every layer was built from scratch.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ps-3 border-start border-4 border-primary h-100">
                  <h4 className="fw-semibold">Open to Explore</h4>
                  <p className="text-muted mb-0">
                    Explore the project architecture, authentication flow, and
                    backend implementation through the public source code.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="text-center mt-5">
              <a href="/dashboard" className="btn btn-primary me-3 px-4">
                Explore Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyProject;

import React from "react";

function Footer() {
  return (
    <footer
      className="border-top py-5"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Logo & About */}
          <div className="col-12 col-md-6 col-lg-4">
            <img
              src="media/images/TradeXpert.svg"
              alt="TradeXpert logo"
              style={{ maxWidth: "125px", height: "auto" }}
            />

            <p
              className="text-muted mt-3 mb-2"
              style={{ fontSize: "0.95rem", lineHeight: "1.7" }}
            >
              A MERN-based stock trading simulator built to demonstrate
              full-stack development, secure authentication, and portfolio
              management.
            </p>

            <small className="text-muted">
              © {new Date().getFullYear()} TradeXpert
            </small>
          </div>

          {/* Navigation */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3">Navigation</h6>

            <a href="/" className="footer-link d-block mb-2">
              Home
            </a>

            <a href="/about" className="footer-link d-block mb-2">
              About
            </a>

            <a href="/product" className="footer-link d-block mb-2">
              Product
            </a>

            <a href="/support" className="footer-link d-block">
              Support
            </a>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="fw-bold mb-3">Resources</h6>

            <a
              href="https://github.com/your-username/tradexpert"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-block mb-2"
            >
              GitHub Repository
            </a>

            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-block"
            >
              Portfolio
            </a>
          </div>

          {/* Connect */}
          <div className="col-12 col-lg-3">
            <h6 className="fw-bold mb-3">Connect</h6>

            <a
              href="https://linkedin.com/in/ranatushar"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-block mb-2"
            >
              <i className="fa-brands fa-linkedin me-2"></i>
              LinkedIn
            </a>

            <a
              href="mailto:tusharrana81081@gmail.com"
              className="footer-link d-block mb-2"
            >
              <i className="fa-solid fa-envelope me-2"></i>
              Email
            </a>

            <a
              href="https://github.com/your-username/tradexpert"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link d-block"
            >
              <i className="fa-brands fa-github me-2"></i>
              GitHub
            </a>
          </div>
        </div>

        <hr className="my-1" />

        {/* Disclaimer */}
        <div
          className="text-center text-muted"
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <p className="mb-2">
            <strong>TradeXpert</strong> is a personal portfolio project created
            to showcase full-stack MERN development. It is intended for
            educational and demonstration purposes only.
          </p>

          <p className="mb-2">
            This is <strong>not</strong> a registered brokerage or financial
            services platform. No real trades are executed and no real funds are
            handled.
          </p>

          <p className="mb-0">
            Designed &amp; Developed by <strong>Tushar Rana</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

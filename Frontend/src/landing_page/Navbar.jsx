import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="TradeXpert logo"
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link
                className={isActive("/signup")}
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/about")} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/product")} to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/pricing")} to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/support")} to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/dashboard")} to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

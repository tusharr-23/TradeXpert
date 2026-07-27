import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { showSuccess, showError } from "../utils/toast";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navbarCollapseRef = useRef(null);

  const { isAuthenticated, logout } = useAuth();

  const closeNavbar = () => {
    if (window.innerWidth < 992 && navbarCollapseRef.current) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname.startsWith("/dashboard")
        ? "nav-link active"
        : "nav-link";
    }

    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  const handleLogout = async () => {
    try {
      const data = await logout();

      if (data.success) {
        showSuccess(data.message);
        navigate("/");
      }
    } catch (err) {
      showError("Logout failed.");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/TradeXpert.svg"
            alt="TradeXpert logo"
            style={{ maxWidth: "125px", height: "auto" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className={isActive("/")} to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={isActive("/about")}
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={isActive("/pricing")}
                to="/pricing"
                onClick={closeNavbar}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={isActive("/support")}
                to="/support"
                onClick={closeNavbar}
              >
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={isActive("/dashboard")}
                to="/dashboard"
                onClick={closeNavbar}
              >
                Dashboard
              </Link>
            </li>

            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link
                    className={isActive("/login")}
                    to="/login"
                    onClick={closeNavbar}
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={isActive("/signup")}
                    to="/signup"
                    onClick={closeNavbar}
                  >
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

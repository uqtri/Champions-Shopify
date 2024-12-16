import React from "react";
import { Cart, SearchIcon } from "../../assets/HeaderIcons";
import { Link } from "react-router-dom";
export default function HeaderForAdmin() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center">
        <div className="me-auto">
          <p className="h2 nav-brand fw-bolder">
            <a href="/" className="nav-link">
              Champions
            </a>
          </p>
        </div>
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
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link" href="/user-management">
                USER MANAGEMENT
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/statistics">
                STATISTICS
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/add-product">
                ADD PRODUCT
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="/signin"
                onClick={() => {
                  localStorage.setItem("username", "");
                }}
              >
                LOG OUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

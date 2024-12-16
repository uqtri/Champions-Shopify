import React from "react";
import { Cart, SearchIcon } from "../../assets/HeaderIcons";
import { Link } from "react-router-dom";
export default function HeaderForClient() {
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
              <a className="nav-link" href="/shop?page=1">
                SHOP
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/cart">
                CART
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                USER
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/user">
                    Update
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/signin"
                    onClick={() => {
                      localStorage.setItem("username", "");
                    }}
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </li>
            <li className="d-flex border rounded-pill ps-3 outline-0 border-0 p-1">
              <input
                type="text"
                className="border-0 outline-0 rounded-start-pill ps-2"
              />
              <button className="ms-auto border-0 outline-0 bg rounded-end-pill">
                <SearchIcon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

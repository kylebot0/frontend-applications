import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="navbar-container">
        <Link className="navbar-nav-brand" to="/">
          NMVW
        </Link>
        <div className="navbar-link-container">
          <Link className="navbar-nav-item" to="/about">
            About
          </Link>
          <Link className="navbar-nav-item" to="/">
            -
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

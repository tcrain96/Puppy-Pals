import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <h1>Puppy Pals</h1>
      </Link>

      <nav>
        <>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <p>Dashboard</p>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <p>Profile</p>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <p>Login</p>
          </Link>
        </>
      </nav>
    </header>
  );
};

export default Header;

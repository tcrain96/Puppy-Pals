import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <h1>Puppy Pals</h1>
      </Link>

      <nav>
        {Auth.loggedIn() ? (
          <>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <p>Dashboard</p>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <p>Profile</p>
            </Link>
            <a href="/login" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <p>Dashboard</p>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <p>Profile</p>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

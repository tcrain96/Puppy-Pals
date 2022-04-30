import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Auth from "../../utils/auth";
import logo from "../../assets/horizontal-logo.png"

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
      <img src={logo}> 
        
        </img>
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

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Auth from "../../utils/auth";
import logo from "../../assets/horizontal-logo.png";

import { useQuery } from "@apollo/client";
import { QUERY_ME_BASIC } from "../../utils/queries";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  let profileLink = null;
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  if (userData) {
    profileLink = "/profile/" + userData.me.username;
    console.log(profileLink);
  }

  return (
    <header>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <img src={logo} alt="puppy-pals logo" className="horizontal-logo"></img>
      </Link>

      <nav>
        {Auth.loggedIn() & userData ? (
          <>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <p>Dashboard</p>
            </Link>
            <Link to={profileLink} style={{ textDecoration: "none" }}>
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
            <Link to={profileLink} style={{ textDecoration: "none" }}>
              <p>Profile</p>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/dashboard">
          <h1>Puppy Pals</h1>
        </Link>

        <nav className="text-center">
          <>
            <Link to="/profile">Me</Link>
            <a href="/login">Logout</a>
          </>
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        </nav>
      </div>
    </header>
  );
};

export default Header;

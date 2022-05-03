import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import { Link } from "react-router-dom";
import "./css/Login.css";
import Auth from "../utils/auth";
import logo from "../assets/logo.png";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);



  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  

  

  return (
    <main>
      <div className="content">
        <img src={logo} alt="puppy pals logo" className="logo"></img>
        <form onSubmit={handleFormSubmit}>
          <article className="login-inputs">
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />

          </article>

          <article className="login-buttons">
            <button type="submit">Login</button>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p>Register</p>
            </Link>
          </article>
        </form>

        {error && <div>Login failed</div>}
      </div>
    </main>
  );
};

export default Login;

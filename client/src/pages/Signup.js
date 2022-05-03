import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import "./css/Signup.css";
import Auth from "../utils/auth";
import logo from "../assets/logo.png";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

const [confirmformState, confirmsetFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState("");



  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // Password Validation

  const checkValidation=(e)=>{
    const confPass = e.target.value;
    confirmsetFormState(confPass);
    if (formState.password != confPass) {
      setIsError("Confirm Password Does Not Match!");
    
    }else{
      setIsError("");
    }


    };


  return (
    <main>
      <div className="content">
        <img src={logo} alt="puppy pals logo" className="logo"></img>
        <div>
          <form onSubmit={handleFormSubmit}>
            <article className="login-inputs">
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
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

            <div className="cnfrm">
              {isError}
            </div>

            <input
              className="form-input"
              placeholder="Confirm Password"
              name="confirmpassword"
              type="password"
              id="confirmpassword"
              value={confirmformState.password}
              onChange={(e)=>checkValidation(e)}
            />



            </article>
            <article className="login-buttons">
              <button type="submit">Register</button>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <p>Cancel</p>
              </Link>
            </article>
          </form>
          <div>
          </div>
        </div>
        {error && <div>Signup failed</div>}
      </div>
    </main>
  );
};

export default Signup;

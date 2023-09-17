import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Add state for error message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3080/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/storytellerchoice");
        } else {
          // Update the error message state
          setErrorMessage(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
        <h1>Log in.</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-container">
            <h2>
              Email
            </h2>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="login-form"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-container">
            <h2>
              Password
            </h2>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="login-form"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-button-container">
          <button type="submit" className="login-button">
            Start
          </button>
          </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
          
        </form>
    </div>
  );
};

export default Login;

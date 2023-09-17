import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3080/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/storytellerchoice");
        } else {
          setErrorMessage(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login" data-aos="fade-up" data-aos-duration="3000">
      <h1>Log in.</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <h2>Email</h2>
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
          <h2>Password</h2>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            className="login-form"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="login-button-container">
          <button type="submit" className="login-button">
            Start
          </button>
        </div>
      </form>
      <div class="login-copyright">
        Built and designed by Soraya Panambalom. <br />
        All right reserved. &copy;
      </div>
    </div>
  );
};

export default Login;

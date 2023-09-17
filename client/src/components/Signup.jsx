import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3080/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup" data-aos="fade-down" data-aos-duration="3000">
      <h1>Sign up.</h1>
      <form onSubmit={handleSubmit}>
        <div className="signup-container">
          <h2>Name</h2>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="email"
            className="signup-form"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="signup-container">
          <h2>Email</h2>
          <input
            type="text"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="signup-form"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup-container">
          <h2>Password</h2>
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            name="password"
            className="signup-form"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signup-button-container">
        <button type="submit" className="signup-button">
          Register
        </button>
        </div>
      </form>
      <div className="signup-login-button-container">
      <h2>If you are registered, please log in.</h2>
      <Link to="/login" className="signup-login-button">
        Login
      </Link>
      </div>
      
    </div>
  );
};

export default Signup;

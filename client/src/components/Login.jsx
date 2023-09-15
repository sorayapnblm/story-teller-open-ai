import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="constainer1">
      <div className="container2">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="container3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="container-form"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="container-form"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button">
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

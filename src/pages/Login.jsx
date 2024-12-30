import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.scss";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert(`Welcome back, ${user.name}!`);
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Hello, welcome to Krone.id</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Your Email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Your Password" />

        <div className="signup-link">
          Don't have an account?{" "}
          <a href="/register" className="link">
            Sign up
          </a>
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
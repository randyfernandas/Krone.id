import React from "react";
import { useNavigate } from "react-router-dom";
import "../style.scss";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least one uppercase letter and one number.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert("Email is already registered. Please use a different email.");
      return;
    }

    const newUser = { name, email, phone, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h1>Join Krone.id and Stay Ahead in the Crypto Market!</h1>
      <form className="register-form" onSubmit={handleRegister}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter Your Name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter Your Email" />

        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" placeholder="Enter Your Phone Number" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Your Password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Retype Your Password"
        />

        <div className="signin-link">
          Already have an account?{" "}
          <a href="/login" className="link">
            Sign In
          </a>
        </div>

        <button type="submit" className="register-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
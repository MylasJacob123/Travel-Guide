import React, { useState } from "react";
import Image01 from "../assets/bg-image.jpg";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("https://travel-guide-backed.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate("/");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const linkToRegister = () => {
    navigate("/register");
  };

  const linkToForgot = () => {
    navigate("/forgot");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login">
      <div className="LoginPage">
        <div className="LoginPage-up">
          <img
            src={Image01}
            className="LoginPage-image"
            alt="a place in Africa"
          />
        </div>
        <div className="LoginPage-down">
          <p className="LoginPage-heard">Welcome Back!</p>
          {errorMessage && <p className="LoginPage-error">{errorMessage}</p>}
          <input
            className="LoginPage-Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="LoginPage-Password-Container">
            <input
              className="LoginPage-Password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="LoginPage-Password-Toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
            <div className="Forgot-Container">
              <span className="Link-Text" onClick={linkToForgot}>
                Forgot Password
              </span>
            </div>
          </div>
          <button className="LoginPage-button" onClick={handleLogin}>
            Login
          </button>
          <span>
            Don't have an account?{" "}
            <span className="Link-Text" onClick={linkToRegister}>
              Register
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

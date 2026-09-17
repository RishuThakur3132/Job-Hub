import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("isLogged", "true");
    localStorage.setItem("userEmail", email);

    alert("Login Successful!");

    navigate("/profile");
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-box">
          <div className="login-icon">
            <FaSignInAlt />
          </div>

          <h2>Welcome Back</h2>
          <p>Login to your Job Hub account</p>

          <form onSubmit={handleLogin}>
            <label>Email Address</label>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              <FaSignInAlt />
              Login
            </button>
          </form>

          <div className="signup-text">
            Don't have an account?
            <Link to="/signup"> Create Account</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
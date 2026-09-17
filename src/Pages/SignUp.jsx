import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password
      })
    );

    localStorage.setItem("isLogged", "true");
    localStorage.setItem("userEmail", email);

    alert("Account Created Successfully!");

    navigate("/profile");
  };

  return (
    <>
      <Navbar />

      <div className="signup-page">
        <div className="signup-box">
          <div className="signup-icon">
            <FaUserPlus />
          </div>

          <h2>Create Account</h2>
          <p>Join Job Hub and find your dream job</p>

          <form onSubmit={handleSignup}>
            <label>Full Name</label>

            <div className="input-box">
              <FaUser />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              <FaUserPlus />
              Create Account
            </button>
          </form>

          <div className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
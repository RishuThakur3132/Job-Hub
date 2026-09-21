import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBriefcase,
  FaHome,
  FaSearch,
  FaUser,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import "../CSS/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("isLogged") === "true"
  );

  const logout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("currentUser");

    setIsLogged(false);
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <FaBriefcase />
          <span>JobHub</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/jobs">
            <FaSearch />
            <span>Jobs</span>
          </Link>

          <Link to="/about">
            <FaInfoCircle />
            <span>About</span>
          </Link>
        </nav>

        <div className="auth-buttons">
          {isLogged ? (
            <>
              <Link to="/profile" className="profile-btn">
                <FaUser />
                <span>Profile</span>
              </Link>

              <button onClick={logout} className="logout-btn">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="login-btn">
                <FaSignInAlt />
                <span>Login</span>
              </Link>

              <Link to="/signup" className="signup-btn">
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
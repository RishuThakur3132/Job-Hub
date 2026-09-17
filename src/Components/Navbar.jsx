import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaHome,
  FaSearch,
  // FaClipboardList,
  // FaUser,
  FaInfoCircle
} from "react-icons/fa";
import "../CSS/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <FaBriefcase />
          <span>JobHub</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">

          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link to="/jobs">
            <FaSearch />
            <span>Jobs</span>
          </Link>

          {/* <Link to="/application">
            <FaClipboardList />
            <span>Application</span>
          </Link> */}

          <Link to="/about">
            <FaInfoCircle />
            <span>About</span>
          </Link>

        </nav>

        {/* Profile
        <Link to="/profile" className="profile-btn">
          <FaUser />
          <span>Profile</span>
        </Link> */}

      </div>
    </header>
  );
}

export default Navbar;
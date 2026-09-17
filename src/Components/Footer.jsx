import { Link } from "react-router-dom";
import { FaBriefcase, FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand">

          <Link to="/" className="footer-logo">
            <FaBriefcase />
            JobHub
          </Link>

          <p>
            Find your dream job and build your
            career with the right opportunities.
          </p>

          <div className="social-icons">

            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Find Jobs</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/about">About Us</Link>

        </div>

        {/* Candidate */}
        <div className="footer-column">

          <h3>For Candidates</h3>

          <Link to="/login">Login</Link>
          <Link to="/signup">Create Account</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/applications">My Applications</Link>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>Email: support@jobhub.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 JobHub. All rights reserved.
        </p>

        <div>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
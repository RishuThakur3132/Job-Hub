import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEdit,
  FaSignOutAlt
} from "react-icons/fa";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user] = useState(() => {
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  });

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  if (!user) {
    return (
      <>
        <Navbar />

        <main className="profile-page">
          <div className="profile-login-box">
            <FaUser />
            <h2>Please Login</h2>
            <p>You need to login to view your profile.</p>

            <button onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="profile-page">
        <div className="profile-container">

          <section className="profile-header">
            <div className="profile-avatar">
              <FaUser />
            </div>

            <div className="profile-header-content">
              <h1>{user.name}</h1>

              <p>
                <FaBriefcase />
                Job Seeker
              </p>

              <span>
                <FaMapMarkerAlt />
                India
              </span>
            </div>

            <button className="edit-btn">
              <FaEdit />
              Edit Profile
            </button>
          </section>

          <section className="profile-grid">

            <div className="profile-card">
              <h2>Personal Information</h2>

              <div className="profile-item">
                <div className="item-icon">
                  <FaUser />
                </div>

                <div>
                  <small>Full Name</small>
                  <strong>{user.name}</strong>
                </div>
              </div>

              <div className="profile-item">
                <div className="item-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>Email Address</small>
                  <strong>{user.email}</strong>
                </div>
              </div>

              <div className="profile-item">
                <div className="item-icon">
                  <FaPhone />
                </div>

                <div>
                  <small>Phone Number</small>
                  <strong>Not Added</strong>
                </div>
              </div>

              <div className="profile-item">
                <div className="item-icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <small>Location</small>
                  <strong>India</strong>
                </div>
              </div>
            </div>

            <div className="profile-card">
              <h2>Professional Information</h2>

              <div className="profile-item">
                <div className="item-icon">
                  <FaBriefcase />
                </div>

                <div>
                  <small>Job Status</small>
                  <strong>Actively Looking for Job</strong>
                </div>
              </div>

              <div className="profile-item">
                <div className="item-icon">
                  <FaGraduationCap />
                </div>

                <div>
                  <small>Education</small>
                  <strong>Not Added</strong>
                </div>
              </div>

              <div className="profile-item">
                <div className="item-icon">
                  <FaBriefcase />
                </div>

                <div>
                  <small>Experience</small>
                  <strong>Fresher</strong>
                </div>
              </div>

              <div className="skills-section">
                <div className="skills-title">
                  <FaCode />
                  <span>Skills</span>
                </div>

                <div className="skills">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                </div>
              </div>
            </div>

          </section>

          <section className="profile-bottom">
            <div>
              <h2>Find Your Dream Job</h2>
              <p>
                Explore new opportunities and build your career with Job Hub.
              </p>
            </div>

            <div className="bottom-buttons">
              <button
                className="jobs-btn"
                onClick={() => navigate("/jobs")}
              >
                Browse Jobs
              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
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
  FaSignOutAlt,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user] = useState(() => {
    const data = localStorage.getItem("user");

    try {
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("currentUser");

    navigate("/login");
  };

  if (!user) {
    return (
      <>
        <Navbar />

        <main className="profile-page">
          <div className="profile-login-box">
            <FaUser />

            <h2>Welcome to JobHub</h2>

            <p>
              Login to manage your profile, applications,
              skills and career information.
            </p>

            <button onClick={() => navigate("/login")}>
              Login to Continue
              <FaArrowRight />
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

          {/* Profile Header */}
          <section className="profile-header">

            <div className="profile-avatar">
              <FaUser />
            </div>

            <div className="profile-header-content">
              <h1>{user.name || "Job Seeker"}</h1>

              <p>
                <FaBriefcase />
                Job Seeker
              </p>

              <span>
                <FaMapMarkerAlt />
                India
              </span>
            </div>

            <button
              className="edit-btn"
              onClick={() => alert("Profile editing coming soon!")}
            >
              <FaEdit />
              Edit Profile
            </button>

          </section>

          {/* Profile Information */}
          <section className="profile-grid">

            {/* Personal Information */}
            <div className="profile-card">

              <h2>Personal Information</h2>

              <div className="profile-item">
                <div className="item-icon">
                  <FaUser />
                </div>

                <div>
                  <small>Full Name</small>
                  <strong>
                    {user.name || "Not Added"}
                  </strong>
                </div>
              </div>

              <div className="profile-item">
                <div className="item-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <small>Email Address</small>
                  <strong>
                    {user.email || "Not Added"}
                  </strong>
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

            {/* Professional Information */}
            <div className="profile-card">

              <h2>Professional Information</h2>

              <div className="profile-item">
                <div className="item-icon">
                  <FaBriefcase />
                </div>

                <div>
                  <small>Job Status</small>
                  <strong>
                    Actively Looking for Job
                  </strong>
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

              {/* Skills */}
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

          {/* Career CTA */}
          <section className="profile-bottom">

            <div>
              <h2>Ready for your next opportunity?</h2>

              <p>
                Explore jobs that match your skills and
                take the next step in your career with JobHub.
              </p>
            </div>

            <div className="bottom-buttons">

              <button
                className="jobs-btn"
                onClick={() => navigate("/jobs")}
              >
                Browse Jobs
                <FaArrowRight />
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
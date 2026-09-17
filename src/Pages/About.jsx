import { FaBriefcase, FaUsers, FaBuilding, FaCheckCircle } from "react-icons/fa";
import "../CSS/About.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
    <Navbar />

    <div className="about-page">
      <section className="about-hero">
        <div className="about-content">
          <span className="about-tag">
            <FaBriefcase /> ABOUT JOB HUB
          </span>

          <h1>
            Build Your Career With <span>Job Hub</span>
          </h1>

          <p>
            Job Hub is a simple and professional platform that connects
            job seekers with the right career opportunities and trusted
            companies.
          </p>

          <a href="/jobs" className="about-btn">
            Explore Jobs
          </a>
        </div>

        <div className="about-card">
          <FaBriefcase className="main-icon" />

          <h2>Your Career, Your Future</h2>

          <p>
            Discover jobs, connect with companies, and take the next
            step toward your dream career.
          </p>
        </div>
      </section>

      <section className="about-info">
        <div>
          <h2>Why Choose <span>Job Hub?</span></h2>

          <p>
            We make job searching easy, fast, and convenient for everyone.
            Find opportunities that match your skills and career goals.
          </p>

          <div className="points">
            <p><FaCheckCircle /> Easy job search</p>
            <p><FaCheckCircle /> Trusted companies</p>
            <p><FaCheckCircle /> Multiple career opportunities</p>
          </div>
        </div>

        <div className="about-stats">
          <div>
            <FaBriefcase />
            <h3>1000+</h3>
            <span>Jobs</span>
          </div>

          <div>
            <FaBuilding />
            <h3>500+</h3>
            <span>Companies</span>
          </div>

          <div>
            <FaUsers />
            <h3>10K+</h3>
            <span>Users</span>
          </div>
        </div>
      </section>
    </div>
     <Footer />
    </>
  );
}

export default About;
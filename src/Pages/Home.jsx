import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getJobs } from "../Api.js";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import JobCard from "../Components/JobCard.jsx";
import "../CSS/Home.css";

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data);
    });
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-small">FIND YOUR DREAM CAREER</p>

            <h1>
              Find Your
              <span> Dream Job </span>
              Today
            </h1>

            <p className="hero-description">
              Discover thousands of job opportunities and
              take the next step in your career.
            </p>

            <div className="hero-buttons">
              <Link to="/jobs" className="primary-btn">
                Find Jobs
              </Link>
            </div>
          </div>
        </section>

        <section className="featured-jobs">
          <div className="section-heading">
            <div>
              <p>OPPORTUNITIES</p>
              <h2>Featured Jobs</h2>
            </div>

            <Link to="/jobs">View All Jobs →</Link>
          </div>

          <div className="jobs-grid">
            {jobs.slice(0, 6).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
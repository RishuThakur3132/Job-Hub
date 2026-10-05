import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaBriefcase,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

import "../CSS/JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setJob(null);

        const response = await fetch(
          `https://dummyjson.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("Job not found");
        }

        const user = await response.json();

        const titles = [
          "Frontend Developer",
          "Backend Developer",
          "React Developer",
          "JavaScript Developer",
          "Full Stack Developer",
          "Software Developer",
          "UI/UX Designer",
          "Web Developer",
        ];

        const categories = [
          "IT",
          "Software",
          "Design",
          "Development",
        ];

        const types = [
          "Full Time",
          "Part Time",
          "Remote",
        ];

        const salaries = [
          "₹5 - ₹8 LPA",
          "₹6 - ₹10 LPA",
          "₹4 - ₹7 LPA",
          "₹7 - ₹12 LPA",
          "₹8 - ₹15 LPA",
        ];

        const descriptions = [
          "We are looking for a talented professional to join our growing team. You will work on exciting projects, collaborate with experienced developers and contribute to building modern digital solutions.",

          "Join our team and work on innovative products while improving your technical skills and gaining valuable industry experience.",

          "We are looking for a motivated professional who enjoys solving problems, learning new technologies and working with a collaborative team.",
        ];

        const responsibilities = [
          "Develop and maintain modern web applications.",
          "Work with the development team on new features.",
          "Write clean, reusable and maintainable code.",
          "Fix bugs and improve application performance.",
          "Participate in team meetings and technical discussions.",
        ];

        const requirements = [
          "Good knowledge of JavaScript.",
          "Understanding of React.js.",
          "Basic knowledge of HTML and CSS.",
          "Understanding of REST APIs.",
          "Good problem-solving skills.",
          "Ability to work effectively in a team.",
        ];

        const skills = [
          "JavaScript",
          "React.js",
          "HTML",
          "CSS",
          "Git",
        ];

        const index = Number(id) - 1;

        const jobData = {
          id: user.id,

          title: titles[index % titles.length],

          company:
            user.company?.name || "Tech Company",

          location:
            user.address?.city || "India",

          salary:
            salaries[index % salaries.length],

          type:
            types[index % types.length],

          category:
            categories[index % categories.length],

          description:
            descriptions[index % descriptions.length],

          responsibilities,

          requirements,

          skills,
        };

        setJob(jobData);
      } catch (error) {
        console.error("Error fetching job:", error);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleApply = () => {
    if (!job) return;

    const existingApplications =
      JSON.parse(
        localStorage.getItem("applications")
      ) || [];

    const alreadyApplied =
      existingApplications.some(
        (application) =>
          application.jobId === job.id
      );

    if (alreadyApplied) {
      alert(
        "You have already applied for this job."
      );

      return;
    }

    const application = {
      jobId: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      type: job.type,
      category: job.category,
      appliedAt:
        new Date().toLocaleString(),
      status: "Applied",
    };

    localStorage.setItem(
      "applications",
      JSON.stringify([
        ...existingApplications,
        application,
      ])
    );

    alert(
      "Application submitted successfully! 🎉"
    );
  };

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="job-details-page">
          <div className="details-message">
            <div className="loading-spinner"></div>

            <h2>Loading Job...</h2>

            <p>
              Please wait while we load the job
              details.
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /* =========================
     JOB NOT FOUND
  ========================= */

  if (!job) {
    return (
      <>
        <Navbar />

        <main className="job-details-page">
          <div className="details-message">

            <div className="not-found-icon">
              <FaBriefcase />
            </div>

            <h2>Job Not Found</h2>

            <p>
              The job you are looking for
              does not exist.
            </p>

            <Link
              to="/jobs"
              className="back-jobs-btn"
            >
              Browse Jobs
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="job-details-page">

        <div className="details-container">

          {/* Back Button */}

          <Link
            to="/jobs"
            className="back-link"
          >
            <FaArrowLeft />
            Back to Jobs
          </Link>

          {/* =========================
              JOB HEADER
          ========================= */}

          <section className="job-details-header">

            <div className="company-large-icon">
              <FaBuilding />
            </div>

            <div className="job-header-info">

              <div className="job-title-row">

                <div>

                  <p className="details-category">
                    {job.category}
                  </p>

                  <h1>
                    {job.title}
                  </h1>

                  <h3>
                    {job.company}
                  </h3>

                </div>

                <span className="details-job-type">
                  {job.type}
                </span>

              </div>

              <div className="header-job-info">

                <span>
                  <FaMapMarkerAlt />
                  {job.location}
                </span>

                <span>
                  <FaMoneyBillWave />
                  {job.salary}
                </span>

                <span>
                  <FaBriefcase />
                  {job.category}
                </span>

              </div>

            </div>

          </section>

          {/* =========================
              MAIN CONTENT
          ========================= */}

          <section className="details-layout">

            {/* LEFT SIDE */}

            <div className="details-main">

              {/* Description */}

              <div className="details-card">

                <h2>
                  Job Description
                </h2>

                <p>
                  {job.description}
                </p>

              </div>

              {/* Responsibilities */}

              <div className="details-card">

                <h2>
                  Responsibilities
                </h2>

                <ul>

                  {job.responsibilities.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}

                </ul>

              </div>

              {/* Requirements */}

              <div className="details-card">

                <h2>
                  Requirements
                </h2>

                <ul>

                  {job.requirements.map(
                    (item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  )}

                </ul>

              </div>

              {/* Skills */}

              <div className="details-card">

                <h2>
                  Required Skills
                </h2>

                <div className="job-skills">

                  {job.skills.map(
                    (skill, index) => (
                      <span key={index}>
                        <FaCheckCircle />
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* =========================
                RIGHT SIDE
            ========================= */}

            <aside className="application-card">

              <h2>
                Apply for this job
              </h2>

              <p>
                Take the next step in your
                career with JobHub.
              </p>

              <button
                onClick={handleApply}
                className="apply-btn"
              >
                Apply Now
              </button>

              <Link
                to="/applications"
                className="applications-link"
              >
                View My Applications
              </Link>

              <div className="quick-info">

                <div>

                  <FaClock />

                  <span>
                    <strong>
                      Job Type
                    </strong>

                    {job.type}
                  </span>

                </div>

                <div>

                  <FaMoneyBillWave />

                  <span>
                    <strong>
                      Salary
                    </strong>

                    {job.salary}
                  </span>

                </div>

                <div>

                  <FaMapMarkerAlt />

                  <span>
                    <strong>
                      Location
                    </strong>

                    {job.location}
                  </span>

                </div>

                <div>

                  <FaBriefcase />

                  <span>
                    <strong>
                      Category
                    </strong>

                    {job.category}
                  </span>

                </div>

              </div>

            </aside>

          </section>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default JobDetails;
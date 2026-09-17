import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaBuilding, FaBriefcase, FaArrowLeft } from "react-icons/fa";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import "../CSS/JobDetails.css";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Job not found");
        }

        return response.json();
      })
      .then((user) => {
        const titles = [
          "Frontend Developer",
          "Backend Developer",
          "React Developer",
          "JavaScript Developer",
          "Full Stack Developer",
          "Software Developer",
          "UI/UX Designer",
          "Web Developer"
        ];

        const categories = [
          "IT",
          "Software",
          "Design",
          "Development"
        ];

        const types = [
          "Full Time",
          "Part Time",
          "Remote"
        ];

        const index = Number(id) - 1;

        const jobData = {
          id: user.id,
          title: titles[index % titles.length],
          company:
            user.company?.name || "Tech Company",
          location:
            user.address?.city || "India",
          salary: "₹5 - ₹12 LPA",
          type: types[index % types.length],
          category:
            categories[index % categories.length],

          description:
            "We are looking for a talented professional to join our growing team. The selected candidate will work with experienced team members and contribute to exciting projects.",

          responsibilities: [
            "Develop and maintain web applications.",
            "Work with the development team on new features.",
            "Write clean and reusable code.",
            "Fix bugs and improve application performance.",
            "Participate in team meetings and discussions."
          ],

          requirements: [
            "Good knowledge of JavaScript.",
            "Understanding of React.js.",
            "Basic knowledge of HTML and CSS.",
            "Good problem-solving skills.",
            "Ability to work in a team."
          ]
        };

        setJob(jobData);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
      alert("You have already applied for this job.");
      return;
    }

    const application = {
      jobId: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      type: job.type,
      appliedAt: new Date().toLocaleString(),
      status: "Applied"
    };

    localStorage.setItem(
      "applications",
      JSON.stringify([
        ...existingApplications,
        application
      ])
    );

    alert("Application submitted successfully! 🎉");
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="details-message">
          <h2>Loading Job...</h2>
          <p>Please wait while we load the job details.</p>
        </div>

        <Footer />
      </>
    );
  }

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="details-message">
          <h2>Job Not Found</h2>

          <p>
            The job you are looking for does not exist.
          </p>

          <Link to="/jobs" className="back-jobs-btn">
            Browse Jobs
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="job-details-page">

        {/* Back */}
        <div className="details-container">

          <Link to="/jobs" className="back-link">
            <FaArrowLeft />
            Back to Jobs
          </Link>

          {/* Header */}
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

                  <h1>{job.title}</h1>

                  <h3>{job.company}</h3>
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

          {/* Main */}
          <section className="details-layout">

            {/* Left */}
            <div className="details-main">

              <div className="details-card">

                <h2>Job Description</h2>

                <p>
                  {job.description}
                </p>

              </div>

              <div className="details-card">

                <h2>Responsibilities</h2>

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

              <div className="details-card">

                <h2>Requirements</h2>

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

            </div>

            {/* Right */}
            <aside className="application-card">

              <h2>Apply for this job</h2>

              <p>
                Take the next step in your career.
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
                    <strong>Job Type</strong>
                    {job.type}
                  </span>
                </div>

                <div>
                  <FaMoneyBillWave />

                  <span>
                    <strong>Salary</strong>
                    {job.salary}
                  </span>
                </div>

                <div>
                  <FaMapMarkerAlt />

                  <span>
                    <strong>Location</strong>
                    {job.location}
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
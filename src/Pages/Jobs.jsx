import { useEffect, useMemo, useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import JobCard from "../Components/JobCard";

import "../CSS/Jobs.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch Jobs
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=30")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        return response.json();
      })
      .then((data) => {
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

        const jobData = data.users.map((user, index) => ({
          id: user.id,
          title: titles[index % titles.length],
          company: user.company?.name || "Tech Company",
          location: user.address?.city || "India",
          salary: "₹5 - ₹12 LPA",
          type: types[index % types.length],
          category: categories[index % categories.length],
          description:
            "We are looking for a talented professional to join our team and work on exciting projects.",
        }));

        setJobs(jobData);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Search and Filters
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchText = search.toLowerCase();

      const searchMatch =
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText);

      const locationMatch =
        location === "" ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const typeMatch =
        jobType === "" || job.type === jobType;

      const categoryMatch =
        category === "" || job.category === category;

      return (
        searchMatch &&
        locationMatch &&
        typeMatch &&
        categoryMatch
      );
    });
  }, [jobs, search, location, jobType, category]);

  // Reset Filters
  const resetFilters = () => {
    setSearch("");
    setLocation("");
    setJobType("");
    setCategory("");
  };

  return (
    <>
      <Navbar />

      <main className="jobs-page">

        {/* Header */}
        <section className="jobs-header">
          <div className="jobs-header-content">
            <p className="jobs-small-title">
              EXPLORE OPPORTUNITIES
            </p>

            <h1>Find Your Dream Job</h1>

            <p className="jobs-subtitle">
              Discover the latest job opportunities and
              take the next step in your career.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="job-search-section">
          <div className="search-box">

            <div className="search-input">
              <FaSearch />

              <input
                type="text"
                placeholder="Job title or company"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="location-input">
              <FaMapMarkerAlt />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button className="search-button">
              <FaSearch />
              Search
            </button>

          </div>
        </section>

        {/* Main Content */}
        <section className="jobs-content">

          {/* Filters */}
          <aside className="filters">

            <div className="filter-heading">
              <h3>Filters</h3>

              <button onClick={resetFilters}>
                Reset
              </button>
            </div>

            <div className="filter-group">
              <label>Job Type</label>

              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="IT">IT</option>
                <option value="Software">Software</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
              </select>
            </div>

          </aside>

          {/* Job List */}
          <div className="jobs-list">

            <div className="jobs-list-header">
              <div>
                <h2>Available Jobs</h2>
                <p>{filteredJobs.length} jobs found</p>
              </div>
            </div>

            {loading ? (
              <div className="jobs-message">
                <h3>Loading Jobs...</h3>
                <p>Please wait while we find the best jobs for you.</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="jobs-grid-page">
                {filteredJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                  />
                ))}
              </div>
            ) : (
              <div className="jobs-message">
                <h3>No Jobs Found</h3>

                <p>
                  Try changing your search or filters.
                </p>

                <button onClick={resetFilters}>
                  Clear Filters
                </button>
              </div>
            )}

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Jobs;
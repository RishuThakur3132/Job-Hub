import { FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaBuilding} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../CSS/JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">

      <div className="job-top">

        <div className="company-icon">
          <FaBuilding />
        </div>

        <span className="job-type">
          {job.type}
        </span>

      </div>

      <h3>{job.title}</h3>

      <p className="company-name">
        {job.company}
      </p>

      <div className="job-info">

        <span>
          <FaMapMarkerAlt />
          {job.location}
        </span>

        <span>
          <FaMoneyBillWave />
          {job.salary}
        </span>

        <span>
          <FaClock />
          {job.type}
        </span>

      </div>

      <div className="job-bottom">

        <span className="category">
          {job.category}
        </span>

        <Link
          to={`/job/${job.id}`}
          className="details-btn"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default JobCard;
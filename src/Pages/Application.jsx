// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaBriefcase,
//   FaFileAlt
// } from "react-icons/fa";

// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import "../CSS/Application.css";

// function Application() {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [job, setJob] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || !job) {
//       alert("Please fill all required fields");
//       return;
//     }

//     alert("Application Submitted Successfully!");

//     navigate("/profile");
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="application-page">
//         <div className="application-box">

//           <div className="application-header">
//             <div className="application-icon">
//               <FaFileAlt />
//             </div>

//             <h1>Job Application</h1>
//             <p>Apply for your desired job at Job Hub</p>
//           </div>

//           <form onSubmit={handleSubmit}>

//             <label>Full Name</label>
//             <div className="application-input">
//               <FaUser />
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>

//             <label>Email Address</label>
//             <div className="application-input">
//               <FaEnvelope />
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <label>Phone Number</label>
//             <div className="application-input">
//               <FaPhone />
//               <input
//                 type="tel"
//                 placeholder="Enter your phone number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>

//             <label>Job Position</label>
//             <div className="application-input">
//               <FaBriefcase />
//               <input
//                 type="text"
//                 placeholder="Enter job position"
//                 value={job}
//                 onChange={(e) => setJob(e.target.value)}
//               />
//             </div>

//             <label>Message</label>
//             <textarea
//               placeholder="Write a short message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>

//             <button type="submit">
//               <FaFileAlt />
//               Submit Application
//             </button>

//           </form>
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default Application;
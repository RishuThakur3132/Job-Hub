import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Jobs from "./Pages/Jobs.jsx";
import JobDetails from "./Pages/JobDetails.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Profile from "./Pages/Profile.jsx";
import About from "./Pages/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />

      {/* Job Details */}
      <Route path="/job/:id" element={<JobDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
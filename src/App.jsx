import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Jobs from "./Pages/Jobs.jsx";;
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Profile from "./Pages/Profile.jsx";
import About from "./Pages/About";

function App() {
  return (
    
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

      </Routes>

  );
}

export default App;
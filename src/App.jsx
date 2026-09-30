import { Route, Routes } from "react-router-dom";
import "./App.css";
import JobDetail from "./pages/user/jobs/JobDetail";
import Jobs from "./pages/user/jobs/Jobs";
import UserLayout from "./layouts/UserLayout";
import ApplyJob from "./pages/user/applications/applyNow/ApplyJob";
import Profile from "./pages/user/profile/Profile";
import Application from "./pages/user/applications/Application";

function App() {
  return (
    <div>
      <Routes>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Application />} />
        </Route>
        {/* Employer Routes */}
        {/* Admin Routes */}
      </Routes>
    </div>
  );
}

export default App;

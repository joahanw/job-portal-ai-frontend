import { Route, Routes } from "react-router-dom";
import "./App.css";
import JobDetail from "./pages/user/jobs/JobDetail";
import UserLayout from "./layouts/UserLayout";
import ApplyJob from "./pages/user/applications/applyNow/ApplyJob";
import Profile from "./pages/user/profile/Profile";
import Application from "./pages/user/applications/Application";
import SavedJobs from "./pages/user/jobs/savedJob/SavedJobs";
import EmployerLayout from "./layouts/EmployerLayout";
import Dashboard from "./pages/employer/dashboard/Dashboard";
import EmployerJobs from "./pages/employer/jobs/EmployerJobs";
import Jobs from "./pages/user/jobs/Jobs";
import CreateJob from "./pages/employer/jobs/CreateJob";
import EmployerApplications from "./pages/employer/applications/EmployerApplications";
import Candidates from "./pages/employer/candidates/Candidates";
import AIScreening from "./pages/employer/aiScreening/AIScreening";
import CompanyProfile from "./pages/employer/companyProfile/CompanyProfile";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import AdminProfile from "./pages/admin/settings/AdminProfile";
import AdminUsers from "./pages/admin/user/AdminUsers";
import Companies from "./pages/admin/companies/Companies";
import JobMetadata from "./pages/admin/jobmetadeta/JobMetadata";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply/:id" element={<ApplyJob />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/saved" element={<SavedJobs />} />
        </Route>
        {/* Employer Routes */}
        <Route path="/employer" element={<EmployerLayout />}>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="jobs" element={<EmployerJobs />}></Route>
          <Route path="jobs/create" element={<CreateJob />}></Route>
          <Route path="applications" element={<EmployerApplications />}></Route>
          <Route path="candidates" element={<Candidates />}></Route>
          <Route path="ai-screening" element={<AIScreening />}></Route>
          <Route path="company" element={<CompanyProfile />}></Route>
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<AdminDashboard />}></Route>
          <Route path="dashboard" element={<AdminDashboard />}></Route>
          <Route path="users" element={<AdminUsers />}></Route>
          <Route path="companies" element={<Companies />}></Route>
          <Route path="job-meta" element={<JobMetadata />}></Route>
          <Route path="settings" element={<AdminProfile />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

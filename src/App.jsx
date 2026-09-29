import { Route, Routes } from "react-router-dom";
import "./App.css";
import JobDetail from "./pages/user/jobs/JobDetail";
import Jobs from "./pages/user/jobs/Jobs";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;

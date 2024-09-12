import LandingPage from "./components/LandingPage";
import JobDetails from "./components/JobDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        {/* Use :id to pass dynamic job id */}
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

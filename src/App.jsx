import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/post" element={<PostJob />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/applications" element={<Applications />} />   
        </Routes>
      </div>
    </BrowserRouter>
  );
}






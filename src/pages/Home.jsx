import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getJobs } from "../api/jobApi";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        Find Your Dream Job
      </motion.h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {filtered.map((job) => (
          <JobCard key={job.jobId} job={job} />
        ))}
      </div>
    </div>
  );
}

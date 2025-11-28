import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobs } from "../api/jobApi";
import { motion } from "framer-motion";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobs().then((all) => {
      setJob(all.find((j) => j.jobId === id));
    });
  }, [id]);

  if (!job) return <p className="text-center mt-20">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto bg-white p-8 rounded shadow"
    >
      <h1 className="text-3xl font-bold text-blue-700">{job.title}</h1>
      <p className="text-xl mt-2">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>

      <p className="mt-6 text-gray-700">{job.description}</p>

      <Link
        to={`/apply/${job.jobId}`}
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Apply Now
      </Link>
    </motion.div>
  );
}

// src/components/JobCard.jsx
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company} — {job.location}</p>
      <p className="mt-2">{job.description}</p>

      <Link
  to={`/apply?jobId=${job.jobId}`}
  className="bg-blue-600 text-white px-3 py-1 rounded"
>
  Apply
</Link>
    </div>
  );
}

export default function JobList({ jobs = [] }) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Available Jobs
        </h2>
  
        {jobs.length === 0 && (
          <p className="text-gray-500">No jobs available.</p>
        )}
  
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li
              key={job.jobId}
              className="p-4 border rounded-lg hover:shadow-md transition bg-gray-50"
            >
              <h3 className="text-lg font-bold text-blue-700 flex justify-between">
                {job.title}
                <span className="text-sm text-gray-500">@ {job.company}</span>
              </h3>
  
              <p className="text-gray-600">{job.location}</p>
              <p className="mt-1 text-gray-700">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
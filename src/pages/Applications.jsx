// src/pages/Applications.jsx
import { useEffect, useState } from "react";
import { listApplications } from "../api/jobApi";

function formatDate(dateString) {
    if (!dateString) return "N/A";
  
    const date = new Date(dateString);
  
    // If date is invalid, return fallback
    if (isNaN(date)) return "N/A";
  
    return date.toLocaleString(); // shows readable date
  }
  

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const apps = await listApplications();
        setApplications(apps);
      } catch (err) {
        console.error("Error loading applications", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Convert s3://bucket/key → https://bucket.s3.amazonaws.com/key
  function convertS3(url) {
    if (url.startsWith("s3://")) {
      const parts = url.replace("s3://", "").split("/");
      const bucket = parts.shift();
      const key = parts.join("/");
      return `https://${bucket}.s3.amazonaws.com/${key}`;
    }
    return url;
  }

  return (
    <div className="px-10 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Applications Dashboard
      </h1>

      {loading ? (
        <p className="text-center">Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="text-center">No applications yet.</p>
      ) : (
        <div className="overflow-x-auto rounded shadow-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border">Job ID</th>
                <th className="px-4 py-3 border">Applied At</th>
                <th className="px-4 py-3 border">Resume</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((a) => (
               <tr key={a.applicationId} className="border hover:bg-gray-50">
               <td className="px-4 py-3 border">{a.name}</td>
               <td className="px-4 py-3 border">{a.email}</td>
               <td className="px-4 py-3 border">{a.jobId}</td>
               <td className="px-4 py-3 border">{formatDate(a.appliedAt)}</td>
               <td className="px-4 py-3 border">
                 <a
                   href={convertS3(a.resumeUrl)}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-blue-600 underline"
                 >
                   View Resume
                 </a>
               </td>
             </tr>             
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

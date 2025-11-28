// src/api/jobApi.js

const BASE_URL = "https://ts18uc5sb8.execute-api.us-east-1.amazonaws.com/prod";

// GET /jobs
export async function getJobs() {
    const res = await fetch(`${BASE_URL}/jobs`);
    const data = await res.json();
    return data.jobs;
  }
  

// POST /postJob
export async function postJob({ title, company, location, description }) {
  const res = await fetch(`${BASE_URL}/postJob`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, company, location, description })
  });
  if (!res.ok) throw new Error("Failed to post job");
  return await res.json();
}

// POST /applyJob
export async function applyJob({ name, email, jobId, resumeBase64 }) {
  const res = await fetch(`${BASE_URL}/applyJob`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, jobId, resumeBase64 })
  });
  if (!res.ok) throw new Error("Failed to apply for job");
  return await res.json();
}

// GET /listApplications
export async function listApplications() {
  const res = await fetch(`${BASE_URL}/listApplications`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) {
    throw new Error("Failed to load applications");
  }

  const data = await res.json();
  return data.applications;
}

import { useState, useEffect } from "react";
import { applyJob } from "../api/jobApi";
import { useSearchParams } from "react-router-dom";

export default function Apply() {
  const [searchParams] = useSearchParams();
  const jobIdFromURL = searchParams.get("jobId");

  const [form, setForm] = useState({
    name: "",
    email: "",
    jobId: jobIdFromURL || "",
    resumeBase64: ""
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    setForm((prev) => ({ ...prev, jobId: jobIdFromURL || "" }));
  }, [jobIdFromURL]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) {
      alert("Please upload a PDF");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setForm((prev) => ({ ...prev, resumeBase64: base64 }));
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.jobId) {
      alert("Invalid Job ID. Please apply again from the job listings page.");
      return;
    }

    if (!form.resumeBase64) {
      alert("Please upload your resume");
      return;
    }

    setStatus("Submitting...");

    try {
      await applyJob(form);
      setStatus("Application submitted ✔");
      setForm({ name: "", email: "", jobId: jobIdFromURL, resumeBase64: "" });
    } catch (err) {
      setStatus("Failed to submit ❌");
      console.error("Apply error:", err);
    }
  }

  return (
    <div className="p-10 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Apply for Job</h2>

      {!jobIdFromURL ? (
        <p className="text-red-600">⚠ Error: No Job ID found. Please return and click Apply again.</p>
      ) : (
        <p className="text-gray-700">Applying for Job ID: <b>{jobIdFromURL}</b></p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          className="border p-2 w-full"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className="border p-2 w-full"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          className="border p-2 w-full"
          accept="application/pdf"
          onChange={handleFileUpload}
          required
        />

        <button className="bg-blue-600 text-white p-2 w-full rounded">
          Submit Application
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}

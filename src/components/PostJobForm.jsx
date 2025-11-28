import { useState } from "react";
import { postJob } from "../api/jobApi";

export default function PostJobForm() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Posting job...");

    try {
      await postJob(form);
      setStatus("✔ Job posted successfully");
      setForm({ title: "", company: "", location: "", description: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Error posting job");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Post a New Job
      </h2>

      <input
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
      />

      <input
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
      />

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="description"
        placeholder="Job Description"
        value={form.description}
        onChange={handleChange}
        required
        className="w-full border rounded px-3 py-2 h-24 focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Post Job
      </button>

      {status && <p className="text-sm text-gray-700">{status}</p>}
    </form>
  );
}

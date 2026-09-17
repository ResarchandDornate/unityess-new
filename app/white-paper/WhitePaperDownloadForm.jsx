"use client";

import { useState } from "react";

const LEAD_API_URL =
  process.env.NEXT_PUBLIC_LEAD_API_URL || "https://backoffice-prod.ornatesolar.com/api/leads/website-lead/";

const INITIAL_FORM = { name: "", email: "", org: "" };

export default function WhitePaperDownloadForm({ title, pdfFile }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name: form.name,
      phone: "",
      email: form.email,
      company: form.org,
      remark: "",
      message: `White paper download: ${title}`,
      website_url: "unityess.ai",
      lead_type: "Unityess-Whitepaper-Download",
    };

    setSubmitting(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const res = await fetch(LEAD_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setForm(INITIAL_FORM);
        const link = document.createElement("a");
        link.href = pdfFile;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        link.remove();
        setStatusMessage("Thank you! Your whitepaper is downloading.");
        setStatusType("success");
      } else {
        setStatusMessage("Submission failed. Please try again.");
        setStatusType("error");
      }
    } catch (err) {
      setStatusMessage("Network error occurred. Please try again later.");
      setStatusType("error");
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 5000);
    }
  }

  return (
    <form className="wp-download-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Work Email" required value={form.email} onChange={handleChange} />
      <input type="text" name="org" placeholder="Company" value={form.org} onChange={handleChange} />
      <button type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Submit"}</button>
      <p className={`qstatus${statusType ? " " + statusType : ""}`} aria-live="polite">{statusMessage}</p>
    </form>
  );
}

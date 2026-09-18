"use client";

import { useEffect, useMemo, useState } from "react";

// Keyed by filename only (no folder path) so the ?datasheet= query param
// never needs to carry a "/" — a bare filename never gets percent-encoded,
// so the URL stays readable (…?datasheet=aura.pdf instead of …?datasheet=%2Fassets%2F…).
const RESOURCES = {
  "aura.pdf": { label: "Aura", path: "/assets/datasheets/aura.pdf" },
  "aqua.pdf": { label: "Aqua", path: "/assets/datasheets/aqua.pdf" },
  "ultima.pdf": { label: "Ultima", path: "/assets/datasheets/ultima.pdf" },
  "why-voltage-levels-matter-in-bess.pdf": {
    label: "Voltage Levels in BESS",
    path: "/assets/whitepapers/why-voltage-levels-matter-in-bess.pdf",
    whitepaper: true,
  },
};

const LEAD_API_URL =
  process.env.NEXT_PUBLIC_LEAD_API_URL || "https://backoffice-prod.ornatesolar.com/api/leads/website-lead/";

const INITIAL_FORM = { name: "", phone: "", email: "", org: "", useCase: "", req: "" };

export default function QuoteForm() {
  const [datasheetUrl, setDatasheetUrl] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // '', 'success', 'error'

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setDatasheetUrl(params.get("datasheet"));
  }, []);

  // datasheetUrl is now just a bare filename (e.g. "aura.pdf"); fall back to
  // treating it as a full path too, so any old-format link keeps working.
  const resource = useMemo(() => {
    if (!datasheetUrl) return null;
    const file = datasheetUrl.split("/").pop();
    return RESOURCES[file] || null;
  }, [datasheetUrl]);

  const isWhitepaper = resource?.whitepaper ?? false;
  const resourceLabel = isWhitepaper ? "whitepaper" : "datasheet";
  const productName = resource?.label || (datasheetUrl ? "product" : null);
  const downloadPath = resource?.path || datasheetUrl;

  const eyebrowText = datasheetUrl ? `Download ${isWhitepaper ? "Whitepaper" : "Datasheet"}` : "Request a quote";
  const headingL1 = datasheetUrl ? `Get the ${productName}` : "Tell us about your site,";
  const headingL2 = datasheetUrl ? `${resourceLabel}, sent straight to you.` : "load profile, or project scale.";
  const leadText = datasheetUrl
    ? `Fill in your details and the ${productName} ${resourceLabel} will download automatically.`
    : "Our engineers will size the right system for your load profile and get back to you directly.";
  const btnLabel = submitting ? "Submitting…" : datasheetUrl ? "Submit & Download" : "Submit request";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      company: form.org,
      remark: form.useCase,
      message: form.req,
      website_url: "unityess.ai",
      lead_type: datasheetUrl ? (isWhitepaper ? "Unityess-Whitepaper-Download" : "Unityess-Datasheet-Download") : "Unityess",
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
        if (downloadPath) {
          const link = document.createElement("a");
          link.href = downloadPath;
          link.download = "";
          document.body.appendChild(link);
          link.click();
          link.remove();
          setStatusMessage(`Thank you! Your ${resourceLabel} is downloading.`);
        } else {
          setStatusMessage("Query submitted successfully!");
        }
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
    <>
      <div className="center-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
        <div className="eyebrow center fade" id="qEyebrow">{eyebrowText}</div>
        <h2 className="h2" style={{ marginTop: "1.2rem" }}>
          <span className="line-mask"><span id="qHeadingL1">{headingL1}</span></span>
          <span className="line-mask"><span className="grad" id="qHeadingL2">{headingL2}</span></span>
        </h2>
        <p className="lead reveal" style={{ marginTop: "1.6rem", maxWidth: "50ch", marginInline: "auto" }} id="qLead">{leadText}</p>
      </div>
      <div className="glass-panel reveal qform-panel" style={{ padding: "clamp(1.3rem,3vw,1.9rem)", maxWidth: "640px", marginInline: "auto" }}>
        <form className="qform" id="quoteForm" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="qName">Your name *</label>
            <input id="qName" name="name" type="text" placeholder="Enter your name" required autoComplete="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="qPhone">Phone number *</label>
            <input id="qPhone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required autoComplete="tel" value={form.phone} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="qEmail">Email address *</label>
            <input id="qEmail" name="email" type="email" placeholder="you@company.com" required autoComplete="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="qOrg">Organization</label>
            <input id="qOrg" name="org" type="text" placeholder="Your company name" autoComplete="organization" value={form.org} onChange={handleChange} />
          </div>
          <div className="field full">
            <label htmlFor="qUseCase">Remarks / Use Case</label>
            <input id="qUseCase" name="useCase" type="text" placeholder="e.g. Factory / Office / Hospitality" value={form.useCase} onChange={handleChange} />
          </div>
          <div className="field full">
            <label htmlFor="qReq">Requirement</label>
            <textarea id="qReq" name="req" placeholder="Tell us about your site, load profile, or project scale." value={form.req} onChange={handleChange}></textarea>
          </div>
          <div className="field full" style={{ alignItems: "center" }}>
            <button type="submit" className="btn" data-hot disabled={submitting}><span id="qBtnLabel">{btnLabel}</span></button>
            <p id="qStatus" className={`qstatus${statusType ? " " + statusType : ""}`} aria-live="polite">{statusMessage}</p>
          </div>
        </form>
      </div>
    </>
  );
}

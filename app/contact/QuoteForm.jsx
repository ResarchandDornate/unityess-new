"use client";

import { useEffect, useMemo, useState } from "react";

const PRODUCT_NAMES = { "aura.pdf": "Aura", "aqua.pdf": "Aqua", "ultima.pdf": "Ultima" };

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

  const productName = useMemo(() => {
    if (!datasheetUrl) return null;
    const file = datasheetUrl.split("/").pop();
    return PRODUCT_NAMES[file] || "product";
  }, [datasheetUrl]);

  const eyebrowText = datasheetUrl ? "Download Datasheet" : "Request a quote";
  const headingL1 = datasheetUrl ? `Get the ${productName}` : "Tell us about your site,";
  const headingL2 = datasheetUrl ? "datasheet, sent straight to you." : "load profile, or project scale.";
  const leadText = datasheetUrl
    ? `Fill in your details and the ${productName} datasheet will download automatically.`
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
      lead_type: datasheetUrl ? "Unityess-Datasheet-Download" : "Unityess",
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
        if (datasheetUrl) {
          const link = document.createElement("a");
          link.href = datasheetUrl;
          link.download = "";
          document.body.appendChild(link);
          link.click();
          link.remove();
          setStatusMessage("Thank you! Your datasheet is downloading.");
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
      <div className="glass-panel reveal" style={{ padding: "clamp(1.8rem,4vw,2.8rem)", maxWidth: "900px", marginInline: "auto" }}>
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

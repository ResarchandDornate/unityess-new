"use client";

export default function SidebarLeadForm() {
  return (
    <form className="kc-lead-form" onSubmit={(e) => e.preventDefault()}>
      <div className="kc-lead-title">Get a Quote</div>
      <p className="kc-lead-sub">Tell us about your site — our team gets back within 24 hours.</p>
      <input type="text" placeholder="Your name" required />
      <input type="tel" placeholder="Phone number" required />
      <input type="email" placeholder="Email" required />
      <button type="submit">Request Callback</button>
    </form>
  );
}

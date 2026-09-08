"use client";

export default function NewsletterForm() {
  return (
    <form className="kc-newsletter-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="you@company.com" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}

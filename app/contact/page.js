import "./contact.css";
import Link from "next/link";
import QuoteForm from "./QuoteForm";

export const metadata = {
  title: "Contact — Let's Build Something That Doesn't Go Dark | UnityESS",
  description:
    "Talk to UnityESS engineering — sizing a system for a single facility or planning a utility-scale project. Call 1800-2026-252, email info@ornatesolar.com, or request a quote for your load profile.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <header className="hero centered" id="top" style={{ height: "65svh", minHeight: "460px" }}>
        <div className="hero-media" style={{ inset: 0 }}>
          <img src="/assets/img/unityess-storage-system-at-an-ev-charging-site.webp?v=2" alt="UnityESS storage system at an EV charging site" />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-inner">
          <div className="eyebrow line-mask" style={{ marginTop: "1.1rem" }}><span>Contact</span></div>
          <h1 className="display" style={{ marginTop: ".9rem" }}>
            <span className="line-mask"><span>Let&rsquo;s build something</span></span>
            <span className="line-mask"><span className="grad">that doesn&rsquo;t go dark.</span></span>
          </h1>
        </div>
      </header>

      {/* REACH US */}
      <section className="pad" id="reach" style={{ paddingBottom: "clamp(2rem,5vh,4rem)" }}>
        <div className="wrap">
          <div className="found-grid">
            <div className="tcard reveal">
              <div className="tmark">Talk to a human</div>
              <p><a href="tel:+9118002026252" data-hot>1800-2026-252</a></p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">Email</div>
              <p><a href="mailto:info@ornatesolar.com" data-hot>info@ornatesolar.com</a></p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">Head office</div>
              <p>A-87, Okhla Phase II<br />New Delhi, India</p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">File a complaint</div>
              <p>For service or product issues on a deployed system.<br /><a href="https://service.unityess.cloud/report" data-hot>Complaint Portal &rarr;</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST A QUOTE */}
      <section className="pad" id="quote" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <QuoteForm />
        </div>
      </section>

      {/* WHERE WE ARE */}
      <section className="pad alt" id="where">
        <div className="wrap">
          <div className="center-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <div className="eyebrow center fade">Where we are</div>
            <h2 className="h2" style={{ marginTop: "1.2rem" }}><span className="line-mask"><span>Head office</span></span><span className="line-mask"><span className="grad">and manufacturing.</span></span></h2>
          </div>
          <div className="found-grid" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: "820px", marginInline: "auto" }}>
            <div className="tcard reveal">
              <div className="tmark">New Delhi</div>
              <p><strong>Head office.</strong><br />A-87, Okhla Phase II, New Delhi, India<br /><a href="tel:+9118002026252" data-hot>1800-2026-252</a></p>
            </div>
            <div className="tcard reveal">
              <div className="tmark">Ghiloth, Rajasthan</div>
              <p><strong>Manufacturing facility.</strong><br />6-acre facility &middot; 6.5 GWh annual manufacturing capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* A JOINT VENTURE — CTA */}
      <section className="cta-full" id="jv">
        <div className="cta-media" data-parallax="0.1"><img src="/assets/img/unityess-storage-cabinets-on-a-solar-site-at-sunrise.webp?v=2" alt="UnityESS storage cabinets on a solar site at sunrise" /></div>
        <div className="cta-scrim"></div>
        <div className="cta-inner">
          <div className="eyebrow center line-mask" style={{ color: "#a7d6dc" }}><span>A joint venture</span></div>
          <h2 className="h2" style={{ marginTop: "1.2rem", maxWidth: "36ch" }}><span className="line-mask"><span>Backed by Ornate Solar</span></span><span className="line-mask"><span className="grad">and Inverted Energy, working as one.</span></span></h2>
          <div className="reveal" style={{ marginTop: "2.2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" className="btn" data-hot><span>About UnityESS</span></Link>
            <Link href="/products" className="btn ghost" data-hot><span>View Products</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
